import React, { memo, useCallback } from "react";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

function Page({ page, navBar }: PageProps) {
  return (
    <Layout nav={navBar}>
      <div>hello</div>
    </Layout>
  );
}

const arePropsEqual = (prevProps: PageProps, nextProps: PageProps): boolean => {
  // Compare the relevant props to determine equality
  return prevProps.page.data === nextProps.page.data;
};

export default memo(Page, arePropsEqual);

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const [navBar, page] = await Promise.all([
    client.getByUID("navigation", "nav"),
    client.getByUID("page", "home"),
  ]);

  return {
    props: {
      page,
      navBar,
    },
  };
}

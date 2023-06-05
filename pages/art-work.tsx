import React, { memo, useCallback } from "react";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import ArtWork from "components/Artwork";
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page, navBar }: PageProps) {
  return (
    <Layout nav={navBar} loader={false}>
      <ArtWork data={page} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const [navBar, page] = await Promise.all([
    client.getByUID("navigation", "nav"),
    client.getAllByType("artpiece"),
  ]);

  return {
    props: {
      page,
      navBar,
    },
  };
}

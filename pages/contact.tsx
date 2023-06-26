import React, { useEffect } from "react";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import { useImageLoadingContext } from "@/contexts/LoadingContext";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page, navBar }: PageProps) {
  const { setShowLoadingFrame } = useImageLoadingContext();
  useEffect(() => {
    setShowLoadingFrame(false);
    // eslint-disable-next-line
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <Layout nav={navBar} loader={false} seo={page.data}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const [navBar, page] = await Promise.all([
    client.getByUID("navigation", "nav"),
    client.getByUID("page", "contact"),
  ]);

  return {
    props: {
      page,
      navBar,
    },
  };
}

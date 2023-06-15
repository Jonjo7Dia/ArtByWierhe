import React from "react";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import ArtWork from "components/Artwork";
import { useImageLoadingContext } from "@/contexts/LoadingContext";
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page, navBar }: PageProps) {
  const { setShowLoadingFrame } = useImageLoadingContext();
  setShowLoadingFrame(false);
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

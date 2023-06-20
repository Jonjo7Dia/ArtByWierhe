import React, { useEffect } from "react";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import ArtWork from "components/Artwork";
import { useImageLoadingContext } from "@/contexts/LoadingContext";
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page, navBar, artpieces }: PageProps) {
  const { setShowLoadingFrame } = useImageLoadingContext();

  useEffect(() => {
    setShowLoadingFrame(false);
  }, []);
  return (
    <Layout nav={navBar} loader={false} seo={page.data}>
      <ArtWork data={artpieces} />
    </Layout>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const [navBar, artpieces, page] = await Promise.all([
    client.getByUID("navigation", "nav"),
    client.getAllByType("artpiece"),
    client.getByUID("page", "art-work"),
  ]);

  return {
    props: {
      navBar,
      artpieces,
      page,
    },
  };
}

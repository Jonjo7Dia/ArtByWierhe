import React from "react";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import Exhibition from "components/Exhibition";
import { useImageLoadingContext } from "@/contexts/LoadingContext";
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page, navBar }: PageProps) {
  const { setShowLoadingFrame } = useImageLoadingContext();
  setShowLoadingFrame(false);
  return (
    <Layout nav={navBar} loader={false}>
      {page.data.slices.length > 0 && <Exhibition data={page.data.slices} />}
    </Layout>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const [navBar, page] = await Promise.all([
    client.getByUID("navigation", "nav"),
    client.getByUID("page", "exhibition"),
  ]);

  return {
    props: {
      page,
      navBar,
    },
  };
}

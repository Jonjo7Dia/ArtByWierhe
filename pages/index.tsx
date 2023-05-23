import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page }: PageProps) {
  return (
    <Layout>
      <SliceZone slices={page.data.slices} components={components} />{" "}
    </Layout>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home");
  //    ^ Typed as PageDocument

  return {
    props: {
      page,
    },
  };
}

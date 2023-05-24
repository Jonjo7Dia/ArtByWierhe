import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { useImageLoadingContext } from "contexts/LoadingContext";
import { useEffect } from "react";
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page }: PageProps) {
  const { totalImages, setTotalImages } = useImageLoadingContext();

  function getTotalImages(array: Array<any>) {
    return array.reduce((total, current) => {
      if (current.id.includes("images_hero")) {
        if (current.variation === "default") {
          total += 1;
        } else {
          total += 3;
        }
      }
      return total;
    }, 0);
  }
  useEffect(() => {
    setTotalImages(getTotalImages(page.data.slices));
  }, [page.data.slices, setTotalImages]);
  console.log(totalImages);

  return (
    <Layout>
      <SliceZone slices={page.data.slices} components={components} />
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

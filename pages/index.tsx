import React, { memo, useCallback } from "react";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { useImageLoadingContext } from "contexts/LoadingContext";
import { useEffect } from "react";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

function Page({ page }: PageProps) {
  const { totalImages, setTotalImages } = useImageLoadingContext();

  const getTotalImages = useCallback((array: Array<any>) => {
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
  }, []);

  useEffect(() => {
    setTotalImages(getTotalImages(page.data.slices));
  }, [page.data.slices, setTotalImages, getTotalImages]);

  console.log(totalImages);

  return (
    <Layout>
      <SliceZone slices={page.data.slices} components={components} />
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

  const page = await client.getByUID("page", "home");

  return {
    props: {
      page,
    },
  };
}

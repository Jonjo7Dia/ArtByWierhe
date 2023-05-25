import React, { memo, useCallback } from "react";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import Layout from "components/Layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { useImageLoadingContext } from "contexts/LoadingContext";
import { useEffect } from "react";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

function Page({ page, navBar }: PageProps) {
  const { setTotalImages, setTotalHeroObjects } = useImageLoadingContext();

  const getTotalImagesAndHeroObjects = useCallback((array: Array<any>) => {
    let heroObjects = 0;
    const totalImages = array.reduce((total, current) => {
      if (current.id.includes("images_hero")) {
        heroObjects++;
        if (current.variation === "default") {
          total += 1;
        } else {
          total += 3;
        }
      }
      return total;
    }, 0);

    return { totalImages, heroObjects };
  }, []);

  useEffect(() => {
    const { totalImages, heroObjects } = getTotalImagesAndHeroObjects(
      page.data.slices
    );
    setTotalImages(totalImages);
    setTotalHeroObjects(heroObjects);
  }, [
    page.data.slices,
    setTotalImages,
    setTotalHeroObjects,
    getTotalImagesAndHeroObjects,
  ]);

  return (
    <Layout nav={navBar}>
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

import classes from "styles/component/mixHero.module.scss";
import Image from "next/image";
import { useImageLoadingContext } from "@/contexts/LoadingContext";
import { useCallback, useState } from "react";

export default function MixHero({ data, order }: any) {
  const firstPortait = data.primary.background_image_portrait;
  const landscape = data.primary.background_landscape;
  const secondPortait = data.primary.background_image_portrait_2;
  const { incrementLoadedImages, totalHeroObjects } = useImageLoadingContext();
  let animationStyles;
  const handleImageLoad = useCallback(() => {
    incrementLoadedImages();
  }, [incrementLoadedImages]);

  if (order == totalHeroObjects - 1) {
    animationStyles = { animation: "fadeOut 1s", animationDelay: "6s" };
  }
  return (
    <div className={classes["mixHero"]} style={animationStyles}>
      <div className={classes["mixHero__portrait"]}>
        <Image
          alt={firstPortait.alt}
          src={firstPortait.url}
          width={337}
          height={550}
          priority
          className={"heroImage"}
          onLoad={handleImageLoad}
        />
      </div>
      <div className={classes["mixHero__landscape"]}>
        <Image
          alt={landscape.alt}
          src={landscape.url}
          width={470}
          height={370}
          priority
          className={"heroImage"}
          onLoad={handleImageLoad}
        />
      </div>
      <div
        className={`${classes["mixHero__portrait"]} ${classes["mixHero__portrait--left"]}`}
      >
        <Image
          alt={secondPortait.alt}
          src={secondPortait.url}
          width={337}
          height={550}
          priority
          className={"heroImage"}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}

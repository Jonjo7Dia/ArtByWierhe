import classes from "styles/component/defaultHero.module.scss";
import Image from "next/image";
import { useImageLoadingContext } from "@/contexts/LoadingContext";
import { useCallback } from "react";
export default function SingleLandscapeHero({ data }: any) {
  const image = data.primary.background_landscape;
  const { incrementLoadedImages } = useImageLoadingContext();

  const handleImageLoad = useCallback(() => {
    incrementLoadedImages();
  }, [incrementLoadedImages]);
  return (
    <div className={classes["defaultHero"]}>
      <div className={classes["defaultHero__landscape"]}>
        <Image
          alt={image.alt}
          src={image.url}
          width={864}
          height={660}
          priority
          className={"heroImage"}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}

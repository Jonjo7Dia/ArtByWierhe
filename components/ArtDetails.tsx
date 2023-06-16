import { useEffect } from "react";
import classes from "styles/component/artWork.module.scss";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";

export default function ArtDetails({
  closeModal,
  image,
  description,
  title,
  type,
}: any) {
  const portrait = type == "Portrait";
  const width = 1200;
  const height = portrait ? 1600 : 960;
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Enable scrolling on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={classes["artDetails"]}>
      <div className={classes["artDetails__nav"]}>
        <div
          className={classes["artDetails__button"]}
          onClick={closeModal}
        ></div>
      </div>
      <h2
        className={`${classes["artDetails__title"]} ${classes["artDetails__title--row"]}`}
      >
        {title}
      </h2>

      <div className={classes["artDetails__about"]}>
        <div className={classes["artDetails__image-wrapper"]}>
          <Image
            src={image.url}
            alt={image.alt}
            width={width}
            height={height}
            className={`${classes["artDetails__image"]} ${
              portrait ? classes["artDetails__image--portrait"] : ""
            }`}
            priority
          />
        </div>
        <div className={classes["artDetails__info"]}>
          <h2 className={classes["artDetails__title"]}>{title}</h2>
          <PrismicRichText field={description} />
        </div>
      </div>
    </div>
  );
}

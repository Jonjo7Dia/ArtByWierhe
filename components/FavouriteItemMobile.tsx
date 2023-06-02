import { usePrismicDocumentByUID } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";
import classes from "styles/component/favouriteBlock.module.scss";
import Image from "next/image";

export default function FavouriteItemMobile({ documentType, uid }: any) {
  const item = usePrismicDocumentByUID(documentType, uid);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const portrait = item[0]?.data.type == "Portrait";
  const width = 1200;
  const height = portrait ? 1600 : 960;
  const windowHeight = window.innerHeight;
  const [opacityLevel, setOpacityLevel] = useState(0);
  const infoStyle: React.CSSProperties = {
    opacity: opacityLevel,
    // Add any other desired styles here
  };
  // Initially position the image so its bottom is visible
  const handleOpacity = () => {
    if (imageRef.current) {
      const top = imageRef.current.getBoundingClientRect().top;
      const bottom = top + 200;
      if (bottom < windowHeight && top > 0) {
        console.log(bottom);
        setOpacityLevel(1);
      } else if (top < 0 || bottom > windowHeight) {
        setOpacityLevel(0);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    });

    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }
    window.addEventListener("scroll", handleOpacity);

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
      window.removeEventListener("scroll", handleOpacity);
    };
  });
  return (
    <div className={classes["favItemMobile"]}>
      <div
        className={`${classes["favItemMobile__image-wrapper"]} ${
          portrait ? classes["favItemMobile__image-wrapper--portrait"] : ""
        }`}
      >
        <Image
          alt={item[0]?.data.image.alt}
          src={item[0]?.data.image.url}
          width={width}
          height={height}
          className={classes["favItemMobile__image"]}
        />
      </div>
      <div
        ref={imageRef}
        className={classes["favItemMobile__info-wrapper"]}
        style={infoStyle}
      >
        <div className={classes["favItemMobile__info"]}>
          <h2 className={classes["favItemMobile__info-title"]}>
            {item[0]?.data.art_name}
          </h2>
          <p className={classes["favItemMobile__info-description"]}>
            {item[0]?.data.description[0].text}
          </p>
        </div>
      </div>
    </div>
  );
}

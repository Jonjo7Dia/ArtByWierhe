import classes from "styles/component/favouriteBlock.module.scss";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
export default function FavouriteItemImage({
  show,
  xCoordinate,
  description,
  image,
  orientation,
}: any) {
  const styles: React.CSSProperties = {
    opacity: show ? 1 : 0,
    transform: `translateX(${xCoordinate - 450}px) translateY(-50%)`, // Combine transform values
  };

  return (
    <div className={classes["favBlock__content"]} style={styles}>
      <div className={classes["favBlock__image"]}>
        {orientation === "Portrait" && (
          <Image
            src={image.url}
            alt={image.alt}
            height={600}
            width={450}
            className={classes["favBlock__img"]}
          />
        )}
        {orientation === "Landscape" && (
          <Image
            src={image.url}
            alt={image.alt}
            height={420}
            width={455}
            className={`${classes["favBlock__img"]}`}
          />
        )}
      </div>
      <div className={classes["favBlock__description"]}>
        <PrismicRichText field={description} />
      </div>
    </div>
  );
}

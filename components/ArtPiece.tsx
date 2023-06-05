import Image from "next/image";
import classes from "styles/component/artWork.module.scss";
export default function ArtPiece({ data }: any) {
  const portrait = data.type == "Portrait";
  const image = data.image;
  const width = 1200;
  const height = portrait ? 1600 : 960;
  return (
    <div className={classes["artWork__piece"]}>
      <Image
        src={image.url}
        alt={image.alt}
        width={width}
        height={height}
        className={`${classes["artWork__piece-image"]} ${
          portrait ? classes["artWork__piece-image--portrait"] : ""
        }`}
      />
    </div>
  );
}

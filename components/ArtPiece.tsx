import Image from "next/image";
import { useState } from "react";
import classes from "styles/component/artWork.module.scss";
import ArtDetails from "./ArtDetails";
export default function ArtPiece({ data }: any) {
  const [showTitle, setShowTitle] = useState(false);
  const portrait = data.type == "Portrait";
  const image = data.image;
  const width = 1200;
  const height = portrait ? 1600 : 960;
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsHandler = () => {
    setShowDetails((prevState) => !prevState);
  };
  return (
    <>
      <div
        className={classes["artWork__piece"]}
        onMouseEnter={() => {
          setShowTitle(true);
        }}
        onMouseLeave={() => {
          setShowTitle(false);
        }}
        onClick={showDetailsHandler}
      >
        <Image
          src={image.url}
          alt={image.alt}
          width={width}
          height={height}
          className={`${classes["artWork__piece-image"]} ${
            portrait ? classes["artWork__piece-image--portrait"] : ""
          }`}
          priority
          blurDataURL={image.url}
        />
        <div
          className={`${classes["artWork__title"]} ${
            showTitle ? classes["artWork__title--show"] : ""
          }`}
        >
          <h2 className={classes["artWork__artName"]}>{data.art_name}</h2>
        </div>
      </div>
      {showDetails && (
        <ArtDetails
          closeModal={showDetailsHandler}
          image={data.image}
          description={data.description}
          title={data.art_name}
          type={data.type}
        />
      )}
    </>
  );
}

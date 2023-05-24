import classes from "styles/component/mixHero.module.scss";
import Image from "next/image";
export default function MixHero({ data }: any) {
  const firstPortait = data.primary.background_image_portrait;
  const landscape = data.primary.background_landscape;
  const secondPortait = data.primary.background_image_portrait_2;

  return (
    <div className={classes["mixHero"]}>
      <div className={classes["mixHero__portrait"]}>
        <Image
          alt={firstPortait.alt}
          src={firstPortait.url}
          width={337}
          height={550}
          priority
          className={"heroImage"}
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
        />
      </div>
    </div>
  );
}

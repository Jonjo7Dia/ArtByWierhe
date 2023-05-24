import classes from "styles/component/tripleHeroBlock.module.scss";
import Image from "next/image";
export default function TriplePortrait({ data }: any) {
  const firstPortait = data.primary.background_image_portrait;
  const secondPortait = data.primary.background_image_portrait_2;
  const thirdPortait = data.primary.background_image_portrait_3;

  return (
    <div className={classes["tripleHero"]}>
      <div className={classes["tripleHero__portrait"]}>
        <Image
          alt={firstPortait.alt}
          src={firstPortait.url}
          width={337}
          height={550}
          priority
          className={"heroImage"}
        />
      </div>
      <div className={classes["tripleHero__portrait"]}>
        <Image
          alt={secondPortait.alt}
          src={secondPortait.url}
          width={337}
          height={550}
          priority
          className={"heroImage"}
        />
      </div>
      <div className={classes["tripleHero__portrait"]}>
        <Image
          alt={thirdPortait.alt}
          src={thirdPortait.url}
          width={337}
          height={550}
          priority
          className={"heroImage"}
        />
      </div>
    </div>
  );
}

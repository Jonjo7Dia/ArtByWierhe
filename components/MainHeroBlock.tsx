import classes from "styles/component/mainHeroBlock.module.scss";
import MixHero from "./HeroVariations.tsx/MixHero";
import SingleLandscapeHero from "./HeroVariations.tsx/SingleLandscapeHero";
import TriplePortrait from "./HeroVariations.tsx/TriplePortrait";
export default function HeroBlock({ slice }: any) {
  const order = slice.primary.order != null ? slice.primary.order - 1 : 0;
  const variation = slice.variation;
  console.log(order);
  return (
    <div className={classes["mainHero"]} style={{ zIndex: order }}>
      {variation === "default" && (
        <div className={classes["mainHero__wrapper"]}>
          <SingleLandscapeHero data={slice} order={order} />
        </div>
      )}
      {variation === "threePortraitBackground" && (
        <div className={classes["mainHero__wrapper"]}>
          <TriplePortrait data={slice} order={order} />
        </div>
      )}
      {variation === "backgroundImageMix" && (
        <div className={classes["mainHero__wrapper"]}>
          <MixHero data={slice} order={order} />
        </div>
      )}
    </div>
  );
}

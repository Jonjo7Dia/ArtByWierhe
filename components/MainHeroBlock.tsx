import classes from "styles/component/mainHeroBlock.module.scss";
import MixHero from "./HeroVariations.tsx/MixHero";
import SingleLandscapeHero from "./HeroVariations.tsx/SingleLandscapeHero";
import TriplePortrait from "./HeroVariations.tsx/TriplePortrait";
import { useImageLoadingContext } from "@/contexts/LoadingContext";
import { useEffect, useRef, useState } from "react";

export default function HeroBlock({ slice }: any) {
  const order = slice.primary.order != null ? slice.primary.order - 1 : 0;
  const variation = slice.variation;
  const { loadedImages, totalImages, totalHeroObjects } =
    useImageLoadingContext();
  const [isLoading, setIsLoading] = useState(true);
  const animationStyles: { [key: string]: any } = useRef(
    {} // when condition is not met, opacity 0
  );

  useEffect(() => {
    if (order + 1 === totalHeroObjects) {
      animationStyles.current = { opacity: 1 };
    } else {
      animationStyles.current = { opacity: 0 };
    }
  }, [order, totalHeroObjects]);
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    if (loadedImages === totalImages && totalImages > 0) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);

        if (order + 1 == totalHeroObjects) {
          animationStyles.current = {
            animation: "fadeOut 2s forwards",
          };
        } else if (order === 0) {
          animationStyles.current = {
            animation: "fadeIn 2s forwards",
          };
        } else {
          animationStyles.current = {
            animation: "fadeInOut 2s forwards",
          };
        }
      }, (totalHeroObjects - order + 1) * 2000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [loadedImages, totalImages, totalHeroObjects, order]);

  return (
    <div
      className={classes["mainHero"]}
      style={{ zIndex: order, ...animationStyles.current }}
    >
      {
        <div className={classes["mainHero__wrapper"]}>
          {variation === "default" && (
            <SingleLandscapeHero data={slice} order={order} />
          )}
          {variation === "threePortraitBackground" && (
            <TriplePortrait data={slice} order={order} />
          )}
          {variation === "backgroundImageMix" && (
            <MixHero data={slice} order={order} />
          )}
        </div>
      }
    </div>
  );
}

import { useState, useEffect } from "react";
import { useImageLoadingContext } from "contexts/LoadingContext";
import classes from "styles/component/loadingFrame.module.scss";

export default function LoadingFrame({ data }: any) {
  const [isLoading, setIsLoading] = useState(true);

  const { loadedImages, totalImages } = useImageLoadingContext();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (loadedImages === totalImages && totalImages > 0) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [loadedImages, totalImages]);

  return (
    <div
      className={`${classes["loadingFrame"]} ${
        isLoading && classes["loadingFrame--loading"]
      }`}
    >
      <div className={classes["loadingFrame__text"]}>
        <h1 className={classes["loadingFrame__title"]}>{data.primary.title}</h1>
        {isLoading && <div className={classes["loadingFrame__shadow"]}></div>}
      </div>
      {isLoading && (
        <div className={classes["loadingFrame__loading"]}>
          <h2 className={classes["loadingFrame__loading-text"]}>Loading</h2>
        </div>
      )}
    </div>
  );
}

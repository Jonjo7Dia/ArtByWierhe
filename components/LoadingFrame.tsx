import classes from "styles/component/loadingFrame.module.scss";
export default function LoadingFrame({ isLoading, data }: boolean | any) {
  console.log(data);
  return (
    <div className={classes["loadingFrame"]}>
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

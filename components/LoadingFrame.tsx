import classes from "styles/component/loadingFrame.module.scss";
export default function LoadingFrame() {
  return (
    <div className={classes["loadingFrame"]}>
      <div className={classes["loadingFrame__text"]}>
        <h1 className={classes["loadingFrame__title"]}>art by wierhe</h1>
        <div className={classes["loadingFrame__shadow"]}></div>
      </div>
      <div className={classes["loadingFrame__loading"]}>
        <h2 className={classes["loadingFrame__loading-text"]}>Loading</h2>
      </div>
    </div>
  );
}

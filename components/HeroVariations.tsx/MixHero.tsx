import classes from "styles/component/mixHero.module.scss";
export default function MixHero() {
  return (
    <div className={classes["mixHero"]}>
      <div className={classes["mixHero__portrait"]}></div>
      <div className={classes["mixHero__landscape"]}></div>
      <div
        className={`${classes["mixHero__portrait"]} ${classes["mixHero__portrait--left"]}`}
      ></div>
    </div>
  );
}

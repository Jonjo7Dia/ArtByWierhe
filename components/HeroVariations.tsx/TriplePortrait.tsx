import classes from "styles/component/tripleHeroBlock.module.scss";
export default function TriplePortrait() {
  return (
    <div className={classes["tripleHero"]}>
      <div className={classes["tripleHero__portrait"]}></div>
      <div className={classes["tripleHero__portrait"]}></div>
      <div className={classes["tripleHero__portrait"]}></div>
    </div>
  );
}

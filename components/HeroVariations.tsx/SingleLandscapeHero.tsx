import classes from "styles/component/defaultHero.module.scss";
export default function SingleLandscapeHero({ data }: any) {
  console.log(data);
  return (
    <div className={classes["defaultHero"]}>
      <div className={classes["defaultHero__landscape"]}></div>
    </div>
  );
}

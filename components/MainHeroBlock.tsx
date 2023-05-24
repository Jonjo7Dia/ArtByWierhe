import classes from "styles/component/mainHeroBlock.module.scss";

export default function HeroBlock({ slice }: any) {
  const order = slice.primary.order != null ? slice.primary.order - 1 : 0;
  return (
    <div className={classes["mainHero"]} style={{ zIndex: order }}>
      <div className={classes["mainHero__wrapper"]}></div>
    </div>
  );
}

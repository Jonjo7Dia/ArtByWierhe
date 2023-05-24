import classes from "styles/component/defaultHero.module.scss";
import Image from "next/image";
export default function SingleLandscapeHero({ data }: any) {
  const image = data.primary.background_landscape;
  return (
    <div className={classes["defaultHero"]}>
      <div className={classes["defaultHero__landscape"]}>
        <Image
          alt={image.alt}
          src={image.url}
          width={864}
          height={660}
          priority
          className={"heroImage"}
        />
      </div>
    </div>
  );
}

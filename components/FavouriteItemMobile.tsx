import { usePrismicDocumentByUID } from "@prismicio/react";
import classes from "styles/component/favouriteBlock.module.scss";
export default function FavouriteItemMobile({ documentType, uid }: any) {
  const item = usePrismicDocumentByUID(documentType, uid);
  console.log(item[0]?.data);
  const parallaxStyles: React.CSSProperties = {
    backgroundImage: `url(${item[0]?.data.image.url})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className={classes["favItemMobile"]}>
      <div
        className={classes["favItemMobile__parallax"]}
        style={parallaxStyles}
      ></div>
      <div className={classes["favItemMobile__info"]}>
        <h2 className={classes["favItemMobile__info-title"]}>
          {item[0]?.data.art_name}
        </h2>
        <p className={classes["favItemMobile__info-description"]}>
          {item[0]?.data.description[0].text}
        </p>
      </div>
    </div>
  );
}

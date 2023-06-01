import { usePrismicDocumentByUID } from "@prismicio/react";
import classes from "styles/component/favouriteBlock.module.scss";
export default function FavouriteItemMobile({ documentType, uid }: any) {
  const item = usePrismicDocumentByUID(documentType, uid);

  return (
    <div className={classes["favItemMobile"]}>
      <div className={classes["favItemMobile__parallax"]}></div>
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

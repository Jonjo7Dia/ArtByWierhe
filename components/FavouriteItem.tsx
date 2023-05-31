import { usePrismicDocumentByUID } from "@prismicio/react";
import { useState } from "react";
import classes from "styles/component/favouriteBlock.module.scss";
import FavouriteItemImage from "./FavouriteItemImage";

export default function FavouriteItem({
  documentType,
  uid,
  isBlurred,
  handleMouseEnter,
  handleMouseLeave,
}: any) {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [xCoordinateItem, setXCoordinateItem] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const item = usePrismicDocumentByUID(documentType, uid);

  const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement>) => {
    const x = event.clientX;
    setXCoordinate(x);
    setXCoordinateItem(x);
    // Do something with the x-coordinate here
  };
  const styles: React.CSSProperties = {
    transform: `translateX(${xCoordinateItem * 0.05}px)`, // Combine transform values
  };
  return item[1].state === "loaded" ? (
    <div className={classes["favBlock__item"]}>
      <h2
        className={`${classes["favBlock__item-title"]} ${
          isBlurred ? classes["favBlock__item-title--blurred"] : ""
        }`}
        onMouseEnter={() => {
          handleMouseEnter();
          setShowContent(true);
        }}
        onMouseLeave={() => {
          handleMouseLeave();
          setShowContent(false);
          setXCoordinateItem(0);
        }}
        onMouseMove={handleMouseMove}
        style={styles}
      >
        {item[0]?.data.art_name}
      </h2>
      <FavouriteItemImage
        show={showContent}
        xCoordinate={xCoordinate}
        description={item[0]?.data.description}
        orientation={item[0]?.data.type}
        image={item[0]?.data.image}
      />
    </div>
  ) : (
    <div></div>
  );
}

import { usePrismicDocumentByUID } from "@prismicio/react";
import { useState } from "react";
import classes from "styles/component/favouriteBlock.module.scss";

export default function FavouriteItem({
  documentType,
  uid,
  isBlurred,
  handleMouseEnter,
  handleMouseLeave,
}: any) {
  const [xCoordinate, setXCoordinate] = useState(0);
  const item = usePrismicDocumentByUID(documentType, uid);

  const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement>) => {
    const x = event.clientX;
    setXCoordinate(x);
    // Do something with the x-coordinate here
  };

  return item[1].state === "loaded" ? (
    <div className={classes["favBlock__item"]}>
      <h2
        className={`${classes["favBlock__item-title"]} ${
          isBlurred ? classes["favBlock__item-title--blurred"] : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {item[0]?.data.art_name}
      </h2>
      <p>X-coordinate: {xCoordinate}</p> {/* Display the x-coordinate */}
    </div>
  ) : (
    <div></div>
  );
}

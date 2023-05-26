import { Content } from "@prismicio/client";
import classes from "styles/component/favouriteBlock.module.scss";
import { SliceComponentProps } from "@prismicio/react";
import FavouriteItem from "./FavouriteItem";
import { useState } from "react";
export type FavouritesProps = SliceComponentProps<Content.FavouritesSlice>;

export default function FavouritesBlock({ slice }: any) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className={classes["favBlock"]}>
      {slice.items.map((item: any) => {
        return (
          <FavouriteItem
            key={item.artpiece.id}
            documentType={item.artpiece.type}
            uid={item.artpiece.uid}
            isBlurred={hoveredItem !== null && hoveredItem !== item.artpiece.id}
            handleMouseEnter={() => setHoveredItem(item.artpiece.id)}
            handleMouseLeave={() => setHoveredItem(null)}
          />
        );
      })}
    </section>
  );
}

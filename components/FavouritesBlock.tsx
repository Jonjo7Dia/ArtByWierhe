import { Content } from "@prismicio/client";
import classes from "styles/component/favouriteBlock.module.scss";
import { SliceComponentProps } from "@prismicio/react";
import FavouriteItem from "./FavouriteItem";
import FavouriteItemMobile from "./FavouriteItemMobile";
import { useEffect, useState } from "react";

export type FavouritesProps = SliceComponentProps<Content.FavouritesSlice>;

export default function FavouritesBlock({ slice }: any) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setWindowWidth(window.innerWidth);

    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    // Cleanup
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  if (!hasMounted) {
    return null; // Or return a loading spinner, placeholder, etc.
  }

  return (
    <section className={classes["favBlock"]}>
      {windowWidth >= 1200 &&
        slice.items.map((item: any) => {
          return (
            <FavouriteItem
              key={item.artpiece.id}
              documentType={item.artpiece.type}
              uid={item.artpiece.uid}
              isBlurred={
                hoveredItem !== null && hoveredItem !== item.artpiece.id
              }
              handleMouseEnter={() => setHoveredItem(item.artpiece.id)}
              handleMouseLeave={() => setHoveredItem(null)}
            />
          );
        })}
      {windowWidth < 1200 &&
        slice.items.map((item: any) => {
          return (
            <FavouriteItemMobile
              key={item.artpiece.id}
              documentType={item.artpiece.type}
              uid={item.artpiece.uid}
            />
          );
        })}
    </section>
  );
}

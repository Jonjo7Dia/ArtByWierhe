import React, { useEffect, useState } from "react";
import { NavigationDocument } from "@/prismicio-types";
import classes from "../styles/component/nav.module.scss";
import Link from "next/link";
import { useImageLoadingContext } from "@/contexts/LoadingContext";

interface NavigationProps {
  navBar: NavigationDocument;
}

export default function Navigation({ navBar }: NavigationProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { loadedImages, totalImages } = useImageLoadingContext();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (loadedImages === totalImages && totalImages > 0) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [loadedImages, totalImages]);

  const navLinks = navBar.data.slices.map((slice: any) => (
    <Link
      key={slice.id}
      href={slice.primary.link}
      className={classes["navBar__menu-item"]}
    >
      {slice.primary.name}
    </Link>
  ));

  const [menuClicked, setMenuClicked] = useState(false);

  const headerStyle: React.CSSProperties = {
    zIndex: isLoading ? "99" : "50",
    // Add any other desired styles here
  };

  return (
    <header>
      <nav className={classes["navBar"]} style={headerStyle}>
        <div className={classes["navBar__menu-items"]}>{navLinks}</div>
        <div
          className={`${classes["navBar__menu-items"]} ${classes["navBar__menu-items--mobile"]}`}
          onClick={() => {
            setMenuClicked(!menuClicked);
          }}
        >
          <div
            className={`${classes["navBar__burger"]} ${
              menuClicked ? classes["navBar__burger__1--changed"] : ""
            }`}
          ></div>
          <div
            className={`${classes["navBar__burger"]} ${
              menuClicked ? classes["navBar__burger__2--changed"] : ""
            }`}
          ></div>
          <div
            className={`${classes["navBar__burger"]} ${
              menuClicked ? classes["navBar__burger__3--changed"] : ""
            }`}
          ></div>
          <div
            className={`${classes["navBar__menu-items--mobile__items"]} ${
              menuClicked
                ? classes["navBar__menu-items--mobile__items--show"]
                : ""
            }`}
          >
            {navLinks}
          </div>
        </div>
      </nav>
    </header>
  );
}

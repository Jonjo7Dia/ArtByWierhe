import React, { useEffect, useState } from "react";
import { NavigationDocument } from "@/prismicio-types";
import classes from "../styles/component/nav.module.scss";
import Link from "next/link";
import { useImageLoadingContext } from "@/contexts/LoadingContext";
import { useRouter } from "next/router";

interface NavigationProps {
  navBar: NavigationDocument;
}

export default function Navigation({ navBar }: NavigationProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { loadedImages, totalImages } = useImageLoadingContext();
  const { asPath } = useRouter();
  //   const isActive = slice.primary.link === asPath;
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (loadedImages === totalImages && totalImages > 0) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [loadedImages, totalImages]);
  console.log(asPath);
  console.log(navBar.data.slices);
  const navLinks = navBar.data.slices.map((slice: any, index: number) => (
    <Link
      key={slice.primary.id}
      href={slice.primary.link}
      className={`${classes["navBar__menu-item"]} ${
        slice.primary.link !== asPath
          ? classes["navBar__menu-item--inactive"]
          : ""
      }`}
    >
      {slice.primary.name}
    </Link>
  ));

  const [menuClicked, setMenuClicked] = useState(false);

  const headerStyle: React.CSSProperties = {
    zIndex: isLoading ? "50" : "51",
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

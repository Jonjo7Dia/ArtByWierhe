import { NavigationDocument } from "@/prismicio-types";
import classes from "../styles/component/nav.module.scss";
import Link from "next/link";
interface NavigationProps {
  navBar: NavigationDocument;
}

export default function Navigation({ navBar }: NavigationProps) {
  const navLinks = navBar.data.slices.map((slice: any) => (
    <Link
      key={slice.id}
      href={slice.primary.link}
      className={classes["navBar__item"]}
    >
      {slice.primary.name}
    </Link>
  ));

  return (
    <header>
      <nav className={classes["navBar"]}>{navLinks}</nav>
    </header>
  );
}

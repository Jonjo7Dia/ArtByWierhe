import classes from "styles/component/footer.module.scss";
import Image from "next/image";
import Logo from "assets/logo.svg";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes["footer-block"]}>
      <div className={classes["footer-block__logo"]}>
        <Image
          src={Logo}
          alt={"logo"}
          width={459}
          height={228}
          className={classes["footer-block__image"]}
        />
      </div>
    </footer>
  );
}

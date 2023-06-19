import classes from "styles/component/contactBlock.module.scss";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type SocialLinkProps = {
  link: string;
  image: StaticImageData;
  linkString: string;
  isEmail: boolean;
};

function SocialLink({ link, image, linkString, isEmail }: SocialLinkProps) {
  return (
    <div className={classes["contact-block__contact-social"]}>
      {link && (
        <Link
          className={classes["contact-block__contact-icon"]}
          href={`${isEmail ? "mailto: " + link : link}`}
          target={!isEmail ? "_blank" : ""}
        >
          <Image
            src={image}
            alt={link}
            width={100}
            height={100}
            className={classes["contact-block__contact-logo"]}
          />
        </Link>
      )}
      {link && (
        <Link
          className={classes["contact-block__contact-link"]}
          href={`${isEmail ? "mailto: " + link : link}`}
          target="_blank"
        >
          {linkString}
        </Link>
      )}
    </div>
  );
}

export default SocialLink;

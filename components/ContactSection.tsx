import classes from "styles/component/contactBlock.module.scss";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import insta from "assets/icon-instagram.png";
import email from "assets/icon-email.png";
import SocialLink from "components/SocialLink";
import { PrismicRichText } from "@prismicio/react";

export type ContactBlockProps = SliceComponentProps<Content.ContactBlockSlice>;

export default function ContactSection({
  slice,
  index,
  slices,
}: ContactBlockProps): JSX.Element {
  const instaStripped = slice.primary.instagram_link?.replace(
    "https://www.instagram.com/",
    "@"
  );
  return (
    <>
      <section
        className={`${classes["contact-block"]} ${classes["contact-block__hero"]}`}
      >
        {slice.primary.picture.url && slice.primary.picture.alt && (
          <Image
            src={slice.primary.picture.url}
            alt={slice.primary.picture.alt}
            width={slice.primary.picture.dimensions?.width}
            height={slice.primary.picture.dimensions?.height}
            className={classes["contact-block__hero-image"]}
            priority={true}
          />
        )}
      </section>
      <section
        className={`${classes["contact-block"]} ${classes["contact-block__contact"]}`}
      >
        <h1 className={classes["contact-block__contact-name"]}>
          {slice.primary.name}
        </h1>
        <div className={classes["contact-block__contact-socials"]}>
          {slice.primary.instagram_link && instaStripped && (
            <SocialLink
              link={slice.primary.instagram_link}
              image={insta}
              linkString={instaStripped}
              isEmail={false}
            />
          )}
          {slice.primary.email_link && (
            <SocialLink
              link={slice.primary.email_link}
              image={email}
              linkString={slice.primary.email_link}
              isEmail={true}
            />
          )}
        </div>
      </section>
      <section
        className={`${classes["contact-block"]} ${classes["contact-block__about"]}`}
      >
        {slice.primary.description && (
          <div className={classes["contact-block__about-description"]}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}
      </section>
    </>
  );
}

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContactSection from "components/ContactSection";
/**
 * Props for `ContactBlock`.
 */
export type ContactBlockProps = SliceComponentProps<Content.ContactBlockSlice>;

/**
 * Component for "ContactBlock" Slices.
 */
const ContactBlock = ({ slice }: ContactBlockProps): JSX.Element => {
  console.log(slice);
  return (
    <ContactSection slice={slice} index={0} slices={[]} context={undefined} />
  );
};

export default ContactBlock;

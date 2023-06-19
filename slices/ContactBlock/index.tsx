import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactBlock`.
 */
export type ContactBlockProps = SliceComponentProps<Content.ContactBlockSlice>;

/**
 * Component for "ContactBlock" Slices.
 */
const ContactBlock = ({ slice }: ContactBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContactBlock;

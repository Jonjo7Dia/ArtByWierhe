import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ContactBlockProps = SliceComponentProps<Content.ContactBlockSlice>;

export default function ContactSection({
  slice,
  index,
  slices,
}: ContactBlockProps): JSX.Element {
  return (
    <>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
}

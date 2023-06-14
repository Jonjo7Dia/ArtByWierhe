import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ExhibitionBlock`.
 */
export type ExhibitionBlockProps =
  SliceComponentProps<Content.ExhibitionBlockSlice>;

/**
 * Component for "ExhibitionBlock" Slices.
 */
const ExhibitionBlock = ({ slice }: ExhibitionBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for exhibition_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ExhibitionBlock;

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImagesHero`.
 */
export type ImagesHeroProps = SliceComponentProps<Content.ImagesHeroSlice>;

/**
 * Component for "ImagesHero" Slices.
 */
const ImagesHero = ({ slice }: ImagesHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for images_hero (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImagesHero;

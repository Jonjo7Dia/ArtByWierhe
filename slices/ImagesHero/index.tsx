import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import HeroBlock from "@/components/MainHeroBlock";
/**
 * Props for `ImagesHero`.
 */
export type ImagesHeroProps = SliceComponentProps<Content.ImagesHeroSlice>;

/**
 * Component for "ImagesHero" Slices.
 */
const ImagesHero = ({ slice }: ImagesHeroProps): JSX.Element => {
  //   <section
  //   data-slice-type={slice.slice_type}
  //   data-slice-variation={slice.variation}
  // >
  //   Placeholder component for images_hero (variation: {slice.variation})
  //   Slices
  // </section>
  return <HeroBlock slice={slice} />;
};

export default ImagesHero;

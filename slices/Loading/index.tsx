import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Loading`.
 */
export type LoadingProps = SliceComponentProps<Content.LoadingSlice>;

/**
 * Component for "Loading" Slices.
 */
const Loading = ({ slice }: LoadingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for loading (variation: {slice.variation}) Slices
    </section>
  );
};

export default Loading;

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import LoadingFrame from "components/LoadingFrame";
/**
 * Props for `Loading`.
 */
export type LoadingProps = SliceComponentProps<Content.LoadingSlice>;

/**
 * Component for "Loading" Slices.
 */
const Loading = ({ slice }: LoadingProps): JSX.Element => {
  return <LoadingFrame isLoading={true} data={slice} />;
};

export default Loading;

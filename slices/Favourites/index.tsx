import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FavouritesBlock from "@/components/FavouritesBlock";
/**
 * Props for `Favourites`.
 */
export type FavouritesProps = SliceComponentProps<Content.FavouritesSlice>;

/**
 * Component for "Favourites" Slices.
 */
const Favourites = ({ slice }: FavouritesProps): JSX.Element => {
  return <FavouritesBlock slice={slice} />;
};

export default Favourites;

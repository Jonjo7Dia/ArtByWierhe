// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/types";
import type * as prismicClient from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for ArtPiece documents */
interface ArtpieceDocumentData {
  /**
   * Art Name field in *ArtPiece*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artpiece.art_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  art_name: prismic.KeyTextField;
  /**
   * Description field in *ArtPiece*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artpiece.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Type field in *ArtPiece*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: artpiece.type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  type: prismic.SelectField<"Landscape" | "Portrait">;
  /**
   * Image field in *ArtPiece*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artpiece.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * ArtPiece document from Prismic
 *
 * - **API ID**: `artpiece`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArtpieceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArtpieceDocumentData>,
    "artpiece",
    Lang
  >;
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Slice for *Navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = NavigationItemSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | LoadingSlice
  | ImagesHeroSlice
  | FavouritesSlice
  | ExhibitionBlockSlice
  | ContactBlockSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes =
  | ArtpieceDocument
  | NavigationDocument
  | PageDocument;
/**
 * Primary content in ContactBlock → Primary
 *
 */
interface ContactBlockSliceDefaultPrimary {
  /**
   * Name field in *ContactBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_block.primary.name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismic.KeyTextField;
  /**
   * Picture field in *ContactBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_block.primary.picture
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  picture: prismic.ImageField<never>;
  /**
   * Description field in *ContactBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_block.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Instagram Link field in *ContactBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_block.primary.instagram_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  instagram_link: prismic.KeyTextField;
  /**
   * email_link field in *ContactBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_block.primary.email_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  email_link: prismic.KeyTextField;
}
/**
 * Default variation for ContactBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactBlockSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *ContactBlock*
 *
 */
type ContactBlockSliceVariation = ContactBlockSliceDefault;
/**
 * ContactBlock Shared Slice
 *
 * - **API ID**: `contact_block`
 * - **Description**: `ContactBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactBlockSlice = prismic.SharedSlice<
  "contact_block",
  ContactBlockSliceVariation
>;
/**
 * Primary content in ExhibitionBlock → Primary
 *
 */
interface ExhibitionBlockSliceDefaultPrimary {
  /**
   * Exhibition Name field in *ExhibitionBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_block.primary.exhibition_name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  exhibition_name: prismic.KeyTextField;
  /**
   * Location field in *ExhibitionBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_block.primary.location
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  location: prismic.KeyTextField;
  /**
   * Date field in *ExhibitionBlock → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_block.primary.date
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  date: prismic.DateField;
  /**
   * Start Time field in *ExhibitionBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_block.primary.start_time
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  start_time: prismic.KeyTextField;
  /**
   * End Time field in *ExhibitionBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_block.primary.end_time
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  end_time: prismic.KeyTextField;
  /**
   * Image field in *ExhibitionBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_block.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for ExhibitionBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExhibitionBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ExhibitionBlockSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *ExhibitionBlock*
 *
 */
type ExhibitionBlockSliceVariation = ExhibitionBlockSliceDefault;
/**
 * ExhibitionBlock Shared Slice
 *
 * - **API ID**: `exhibition_block`
 * - **Description**: `ExhibitionBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExhibitionBlockSlice = prismic.SharedSlice<
  "exhibition_block",
  ExhibitionBlockSliceVariation
>;
/**
 * Item in Favourites → Items
 *
 */
export interface FavouritesSliceDefaultItem {
  /**
   * ArtPiece field in *Favourites → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: favourites.items[].artpiece
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  artpiece: prismic.RelationField<"artpiece">;
}
/**
 * Default variation for Favourites Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FavouritesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<FavouritesSliceDefaultItem>
>;
/**
 * Slice variation for *Favourites*
 *
 */
type FavouritesSliceVariation = FavouritesSliceDefault;
/**
 * Favourites Shared Slice
 *
 * - **API ID**: `favourites`
 * - **Description**: `Favourites`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FavouritesSlice = prismic.SharedSlice<
  "favourites",
  FavouritesSliceVariation
>;
/**
 * Primary content in ImagesHero → Primary
 *
 */
interface ImagesHeroSliceDefaultPrimary {
  /**
   * Background Landscape field in *ImagesHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_landscape
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  background_landscape: prismic.ImageField<never>;
  /**
   * Order field in *ImagesHero → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: what order it should come in
   * - **API ID Path**: images_hero.primary.order
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  order: prismic.NumberField;
}
/**
 * Default variation for ImagesHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImagesHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImagesHeroSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in ImagesHero → Primary
 *
 */
interface ImagesHeroSliceThreePortraitBackgroundPrimary {
  /**
   * Background Image Portrait field in *ImagesHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  background_image_portrait: prismic.ImageField<never>;
  /**
   * Background Image Portrait 2 field in *ImagesHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait_2
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  background_image_portrait_2: prismic.ImageField<never>;
  /**
   * Background Image Portrait 3 field in *ImagesHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait_3
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  background_image_portrait_3: prismic.ImageField<never>;
  /**
   * Order field in *ImagesHero → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: which order should it come in
   * - **API ID Path**: images_hero.primary.order
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  order: prismic.NumberField;
}
/**
 * Three Portrait Background variation for ImagesHero Slice
 *
 * - **API ID**: `threePortraitBackground`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImagesHeroSliceThreePortraitBackground =
  prismic.SharedSliceVariation<
    "threePortraitBackground",
    Simplify<ImagesHeroSliceThreePortraitBackgroundPrimary>,
    never
  >;
/**
 * Primary content in ImagesHero → Primary
 *
 */
interface ImagesHeroSliceBackgroundImageMixPrimary {
  /**
   * Background Image Portrait field in *ImagesHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  background_image_portrait: prismic.ImageField<never>;
  /**
   * Background Landscape field in *ImagesHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_landscape
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  background_landscape: prismic.ImageField<never>;
  /**
   * Background Image Portrait 2 field in *ImagesHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait_2
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  background_image_portrait_2: prismic.ImageField<never>;
  /**
   * Order field in *ImagesHero → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: what order it should come in
   * - **API ID Path**: images_hero.primary.order
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  order: prismic.NumberField;
}
/**
 * Background Image Mix variation for ImagesHero Slice
 *
 * - **API ID**: `backgroundImageMix`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImagesHeroSliceBackgroundImageMix = prismic.SharedSliceVariation<
  "backgroundImageMix",
  Simplify<ImagesHeroSliceBackgroundImageMixPrimary>,
  never
>;
/**
 * Slice variation for *ImagesHero*
 *
 */
type ImagesHeroSliceVariation =
  | ImagesHeroSliceDefault
  | ImagesHeroSliceThreePortraitBackground
  | ImagesHeroSliceBackgroundImageMix;
/**
 * ImagesHero Shared Slice
 *
 * - **API ID**: `images_hero`
 * - **Description**: `ImagesHero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImagesHeroSlice = prismic.SharedSlice<
  "images_hero",
  ImagesHeroSliceVariation
>;
/**
 * Primary content in Loading → Primary
 *
 */
interface LoadingSliceDefaultPrimary {
  /**
   * Title field in *Loading → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: loading.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
}
/**
 * Default variation for Loading Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LoadingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LoadingSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Loading*
 *
 */
type LoadingSliceVariation = LoadingSliceDefault;
/**
 * Loading Shared Slice
 *
 * - **API ID**: `loading`
 * - **Description**: `Loading`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LoadingSlice = prismic.SharedSlice<
  "loading",
  LoadingSliceVariation
>;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavigationItemSliceDefaultPrimary {
  /**
   * name field in *NavigationItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismic.KeyTextField;
  /**
   * link field in *NavigationItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.link
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  link: prismic.KeyTextField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismicClient.ClientConfig
    ): prismicClient.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      ArtpieceDocumentData,
      ArtpieceDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      AllDocumentTypes,
      ContactBlockSliceDefaultPrimary,
      ContactBlockSliceDefault,
      ContactBlockSliceVariation,
      ContactBlockSlice,
      ExhibitionBlockSliceDefaultPrimary,
      ExhibitionBlockSliceDefault,
      ExhibitionBlockSliceVariation,
      ExhibitionBlockSlice,
      FavouritesSliceDefaultItem,
      FavouritesSliceDefault,
      FavouritesSliceVariation,
      FavouritesSlice,
      ImagesHeroSliceDefaultPrimary,
      ImagesHeroSliceDefault,
      ImagesHeroSliceThreePortraitBackgroundPrimary,
      ImagesHeroSliceThreePortraitBackground,
      ImagesHeroSliceBackgroundImageMixPrimary,
      ImagesHeroSliceBackgroundImageMix,
      ImagesHeroSliceVariation,
      ImagesHeroSlice,
      LoadingSliceDefaultPrimary,
      LoadingSliceDefault,
      LoadingSliceVariation,
      LoadingSlice,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceDefault,
      NavigationItemSliceVariation,
      NavigationItemSlice,
    };
  }
}

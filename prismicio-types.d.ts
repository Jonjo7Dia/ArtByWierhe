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
type PageDocumentDataSlicesSlice = LoadingSlice | ImagesHeroSlice;
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
export type AllDocumentTypes = ArtpieceDocument | PageDocument;
/**
 * Primary content in ImagesHero → Primary
 *
 */
interface ImagesHeroSliceDefaultPrimary {
  /**
   * Background Image Landscape field in *ImagesHero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  background_image_portrait: prismic.RelationField<"artpiece">;
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
   * Background Image Portrait 1 field in *ImagesHero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  background_image_portrait: prismic.RelationField<"artpiece">;
  /**
   * Background Image Portrait 2 field in *ImagesHero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait_2
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  background_image_portrait_2: prismic.RelationField<"artpiece">;
  /**
   * Background Image Portrait 3 field in *ImagesHero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait_3
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  background_image_portrait_3: prismic.RelationField<"artpiece">;
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
   * Background Image Portrait 1 field in *ImagesHero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  background_image_portrait: prismic.RelationField<"artpiece">;
  /**
   * Background Image Landscape field in *ImagesHero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_landscape
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  background_image_landscape: prismic.RelationField<"artpiece">;
  /**
   * Background Image Portrait 2 field in *ImagesHero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: images_hero.primary.background_image_portrait_2
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  background_image_portrait_2: prismic.RelationField<"artpiece">;
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
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      AllDocumentTypes,
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
    };
  }
}

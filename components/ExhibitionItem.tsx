import classes from "styles/component/exhibition.module.scss";
import type { SliceComponentProps } from "@prismicio/react";
import type { Content } from "@prismicio/client";
import Image from "next/image";
interface ExhibitionBlock {
  variation: string;
  version: string;
  items: any[];
  primary: {
    exhibition_name: string;
    location: string;
    date: string;
    start_time: string;
    end_time: string;
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      url: string;
      alt: string;
    };
  };
  id: string;
  slice_type: string;
  slice_label: null | string;
}

interface ExhibitionProps {
  data: ExhibitionBlock;
}

export default function ExhibitionItem({ data }: ExhibitionProps) {
  const primaryData = data.primary;
  return (
    <div className={classes["exhibition-block__item"]}>
      <div className={classes["exhibition-block__image"]}>
        {primaryData.image &&
          primaryData.image.dimensions &&
          primaryData.image.alt &&
          primaryData.image.url && (
            <Image
              src={primaryData.image.url}
              alt={primaryData.image.alt}
              width={primaryData.image.dimensions.width}
              height={primaryData.image.dimensions.height}
              className={classes["exhibition-block__poster"]}
            />
          )}
      </div>
      <div className={classes["exhibition-block__content"]}>
        <h3>{primaryData.exhibition_name}</h3>
        <h4>Location: {primaryData.location}</h4>
        <h4>Date: {primaryData.date}</h4>
        <h4>
          Time: {primaryData.start_time} - {primaryData.end_time}
        </h4>
      </div>
    </div>
  );
}

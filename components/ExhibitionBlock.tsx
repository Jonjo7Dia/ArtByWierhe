import classes from "styles/component/exhibition.module.scss";
import ExhibitionItem from "./ExhibitionItem";
import type { SliceComponentProps } from "@prismicio/react";
import type { Content } from "@prismicio/client";
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
      dimensions: { width: number; height: number };
      url: string;
      alt: string;
    };
  };
  id: string;
  slice_type: string;
  slice_label: null | string;
}

interface ExhibitionBlockProps {
  title: string;
  exhibitions: ExhibitionBlock[];
}
export default function ExhibitionBlock({
  title,
  exhibitions,
}: ExhibitionBlockProps) {
  return (
    <section className={classes["exhibition-block"]}>
      <h2 className={classes["exhibition-block__title"]}>{title}</h2>
      {exhibitions.map((exhibition: ExhibitionBlock) => {
        return <ExhibitionItem key={exhibition.id} data={exhibition} />;
      })}
    </section>
  );
}

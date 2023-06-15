import classes from "styles/component/exhibition.module.scss";

import ExhibitionBlock from "./ExhibitionBlock";

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

interface ExhibitionGroup {
  title: string;
  exhibitions: ExhibitionBlock[];
}

export default function Exhibition({ data }: any) {
  const sortedData = [...data].sort(
    (a: ExhibitionBlock, b: ExhibitionBlock) =>
      new Date(a.primary.date).getTime() - new Date(b.primary.date).getTime()
  );

  const today = new Date();
  let upcomingExhibitions: ExhibitionBlock[] = sortedData.filter(
    (exhibition) => new Date(exhibition.primary.date) >= today
  );
  const pastExhibitions: ExhibitionBlock[] = sortedData.filter(
    (exhibition) => new Date(exhibition.primary.date) < today
  );

  // Find the closest upcoming exhibition
  let closestExhibition: ExhibitionBlock[] =
    upcomingExhibitions.length > 0 ? [upcomingExhibitions[0]] : [];

  // Remove the closest exhibition from the upcoming exhibitions
  if (upcomingExhibitions.length > 0) {
    upcomingExhibitions = upcomingExhibitions.slice(1);
  }

  // Create exhibition groups
  const exhibitionGroups: ExhibitionGroup[] = [
    { title: "Next Exhibition", exhibitions: closestExhibition },
    { title: "Upcoming Exhibitions", exhibitions: upcomingExhibitions },
    { title: "Past Exhibitions", exhibitions: pastExhibitions },
  ];

  return (
    <>
      {exhibitionGroups.map((group: ExhibitionGroup) => {
        if (group.exhibitions.length > 0) {
          return (
            <ExhibitionBlock
              key={group.title}
              title={group.title}
              exhibitions={group.exhibitions}
            />
          );
        }
      })}
    </>
  );
}

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
  };
  id: string;
  slice_type: string;
  slice_label: null | string;
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
  const closestExhibition: ExhibitionBlock | undefined = upcomingExhibitions[0];

  // Remove the closest exhibition from the upcoming exhibitions
  if (upcomingExhibitions.length > 0) {
    upcomingExhibitions = upcomingExhibitions.slice(1);
  }
  console.log(sortedData);
  console.log(upcomingExhibitions);
  console.log(pastExhibitions);
  console.log(closestExhibition);
  return <div></div>;
}

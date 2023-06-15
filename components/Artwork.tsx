import classes from "styles/component/artWork.module.scss";
import ArtPiece from "./ArtPiece";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
export default function ArtWork({ data }: any) {
  return (
    <section className={classes["artWork"]}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 3 }}>
        <Masonry gutter={"1rem"}>
          {data.map((artPiece: any) => {
            return <ArtPiece data={artPiece.data} key={artPiece.id} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}

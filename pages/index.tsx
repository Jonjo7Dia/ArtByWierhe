import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page }: PageProps) {
  console.log(page);
  return <div>hello</div>;
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home");
  //    ^ Typed as PageDocument

  return {
    props: {
      page,
    },
  };
}

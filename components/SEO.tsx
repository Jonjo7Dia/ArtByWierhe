import Head from "next/head";

export default function SEO({ data }: any) {
  return (
    <Head>
      <title key="title">{data.page_title}</title>
      <meta
        key="description"
        name="description"
        content={data.page_description[0].text}
      />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={data.page_title} />
      <meta
        key="og:description"
        property="og:description"
        content={data.page_description}
      />
      <meta key="og:image" property="og:image" content={data.og_image.url} />
      <meta key="og:url" property="og:url" content={data.site_url} />
    </Head>
  );
}

import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import "../styles/main/global.scss";
import React from "react";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={"artbywierhe"}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
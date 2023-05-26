import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { createClient } from "prismicio"; // Update this with your file path

import "../styles/main/global.scss";
import React from "react";
import { ImageLoadingProvider } from "contexts/LoadingContext";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  const prismicClient = createClient(); // Add any additional parameters if needed

  return (
    <PrismicProvider
      client={prismicClient}
      internalLinkComponent={(props) => <Link {...props} />}
    >
      <PrismicPreview repositoryName={"artbywierhe"}>
        <ImageLoadingProvider>
          <Component {...pageProps} />
        </ImageLoadingProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

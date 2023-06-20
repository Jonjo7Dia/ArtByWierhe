import React, { useEffect, useState } from "react";
import { useImageLoadingContext } from "@/contexts/LoadingContext";
import { NavigationDocument } from "@/prismicio-types";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import SEO from "components/SEO";
interface LayoutProps {
  children: React.ReactNode;
  nav: NavigationDocument;
  loader: boolean;
  seo: any;
}

export default function Layout({ children, nav, loader, seo }: LayoutProps) {
  const { loadedImages, totalImages, showLoadingFrame } =
    useImageLoadingContext();

  const [isLoading, setIsLoading] = useState(showLoadingFrame);
  useEffect(() => {
    setIsLoading(showLoadingFrame);
  }, [showLoadingFrame]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (loadedImages === totalImages && totalImages > 0) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [loadedImages, totalImages]);

  const mainStyle: React.CSSProperties = {
    overflowY: isLoading && loader ? "hidden" : "visible",
    maxHeight: isLoading && loader ? "100vh" : "none",
    // Add any other desired styles here
  };

  return (
    <>
      <SEO data={seo} />
      <Navigation navBar={nav} />
      <main style={mainStyle}>
        <div className={"backgroundBlur"}></div>
        {children}
      </main>
      {!isLoading && <Footer />}
    </>
  );
}

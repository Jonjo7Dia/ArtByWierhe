import { createContext, useContext, ReactNode, useState } from "react";

type ImageLoadingContextType = {
  totalImages: number;
  loadedImages: number;
  incrementLoadedImages: () => void;
  setTotalImages: (total: number) => void;
};

const ImageLoadingContext = createContext<ImageLoadingContextType | undefined>(
  undefined
);

type ImageLoadingProviderProps = {
  children: ReactNode;
};

export function ImageLoadingProvider({ children }: ImageLoadingProviderProps) {
  const [totalImages, setTotalImages] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);

  const incrementLoadedImages = () => {
    setLoadedImages((prevCount) => prevCount + 1);
  };

  return (
    <ImageLoadingContext.Provider
      value={{
        totalImages,
        loadedImages,
        incrementLoadedImages,
        setTotalImages,
      }}
    >
      {children}
    </ImageLoadingContext.Provider>
  );
}

export function useImageLoadingContext() {
  const context = useContext(ImageLoadingContext);
  if (context === undefined) {
    throw new Error(
      "useImageLoadingContext must be used within a ImageLoadingProvider"
    );
  }
  return context;
}

export default ImageLoadingContext;

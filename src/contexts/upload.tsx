import React, { useState } from 'react';

interface UploadContextProps {
  images: Array<string | ArrayBuffer | null>;
  setImages: (images: Array<string | ArrayBuffer | null>) => void;
}

export const UploadContext = React.createContext<UploadContextProps>({
  images: [],
  setImages: () => {},
});

export const UploadContextProvider = (props) => {
  const [images, setImages] = useState<Array<string | ArrayBuffer | null>>([]);

  return (
    <UploadContext.Provider
      value={{
        images: images,
        setImages: setImages,
      }}
    >
      {props.children}
    </UploadContext.Provider>
  );
};

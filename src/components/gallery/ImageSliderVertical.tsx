import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { Photo } from '../../types';

interface ImageSliderProps {
  photos: Photo[];
}

const ImageSlider = ({ photos }: ImageSliderProps) => {
  return (
    <ImageList
      cols={4}
      gap={16}
      rowHeight={208}
      sx={{
        height: 208,
        MsOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {photos.map((photo) => (
        <ImageListItem key={photo.id}>
          <img src={photo.img_src} alt='Rover photo' />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageSlider;

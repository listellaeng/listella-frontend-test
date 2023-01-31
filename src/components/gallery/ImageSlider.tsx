import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Photo } from '../../types';
import { Box } from '@mui/material';
import { height } from '@mui/system';

interface ImageSliderProps {
  photos: Photo[];
}

const ImageSlider = ({ photos }: ImageSliderProps) => {
  return (
    <Carousel
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      centerMode
      centerSlidePercentage={25}
      dynamicHeight={false}
      swipeable
      emulateTouch
      selectedItem={4}
    >
      {photos.map((photo) => (
        <Box key={photo.id} sx={{ width: '100%', height: '100%', px: 1 }}>
          <img
            src={photo.img_src}
            alt='Rover Photo'
            style={{ height: 'inherit', objectFit: 'cover' }}
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default ImageSlider;

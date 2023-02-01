import React from 'react';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import { Photo } from '../../types';
import ImageSlider from './ImageSlider';
import Link from '../common/Link';
import Text3 from '../common/Text3';
import Text1 from '../common/Text1';
import Text2 from '../common/Text2';

import AstronautImage from '../../assets/astronaut.jpg';
import PlanetIcon from '../../assets/planet.svg';
import RightIcon from '../../assets/right.svg';

export interface GalleryProps {
  photos: Photo[];
}

const breadcrumbs = [
  <Link href='/' key='1'>
    <Text2
      sx={{
        fontWeight: 500,
      }}
    >
      Galleries
    </Text2>
  </Link>,
  <Text2
    key='2'
    sx={{
      color: '#000000',
      fontWeight: 500,
    }}
  >
    Space Database
  </Text2>,
];

const Gallery = ({ photos }: GalleryProps) => {
  return (
    <Grid container spacing={3} sx={{ px: 8, py: 3 }}>
      <Grid
        item
        sm={12}
        md={4}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Breadcrumbs separator='·' sx={{ mb: 2 }}>
          {breadcrumbs}
        </Breadcrumbs>
        <Box sx={{ width: '100%', height: '100%' }}>
          <Box
            component='img'
            src={AstronautImage.src}
            alt='Astronomy Picture of the Day'
            sx={{ width: '100%', height: '100%', borderRadius: '30px' }}
          />
        </Box>
      </Grid>
      <Grid item sm={12} md={8}>
        <Box
          sx={{
            py: 3,
            px: 4,
            borderRadius: 2.5,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              mb: 1.5,
            }}
          >
            <Box
              component='img'
              src={PlanetIcon.src}
              alt='Moon'
              sx={{ width: 108, height: 108 }}
            ></Box>
            <Box sx={{ ml: 2 }}>
              <Text1
                variant='h6'
                sx={{
                  fontWeight: 700,
                }}
              >
                NASA’s Space Database
              </Text1>
              <Link href='/'>
                <Text3
                  sx={{
                    fontWeight: 500,
                    color: '#4D54FF',
                  }}
                >
                  Our Public Gallery for Outer Space
                </Text3>
              </Link>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Text3>
              We want to see space through your eyes! Take photos and upload
              them to our public library. Our goal is to provide the largest
              database of quality images. Space is amazing! Let’s capture it
              together!
            </Text3>
            <Box sx={{ mt: 6 }}>
              <Text3
                variant='h6'
                sx={{
                  fontWeight: 700,
                }}
              >
                Featured Images
              </Text3>
              <Link href='/'>
                <Text3
                  sx={{
                    fontWeight: 500,
                    color: '#4D54FF',
                  }}
                >
                  Scroll to see more
                </Text3>
              </Link>
              <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
                <ImageSlider photos={photos} />
                <Link href='/'>
                  <Text3
                    textAlign='end'
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',

                      pr: 9,
                      mt: 4,
                      fontWeight: 700,
                    }}
                  >
                    View Gallery{' '}
                    <Box
                      component='img'
                      src={RightIcon.src}
                      alt='Right'
                      sx={{ width: 8, height: 16, ml: 2, my: 'auto' }}
                    />
                  </Text3>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Gallery;

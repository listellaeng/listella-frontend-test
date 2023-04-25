import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from '../../common/Link';
import EarthIcon from '../../../assets/earth-white.svg';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        px: 5,
        py: 2.5,
        backgroundColor: '#4E1C90',
        color: '#ffffff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 10,
          '& a': {
            display: 'flex',
            alignItems: 'center',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '16px',
            lineHeight: '22px',
          },
        }}
      >
        <Link href='/'>Contact Us</Link>
        <Link href='/'>About Us</Link>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Sitemap</Link>
        <Link href='/'>Terms & Conditions</Link>
      </Box>

      <Link href='/'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component='img'
            src={EarthIcon.src}
            alt='Earth'
            sx={{
              width: 32,
              height: 32,
              mr: 1,
            }}
          />

          <Typography
            variant='h6'
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 300,
              fontSize: '24px',
              lineHeight: '33px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NASA
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

import { Box } from '@mui/material';
import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

export interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box component='main' sx={{ mt: 2.5 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}

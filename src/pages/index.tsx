import { GetServerSideProps } from 'next';
import Box from '@mui/material/Box';

import Layout from '../components/layout/Layout';
import Gallery from '../components/gallery/Gallery';
import ImageUpload from '../components/upload/ImageUpload';

import { Photo } from '../types';

interface HomeProps {
  photos: Photo[];
  status: number;
}

export default function Home({ photos, status }: HomeProps) {
  return (
    <Layout>
      <Box component='section'>
        <Gallery apod={photos[0]} photos={photos} />
      </Box>
      <Box component='section'>
        <ImageUpload />
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&sol=1000&api_key=smQ1aKWK94dc1BtLpvY5aXL1MXN2VXLbv6ufuq3r`
  );

  if (response.status >= 400) {
    if (response.status === 404) {
      return {
        notFound: true,
      };
    }
    if (response.status === 500) {
      throw new Error();
    }
    return {
      redirect: { destination: `/error/${response.status}`, permanent: false },
    };
  }

  const data: { photos?: Photo[] } = await response.json();

  return {
    props: { photos: data.photos, status: null },
  };
};

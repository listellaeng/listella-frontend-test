import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import cx from 'classnames';
import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next';
import { getMediaAlbumContents } from '@/services/nasa-api';
import {
  TNASAApiErrorResponse,
  TNASAApiResponse,
  TAlbumNASAResponse,
} from '@/services/nasa-api.types';
import Thumbnail from '@/components/Thumbnail';
import UploadFile from '@/components/UploadFile';

interface HomePageProps {
  albumData: TNASAApiResponse<TAlbumNASAResponse> | TNASAApiErrorResponse;
}

const Home: NextPage<HomePageProps> = ({ albumData }) => {
  const album = 'collection' in albumData ? albumData : null;
  return (
    <Layout title="NASA home page">
      <div className={styles.HomePageLayout}>
        <div className="p-4 pl-16">
          <div className="flex flex-wrap items-center justify-start py-4">
            <p className="text-gray-500">Galleries &bull;</p>
            <p className="font-semibold">Space Database</p>
          </div>

          <Image
            src="/assets/astronaut.jpg"
            alt="astronaut"
            width={320}
            height={460}
            className="w-full rounded-xl"
            priority
          />
        </div>
        <div className="pr-16 flex flex-col items-start justify-start border border-t-0 drop-shadow-md rounded-xl p-8 my-4 mr-16">
          <div className="flex items-start justify-start pt-8 border-b-2 border-blue-300 w-full pb-4 mb-2">
            <Image
              src="/assets/planet.svg"
              width={65}
              height={65}
              alt="planet"
              className="mr-4"
            />
            <span>
              <h2 className="font-bold">NASA&apos;s Space Database</h2>
              <p className="text-blue-600">
                Our Public Gallery for Outer Space
              </p>
            </span>
          </div>

          <p className="text-left justify-start py-8">
            We want to see space through your eyes! Take photos and upload them
            to our public library. Our goal is to provide the largest database
            of quality images. Space is amazing. Let&apos;s capture it together!
          </p>
          <h3 className="font-semibold text-3xl pt-4">Featured Images</h3>
          <p className="text-blue-600">Scroll to see more</p>
          <div className="w-full flex overflow-x-scroll max-h-32 mb-4">
            {album?.collection?.items?.map((album) => (
              <Thumbnail {...album} key={album.data[0].nasa_id} />
            )) || <p>There is currently no recent featured photos.</p>}
          </div>
          <Link href="/gallery" className="font-bold self-end">
            View Gallery &gt;
          </Link>
        </div>
        <div className={cx('h-full', styles.HomePageLayout__bottomSection)}>
          <UploadFile />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const albumData = await getMediaAlbumContents('201907_Apollo_50th_in_DC');

  return {
    props: {
      albumData,
    },
  };
};

export default Home;

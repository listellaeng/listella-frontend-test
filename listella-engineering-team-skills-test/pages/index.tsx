import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <Layout title="NASA home page">
      <div className={styles.HomePageLayout}>
        <div className="h-1/2 p-4">
          <div className="flex items-center justify-start py-4">
            <p className="text-gray-500">Galleries &bull;</p>
            <p className="font-semibold">Space Database</p>
          </div>

          <Image
            src="/assets/astronaut.jpg"
            alt="astronaut"
            width={400}
            height={600}
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="h-1/2 bg-slate-50"></div>
        <div className="h-1/2 bg-orange-50"></div>
      </div>
    </Layout>
  );
};

export default Home;

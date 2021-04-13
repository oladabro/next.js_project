import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Harcerze | Home</title>
        <meta name='keywords' content='harcerze, harcerstwo' />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>Witaj na naszej stronie</h1>
        <Carousel />

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link href='/team'>
          <a className={styles.btn}>Poznaj naszą drużynę:)</a>
        </Link>
      </div>
    </>
  );
}

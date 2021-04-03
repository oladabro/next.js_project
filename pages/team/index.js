import Head from 'next/head';
import styles from '../../styles/Team.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: { scouts: data },
  };
};

const Team = ({ scouts }) => {
  return (
    <>
      <Head>
        <title>Harcerze | Drużyna</title>
        <meta name='keywords' content='harcerze, harcerstwo' />
      </Head>
      <h1>Poznaj naszą drużynę</h1>
      {scouts.map((scout) => (
        <Link href={`/team/${scout.id}`} key={scout.id}>
          <a className={styles.single}>{scout.name}</a>
        </Link>
      ))}
    </>
  );
};

export default Team;

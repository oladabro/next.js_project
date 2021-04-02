import Head from 'next/head';
import styles from '../../styles/Team.module.css';

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
        <div key={scout.id}>
          <a className={styles.single}>{scout.name}</a>
        </div>
      ))}
    </>
  );
};

export default Team;

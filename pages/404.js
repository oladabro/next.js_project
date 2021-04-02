import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>Uuuups...</h1>
      <h2>Strona, której szukasz nie istnieje.</h2>
      <p>
        Wróć do{' '}
        <Link href='/'>
          <a>strony głównej</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

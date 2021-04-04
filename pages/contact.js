import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Harcerze | Kontact</title>
        <meta name='keywords' content='harcerze, harcerstwo' />
      </Head>
      <div>
        <h3>Chcesz do nasz dołączyć?</h3>
        <p>Napisz do nas na adres: harcerze12@harcerze.org</p>
        <p>Zadzwoń: 123-234-567</p>
        <p>
          Lub przyjdź na jedno z naszych spotkań, które odbywają się w każdą
          sobotę o godz. 9.00 w ZSP12 w Żorach
        </p>
      </div>
    </>
  );
};

export default Contact;

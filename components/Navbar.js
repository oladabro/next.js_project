import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src='/next-js-seeklogo.com.svg' width='100' />
      </div>
      <Link href='/'>
        <a>Strona Główna</a>
      </Link>
      <Link href='/about'>
        <a>O Nas</a>
      </Link>
      <Link href='/mission'>
        <a>Nasza misja</a>
      </Link>
      <Link href='/team'>
        <a>Drużyna</a>
      </Link>
      <Link href='/contact'>
        <a>Kontakt</a>
      </Link>
    </nav>
  );
};

export default Navbar;

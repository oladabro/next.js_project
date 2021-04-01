import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h3>Szkolne koło harcerskie</h3>
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

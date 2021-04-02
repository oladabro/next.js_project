import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        {/* <img src='/next-js-seeklogo.com.svg' width='70' /> */}
        <Image src='/next-js-seeklogo.com.svg' width='70' height='42' />
        <h3>Szkolne Koło Harcerskie</h3>
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

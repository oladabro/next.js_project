import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const handleClick = (e) => {
    const links = document.querySelectorAll('a');

    links.forEach((el) => {
      el.classList.remove('linkSelected');
    });

    e.target.classList.toggle('linkSelected');
  };

  return (
    <nav>
      <div className='logo'>
        {/* <img src='/next-js-seeklogo.com.svg' width='70' /> */}
        <Image src='/next-js-seeklogo.com.svg' width='70' height='42' />
        <h3>Szkolne Koło Harcerskie</h3>
      </div>

      <Link href='/'>
        <a onClick={(e) => handleClick(e)} className='link'>
          Strona Główna
        </a>
      </Link>
      <Link href='/about'>
        <a onClick={(e) => handleClick(e)} className='link'>
          O Nas
        </a>
      </Link>
      <Link href='/mission'>
        <a onClick={(e) => handleClick(e)} className='link'>
          Nasza misja
        </a>
      </Link>
      <Link href='/team'>
        <a onClick={(e) => handleClick(e)} className='link'>
          Drużyna
        </a>
      </Link>
      <Link href='/contact'>
        <a onClick={(e) => handleClick(e)} className='link'>
          Kontakt
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;

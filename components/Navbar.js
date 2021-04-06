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
      <div className='logo-container'>
        {/* <img src='/next-js-seeklogo.com.svg' width='70' /> */}
        <img className='logo-sign1' src='/krzyz_harc.png' width='70' />

        <a href='/'>
          <img
            src='/next-js-seeklogo.com.svg'
            width='70'
            height='42'
            className='logo-sign2'
          />
        </a>

        <Link href='/'>
          <a>
            <h3 className='website-name'>Szkolne Koło Harcerskie</h3>
          </a>
        </Link>
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

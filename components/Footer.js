const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <p>Copyright {date.getFullYear()} Szkolne Koło Harcerskie</p>
    </footer>
  );
};

export default Footer;

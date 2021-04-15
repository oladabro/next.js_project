import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/scouts1.jpg',
  },
  {
    original: '/scouts2.jpg',
  },
  {
    original: '/scouts3.jpg',
  },
  {
    original: '/scouts4.jpg',
  },
];

const ReactCarousel = () => {
  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={true}
    />
  );
};

export default ReactCarousel;

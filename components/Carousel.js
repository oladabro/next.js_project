import { CarouselData } from './CarouselData';
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = CarouselData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  console.log(currentSlide);

  // check if array with images contains data images, if no then no carousel is shown

  if (!Array.isArray(CarouselData) || CarouselData.length <= 0) {
    return null;
  }

  return (
    <section className='carousel'>
      <FaArrowAltCircleLeft
        className='carousel__btn carousel__btn--prev'
        onClick={prevSlide}
      />
      <ul className='carousel__container'>
        {CarouselData.map((slide, index) => {
          return (
            <li
              className={
                index === currentSlide
                  ? 'carousel__slide active__slide'
                  : 'carousel__slide'
              }
              key={index}
            >
              {/* {index === currentSlide && (
                <img src={slide.imageSrc} alt={slide.imageName} />
              )} */}
              <img src={slide.imageSrc} alt={slide.imageName} />
            </li>
          );
        })}
      </ul>

      <FaArrowAltCircleRight
        className='carousel__btn carousel__btn--next'
        onClick={nextSlide}
      />
      {/* 
      <div className='carousel__nav'>
        <button className='carousel__indicator current-slide'></button>
        <button className='carousel__indicator'></button>
        <button className='carousel__indicator'></button>
        <button className='carousel__indicator'></button>
      </div> */}
    </section>
  );
};

export default Carousel;

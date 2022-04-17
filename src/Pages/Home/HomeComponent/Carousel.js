import React from 'react';
import carouselone from '../../../Photos/Carosal/carosul1.jpg';
import carouseltwo from '../../../Photos/Carosal/carosul2.jpg';
import carouselthree from '../../../Photos/Carosal/carosul3.jpg';

const Carousel = () => {
    return (
        <div
  id="carouselDarkVariant"
  className="carousel slide carousel-fade carousel-dark relative md:h-[520px]"
  data-bs-ride="carousel"
>

  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <div className="carousel-inner relative w-full overflow-hidden">
   
    <div className="carousel-item active relative float-left w-full">
      <img
        src={carouselone}
        className="block w-full rounded md:h-[520px]"
        alt="Motorbike Smoke"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-2xl text-white">Improve Your Smile</h5>
        <p className='text-white text-xl'>Achiteve Your Desired Perfect SmileA full range of cosmetic dentistry treatment</p>
      </div>
    </div>

   
    <div className="carousel-item relative float-left w-full">
      <img
        src={carouseltwo}
        className="block w-full rounded md:h-[520px]"
        alt="Mountaintop"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-2xl text-white">A Perfect Smile Guarantade</h5>
        <p className='text-white text-xl'>That is Very important to meet Dentist al list on time in a month</p>
      </div>
    </div>

    
    <div className="carousel-item relative float-left w-full">
      <img
        src={carouselthree}
        className="block w-full rounded md:h-[510px]"
        alt="Woman Reading a Book"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-2xl text-white">Best teeth have smile</h5>
        <p className='text-white text-xl'>You have to stay very carefull to your teeth</p>
      </div>
    </div>
  </div>
 


  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Carousel;
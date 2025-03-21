import { useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import user from "../assets/Home/user.png"
import leftArrow from "../assets/Home/left.png"
import rightArrow from "../assets/Home/right.png"

const Testimonials = () => {
  const swiperRefTestimonials = useRef(null);

  const handlePrevTestimonials = () => {
    if (swiperRefTestimonials.current) {
      swiperRefTestimonials.current.slidePrev();
    }
  };

  const handleNextTestimonials = () => {
    if (swiperRefTestimonials.current) {
      swiperRefTestimonials.current.slideNext();
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "AbdulManan",
      image: "/testimonial1.png",
      desc: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Ahmad",
      image: "/testimonial2.png",
      desc: "⭐⭐⭐",
    },
    {
      id: 3,
      name: "Salman",
      image: "/testimonial3.png",
      desc: "⭐⭐⭐⭐",
    },
    {
      id: 4,
      name: "Ibrahim",
      image: "/testimonial4.png",
      desc: "⭐⭐⭐",
    },
    {
      id: 5,
      name: "Saad",
      image: "/testimonial5.png",
      desc: "⭐⭐⭐⭐⭐",
    },
    {
      id: 6,
      name: "Arham",
      image: "/testimonial6.png",
      desc: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-16 px-6 text-center">
      <h1 className="text-3xl font-bold text-center mb-6">Testimonials</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        onSwiper={(swiper) => (swiperRefTestimonials.current = swiper)}
        className="pb-8"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className=" shadow-md rounded-lg p-4 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-white mb-4">
                <img
                  src={user}
                  alt={testimonial.name}
                  className="w-4 h-4 rounded-full"
                />
              </div>
              
              <h2 className="text-lg font-semibold mt-2">{testimonial.name}</h2>
              <p className=" text-sm mt-2">"    {testimonial.desc}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons for Testimonials */}
      <div className="w-full flex justify-center md:justify-end p-4">
        <button
          onClick={handlePrevTestimonials}
          className="p-2 border hover:cursor-pointer rounded-full text-blue-600"
        >
          <img src={leftArrow} alt="Left" className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextTestimonials}
          className="p-2 border hover:cursor-pointer rounded-full text-blue-600 ml-2 md:ml-4"
        >
          <img src={rightArrow} alt="Right" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

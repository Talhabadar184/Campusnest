import { useState } from "react";
import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import Tenat from "../assets/Home/Tenat.png";
import Landlord from "../assets/Home/Landlord.png";
import leftArrow from "../assets/Home/left.png";
import rightArrow from "../assets/Home/right.png";
import user from "../assets/Home/user.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import Testimonials from "../components/Testimonials";
import search from "../assets/Home/search.png"

function Home() {
  const [institution, setInstitution] = useState("");
  const [radius, setRadius] = useState("");
  const [location, setLocation] = useState("");

  const hostels = [
    {
      id: 1,
      name: "hostel 1",
      image: "/hostel1.png",
      desc: "Luxury hostel near LUMS.",
    },
    {
      id: 2,
      name: "hostel 2",
      image: "/hostel2.png",
      desc: "Affordable hostel in Model Town.",
    },
    {
      id: 3,
      name: "hostel 3",
      image: "/hostel3.png",
      desc: "Premium stay near DHA.",
    },
    {
      id: 4,
      name: " hostel 4",
      image: "/hostel1.png",
      desc: "Luxury hostel near LUMS.",
    },
    {
      id: 5,
      name: " hostel 5",
      image: "/hostel2.png",
      desc: "Affordable hostel in Model Town.",
    },
    {
      id: 6,
      name: " hostel 6",
      image: "/hostel3.png",
      desc: "Premium stay near DHA.",
    },
  ];
 
  const swiperRefTestimonials = useRef(null);

  const handlePrevTestimonials = () => {
    if (swiperRefTestimonials.current) {
      swiperRefTestimonials.current.slidePrev();
    }
  };

  const handleNextTestimonials = () => {
    if (swiperRefTestimonials.current) {
      swiperRefTestimonials.curr;
      ent.slideNext();
    }
  };

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <>
      
      <div className="bg-gray-100">
      <HomeNavbar />
        {/* Heading Section */}
        <div className="flex flex-col  items-center justify-center min-h-[90vh] lg:max-w-[95vw] rounded-2xl mx-auto bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6 mt-6">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
            Find Your Ideal Hostel in Lahore
          </h1>
          <p className="text-sm md:text-base text-center mb-6 px-4 md:px-20">
            Explore, Compare, and Secure the Best Accommodation Near Your
            University with 360° Tours and Easy Booking
          </p> 

          {/* Search Filters */}
          <div className="flex flex-wrap justify-center gap-4 bg-white p-4 rounded-lg shadow-lg">
            <select
              className="p-2 border rounded-lg text-gray-700 w-[220px]"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            >
              <option value="">-- Select Institution --</option>
              <option value="LUMS">LUMS</option>
              <option value="UCP">UCP</option>
              <option value="FAST">FAST</option>
            </select>

            <select
              className="p-2 border rounded-lg text-gray-700 w-[180px]"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
            >
              <option value="">-- Select Radius --</option>
              <option value="1km">1 km</option>
              <option value="3km">3 km</option>
              <option value="5km">5 km</option>
            </select>

            <select
              className="p-2 border rounded-lg text-gray-700 w-[200px]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">-- Select Location --</option>
              <option value="Johar Town">Johar Town</option>
              <option value="Model Town">Model Town</option>
              <option value="DHA">DHA</option>
            </select>

            <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-white">
              <img src={search} alt="" />
            </button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto my-16 px-6">
          <h2 className="text-2xl font-semibold text-blue-800 text-center  mb-6">
            How It Works?
          </h2>
          <div className="border-t border-black w-20 mx-auto mb-16"></div>

          <div className="flex flex-col md:flex-row items-center justify-center text-center gap-10">
            {/* For Tenants */}
            <div className="w-full md:w-1/2">
              <h3 className="text-blue-600 font-semibold mb-4">For Tenants</h3>
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border bg-white rounded-full">
                  <img src={Tenat} alt="Tenant Icon" className="w-12 h-12" />
                </div>
              </div>
              <p className="text-gray-700 text-sm">Compare → Book</p>
              <p className="text-gray-600 text-sm mt-2 px-4 md:px-10">
                Quickly find the ideal hostel near your university by searching
                with filters like location, price, and amenities. Compare
                options through virtual tours and reviews, and contact the
                hostel owner directly via cell phone to finalize your booking.
              </p>
            </div>

            {/* Divider for larger screens */}
            <div className="hidden md:block w-[1px] bg-gray-300 h-40"></div>

            {/* For Landlords */}
            <div className="w-full md:w-1/2">
              <h3 className="text-blue-600 font-semibold mb-4">
                For Landlords
              </h3>
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border bg-white rounded-full">
                  <img
                    src={Landlord}
                    alt="Landlord Icon"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <p className="text-gray-700 text-sm">List → Connect → Manage</p>
              <p className="text-gray-600 text-sm mt-2 px-4 md:px-10">
                List your hostel with detailed descriptions, photos, and 360°
                tours to attract students. Connect with potential tenants
                directly through their cell phones to manage inquiries and
                finalize bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Newly Listed Hostels Section */}
        <div className="max-w-6xl mx-auto my-16 px-6 text-center">
          <h1 className="text-3xl text-blue-800 font-bold text-center mb-6">
            Newly Listed Hostels
          </h1>
          <div className="border-t border-black w-20 mx-auto mb-16"></div>
          <div className="relative">
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
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    className="custom-swiper relative pb-16 mt-10"
  >
    {hostels.map((hostel) => (
      <SwiperSlide key={hostel.id}>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src={hostel.image}
            alt={hostel.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold mt-2">{hostel.name}</h2>
          <p className="text-gray-600">{hostel.desc}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  

</div>

          {/* Custom Navigation Buttons */}
          <div className="w-full flex justify-center  md:justify-end p-4">
            <button
              onClick={handlePrev}
              className="p-2  hover:cursor-pointer rounded-full text-blue-600"
            >
              <img src={leftArrow} alt="Left" className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2  hover:cursor-pointer rounded-full text-blue-600 ml-2 "
            >
              <img src={rightArrow} alt="Right" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Testimonials/>

        <Footer />
      </div>
    </>
  );
}

export default Home;

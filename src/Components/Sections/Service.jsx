import React from "react";
import { motion } from "framer-motion";
import { FaFingerprint } from "react-icons/fa";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import { BiSolidRightArrowAlt } from "react-icons/bi";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ✅ add navigation styles
import "./Styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";

export default function Service() {
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center py-12">
      {/* ✅ Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center mb-2">
          <span className="text-white font-semibold px-3 py-1 rounded-full text-sm flex gap-2">
            <FaFingerprint /> Our Service
          </span>
        </div>
        <motion.h2
          className="text-white text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SMART SECURITY SERVICE FOR YOUR
          <br />
          LIVE SAFETY
        </motion.h2>
      </motion.div>

      {/* ✅ Swiper Carousel with Navigation */}
      <div className="relative w-full max-w-5xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          coverflowEffect={{
            rotate: 20,
            stretch:1,
            depth: 250,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/assets/Images/girls.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/Images/12.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/Images/girls.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/Images/13.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/Images/22.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/Images/girls.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/Images/girls.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/Images/22.jpg" />
          </SwiperSlide>
        </Swiper>

        {/* ✅ Custom Navigation Buttons */}
        <button className="swiper-button-next-custom absolute left-0 top-1/2 -translate-y-1/2 bg-gray-400 text-black w-10 h-10 rounded shadow flex items-center justify-center z-20 hover:bg-gray-500 duration-300">
         <BiSolidLeftArrowAlt />
        </button>
        <button className="swiper-button-prev-custom absolute right-0 top-1/2 -translate-y-1/2 bg-gray-400 text-black w-10 h-10 rounded shadow flex items-center justify-center z-20  hover:bg-gray-500 duration-300 ">
          <BiSolidRightArrowAlt />
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { FaFingerprint } from "react-icons/fa";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Styles.css";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";

export default function Service() {
  return (
    <div className="bg-[#15487d] min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-12">
      {/* ✅ Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center mb-2">
          <span className="text-white font-semibold px-3 py-1 rounded-full text-xs sm:text-sm flex gap-2">
            <FaFingerprint /> Our Service
          </span>
        </div>
        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SMART SECURITY SERVICE FOR YOUR
          <br className="hidden sm:block" />
          LIVE SAFETY
        </motion.h2>
      </motion.div>

      {/* ✅ Swiper Carousel */}
      <div className="relative w-full max-w-6xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          coverflowEffect={{
            rotate: 20,
            stretch: 1,
            depth: 250,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 }, // ✅ Mobile
            640: { slidesPerView: 2, spaceBetween: 30 }, // ✅ Tablet
            1024: { slidesPerView: 3, spaceBetween: 40 }, // ✅ Desktop
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {[
            "/assets/Images/girls.jpg",
            "/assets/Images/12.jpg",
            "/assets/Images/girls.jpg",
            "/assets/Images/13.png",
            "/assets/Images/22.jpg",
            "/assets/Images/girls.jpg",
          ].map((img, i) => (
            <SwiperSlide key={i} className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Service ${i + 1}`}
                className="w-full h-[220px] sm:h-[300px] md:h-[350px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-2 sm:-left-8 top-1/2 -translate-y-1/2 bg-white/80 text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow flex items-center justify-center z-20 hover:bg-gray-200 duration-300">
          <BiSolidLeftArrowAlt size={20} />
        </button>
        <button className="swiper-button-next-custom absolute right-2 sm:-right-8 top-1/2 -translate-y-1/2 bg-white/80 text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow flex items-center justify-center z-20 hover:bg-gray-200 duration-300">
          <BiSolidRightArrowAlt size={20} />
        </button>
      </div>
    </div>
  );
}

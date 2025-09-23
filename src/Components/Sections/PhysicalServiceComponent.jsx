
import React from "react";
import { motion } from "framer-motion";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Styles.css";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import ourservice from "../assets/ourservices.jpg";





export default function Service({isDigitalSecurityActive}) {
  const services = [
    { img: "/assets/Images/girls.jpg", title: "Guard Services", desc: "Professional guards ensuring your safety 24/7." },
    { img: "/assets/Images/12.jpg", title: "CCTV Monitoring", desc: "Smart surveillance with real-time monitoring." },
    { img: "/assets/Images/girls.jpg", title: "Patrolling", desc: "Regular patrolling to secure your premises." },
    { img: "/assets/Images/13.png", title: "Access Control", desc: "Fingerprint and card-based secure access." },
    { img: "/assets/Images/22.jpg", title: "Event Security", desc: "Reliable security for corporate & personal events." },
    { img: "/assets/Images/girls.jpg", title: "VIP Protection", desc: "Dedicated bodyguards for personal safety." },
  ];

  return (
    <div
      className="py-8 px-4 sm:px-6 lg:px-12 relative"
      style={{
        backgroundImage: `url(${ourservice})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* ✅ Heading */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center align-center">
            <span className="!text-[#15487d] !font-bold  px-2 py-1 rounded-full !text-xl md:!text-2xl  flex gap-1 
            "    style={{ fontFamily: "Arial, sans-serif" }}>
              Our Services
            </span>
          </div>
          <motion.h2
            className={`!text-xl sm:!text-2xl md:!text-4xl !font-bold leading-tight ${ isDigitalSecurityActive ? "!text-black" : "text-[#15487d]"}`}
             style={{ fontFamily: "Arial, sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
              
          >
              
            Smart Security Services for Your Safety
          </motion.h2>
        </motion.div>

        {/* ✅ Swiper Carousel */}
        <div className="relative w-full max-w-5xl mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={600}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 25 },
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {services.map((service, i) => (
              <SwiperSlide
                key={i}
                className="relative group rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover"
                />

                {/* ✅ Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="text-sm sm:text-base font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90">{service.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-1 sm:-left-6 top-1/2 -translate-y-1/2 bg-white/80 text-black w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-sm flex items-center justify-center z-20 hover:bg-gray-200 duration-200">
            <BiSolidLeftArrowAlt size={16}/>
          </button>
          <button className="swiper-button-next-custom absolute right-1 sm:-right-6 top-1/2 -translate-y-1/2 bg-white/80 text-black w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-sm flex items-center justify-center z-20 hover:bg-gray-200 duration-200">
            <BiSolidRightArrowAlt size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}





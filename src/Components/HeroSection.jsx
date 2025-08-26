import React from "react";

const HeroSection = () => {
  return (
   <div className="relative w-full h-full overflow-hidden pt-[100px] border-blue-600">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="../src/assets/Videos/123.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-opacity-40"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-12">
    <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
      Protecting People, Assets & Communities — <br />
      Trusted Physical Security Solutions.
    </h1>
    <p className="mt-4 text-lg max-w-xl">
      Comprehensive protection powered by expertise, technology, and 24/7 support.
    </p>

    {/* Two Buttons */}
    <div className="mt-6 d-flex gap-3 ">
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-pill transition ">
       Request the free Security Audit
      </button>
      <button className="bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-pill transition">
       View Solution
      </button>
    </div>

    {/* Three Checkpoints */}
    <div class="mt-4 d-flex  gap-2 mb-10">
  <button class="btn btn-outline-dark rounded-pill text-white">✔️ ISO Certified</button>
  <button class="btn btn-outline-dark rounded-pill  text-white">✔️ Trusted by NGOs & Enterprises</button>
  <button class="btn btn-outline-dark rounded-pill  text-white">✔️ 24/7 Support</button>
</div>
  </div>
</div>

  );
};

export default HeroSection;

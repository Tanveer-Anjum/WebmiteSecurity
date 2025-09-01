import React, { useState, useEffect } from 'react';
import { Shield, Users, Clock, Award, ChevronRight, Calendar, Phone, Mail, Car } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import TestimonialCard from './TestimonialCard';
import Head from "./Head";
import CardAbout from './CardAbout';
import StatsSection from './StatsSection';
import ContactUs from './ContactUs';
import TeamCard from './TeamSection';



const AboutHeader = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      testimonial: "Shehrity has been our trusted security partner for over 5 years. Their professionalism and expertise are unmatched.",
      author: "Morgan Smith, CEO Tech Solutions",
      rating: 5
    },
    {
      testimonial: "The response time is incredible and their team is always prepared. We feel completely secure with their services.",
      author: "Sarah Johnson, Operations Manager",
      rating: 5
    },
    {
      testimonial: "From consultation to implementation, Shehrity delivered beyond our expectations. Highly recommended!",
      author: "David Chen, Facility Director",
      rating: 5
    }
  ];

  const teamMembers = [
    { name: "John Doe", position: "CEO & Founder" },
    { name: "Jane Smith", position: "Chief Technology Officer" },
    { name: "Sarah Thompson", position: "Head of Project Management" },
    { name: "David Garcia", position: "Lead Systems Engineer" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
    
      <Head title="About Us" currentPage="About" />
     
      <div className="py-20 px-4 bg-[#15487d]">
        <p className="text-lg text-white leading-relaxed">
          
          We are a leading security solutions provider dedicated to ensuring 
          safety and peace of mind. With years of experience, we offer 
          top-notch cybersecurity, physical security, and emergency response 
          services.
        </p>
      </div>
  



    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden w-full ">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              40+ Years of Experience
            </div>
            
            <h1 className="text-3xl lg:text-4xl  text-gray-900 leading-tight " style={{ fontFamily: "Arial, sans-serif" }}>
              HELLO! HERE WE ARE -
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed " style={{ fontFamily: "Arial Narrow, Arial, sans-serif" }}>
              Shehrity has provided security services to countless businesses since 1980. With over 40 years 
              of expertise, we've become one of the country's leading security firms. Our team of highly 
              trained professionals is committed to delivering the highest level of security services available.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Event Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Armed Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Venue Security</span>
              </div>
            </div>
            
          </div>
          
          <div className="relative ">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg" 
                alt="Security Professional" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>

        </div>
    </section>
    <CardAbout />



        {/* Timeline Section */}
     <TimelineSection></TimelineSection>

        {/* Statistics */}
<StatsSection></StatsSection>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentTestimonial ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full'
                  }`}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
    
<TeamCard/>
        {/* Contact CTA */}
        <div className="bg-gray-200 rounded p-10 text-center text-white mb-10 ">
         <ContactUs></ContactUs>
        </div>
   
    </>
  );
};

export default AboutHeader;
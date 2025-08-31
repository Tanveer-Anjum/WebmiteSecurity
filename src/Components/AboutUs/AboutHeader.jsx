import React, { useState, useEffect } from 'react';
import { Shield, Users, Clock, Award, ChevronRight, Calendar, Phone, Mail, Car } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import TestimonialCard from './TestimonialCard';
import TeamMember from './TeamMember';
import NewsTickers from './NewsTickers';
import Head from "./Head";
import CardAbout from './CardAbout';
import StatsSection from './StatsSection';
import TeamSection from './TeamSection';

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
      <div className="max-w-4xl mx-auto py-10 px-4">
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a leading security solutions provider dedicated to ensuring 
          safety and peace of mind. With years of experience, we offer 
          top-notch cybersecurity, physical security, and emergency response 
          services.
        </p>
      </div>
    <NewsTickers></NewsTickers>
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
        <div className="bg-white rounded-2xl p-10 shadow-xl mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {[
                { year: "1980", event: "Company Founded", desc: "Started as a small security firm with big dreams" },
                { year: "1995", event: "Major Expansion", desc: "Expanded services to include armed security and event protection" },
                { year: "2010", event: "Technology Integration", desc: "Integrated cutting-edge surveillance and monitoring systems" },
                { year: "2020", event: "Digital Transformation", desc: "Launched mobile app and AI-powered security solutions" },
                { year: "2024", event: "Industry Leader", desc: "Recognized as Australia's premier security service provider" }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                      <div className="text-blue-600 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
      <TeamSection/>

        {/* Contact CTA */}
        <div className="bg-blue-900 rounded p-10 text-center text-white mb-10 ">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Get a free consultation and custom security plan tailored to your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now: +1 (800) 555-0199</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>
     
    </>
  );
};

export default AboutHeader;
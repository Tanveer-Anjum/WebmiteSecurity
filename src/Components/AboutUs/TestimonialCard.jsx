import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, author, rating }) => {
  return (
    <>
    <div className='flex justify-center '>
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial}"</p>
      <div className="text-blue-600 font-semibold">- {author}</div>
    </div>
    </div>
    </>
  );
};

export default TestimonialCard;
import React from "react";
import image1 from "../assets/John D..webp";
import image2 from "../assets/Emily R..png";

interface Testimonial {
  name: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John D.",
    feedback:
      "I love how easy it is to order my favorite drinks. The service is fast and reliable!",
    image: image1,
  },
  {
    name: "Emily R.",
    feedback:
      "The app is very user-friendly, and I get my drinks exactly as I like them.",
    image: image2,
  },
];

const CustomerTestimonials: React.FC = () => {
  return (
    <div className="my-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
        What Our Customers Are Saying
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg shadow-md bg-cyan-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-out"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-lg text-black">
                {testimonial.name}
              </p>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;

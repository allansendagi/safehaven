import React from 'react';

const TestimonialSection = () => {
  // Sample testimonials
  const testimonials = [
    {
      quote: "Safehaven's approach to AI governance through the TownSquare model represents one of the most promising frameworks for ensuring AI benefits humanity collectively.",
      author: "Dr. Elena Kowalski",
      title: "Director, Global AI Ethics Institute",
      image: "/images/testimonial-1.jpg" // Placeholder
    },
    {
      quote: "The Societal Readiness Index has been invaluable in helping our government identify critical gaps in our AI preparedness and develop targeted policies.",
      author: "Minister Takahashi Hiroshi",
      title: "Ministry of Digital Transformation, Japan",
      image: "/images/testimonial-2.jpg" // Placeholder
    },
    {
      quote: "As AI capabilities accelerate, Safehaven's work in building adaptive governance systems is exactly what we need to navigate the challenges ahead.",
      author: "Prof. Samuel Okonkwo",
      title: "African Institute for Technology Policy",
      image: "/images/testimonial-3.jpg" // Placeholder
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-wide">
        <h2 className="section-title mb-12">Global Perspectives</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="quote mb-6">
                  {testimonial.quote}
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    {/* Placeholder for actual images */}
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-[var(--primary)] text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/testimonials" className="btn-outline">Read More Testimonials</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

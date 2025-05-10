
const Testimonials = () => {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was seamless and their team was extremely professional throughout.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStream Inc."
    },
    {
      quote: "As a growing startup, we needed to optimize our software costs. Through SoftSell, we found premium licenses at a fraction of the retail cost, saving us crucial capital.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "Quantum Solutions"
    }
  ];

  return (
    <section id="testimonials" className="layout-section bg-gradient-to-b from-white to-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what businesses like yours have experienced with SoftSell.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card relative p-8"
            >
              <div className="absolute -top-4 left-8 text-softsell-blue text-5xl">"</div>
              <p className="text-gray-700 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-softsell-blue to-softsell-purple rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

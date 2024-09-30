export const TestimonialsMarquee = () => {
    const testimonials = [
      "This platform changed the way I connect with my audience! — Jane Doe",
      "I love the community feedback feature! — John Smith",
      "Fundraising has never been easier! — Alice Johnson",
      "A fantastic way to showcase my projects! — Mark Lee"
    ];
  
    return (
      <section className="px-8 gap-4 py-16 ">
        <h2 className="text-xl font-bold text-center mb-4">What Our Users Say</h2>
        <div className="overflow-hidden whitespace-nowrap  ">
          <div className="inline-block animate-marquee gap-4  text-scroll-background">
            {testimonials.map((testimonial, index) => (
              <span key={index} className="px-8 bg-scroll-foreground">{testimonial}</span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsMarquee;
  
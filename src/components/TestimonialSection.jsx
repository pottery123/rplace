const testimonials = [
  { name: 'Jordan', quote: 'Working and connecting with people brought me real joy. I’d love to do it again.' },
  { name: 'Marium', quote: 'I enjoyed learning how to take orders, interact with customers, and set up the café.' },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white text-slate-800">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Youth Testimonials</h2>
        <p className="text-lg text-slate-600">Real voices, real impact</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-peach-terracotta p-6 rounded-xl shadow-md">
            <p className="italic">“{t.quote}”</p>
            <p className="text-right font-bold mt-2">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TestimonialSection;

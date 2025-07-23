const ContactSection = () => {
  return (
    <section id="contact" className="bg-sage-olive py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-slate-800 mb-4">Get in Touch</h2>
    <p className="text-lg text-slate-600 mb-10">
      Have questions or want to join the program? Reach out or apply now!
    </p>

    <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-indigo-700 font-semibold mb-2">📍 Address</h3>
        <p>Rainier Avenue Church<br />5900 Rainier Ave S, Seattle, WA 98118</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-indigo-700 font-semibold mb-2">📧 Email</h3>
        <p>
          <a href="mailto:youthcafe@rainieravenuechurch.org" className="text-blue-600 hover:underline">
            youthcafe@rainieravenuechurch.org
          </a>
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-indigo-700 font-semibold mb-2">📱 Social Media</h3>
        <p>
          <a href="https://instagram.com/rangkhamyouthcafe" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
            Instagram
          </a><br />
          <a href="https://facebook.com/rangkhamyouthcafe" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Facebook
          </a>
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-indigo-700 font-semibold mb-2">📅 Program Details</h3>
        <p>Starts September 7th, 2025<br />8:30 AM – 1:00 PM at Rainier Avenue Church</p>
      </div>
    </div>

    <a
      href="https://rainieravenuechurch.ccbchurch.com/goto/forms/453/responses/new"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-coral-terracotta text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      APPLY NOW
    </a>
  </div>
</section>

  );
};
export default ContactSection;

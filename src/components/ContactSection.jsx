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
            <h3 className="text-charcoal font-semibold mb-2">
              🌐 Rainier Avenue Church Website
            </h3>
            <p>
              <a
                href="https://www.rainieravenuechurch.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                www.rainieravenuechurch.org
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-charcoal font-semibold mb-2">📍 Address</h3>
            <p className="text-slate-800">
              Rainier Avenue Church
              <br />
              5900 Rainier Ave S<br />
              Seattle, WA 98118
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-charcoal font-semibold mb-2">📧 Email</h3>
            <p>
              <a
                href="mailto:youthcafe@rainieravenuechurch.org"
                className="text-coral hover:underline"
              >
                rp@rainieravenuechurch.org
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-charcoal font-semibold mb-2">
              📱 Social Media
            </h3>
            <p>
              <a
                href="https://instagram.com/rangkhamyouthcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                Instagram
              </a>
              <br />
              <a
                href="https://www.facebook.com/RangkhamsPlaceCafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:underline"
              >
                Facebook
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-charcoal font-semibold mb-2">
              📅 Program Details
            </h3>
            <p>
              Starts September 7th, 2025
              <br />
              8:30 AM – 12:00 PM at Rainier Avenue Church
            </p>
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

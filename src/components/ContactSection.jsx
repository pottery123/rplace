import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact"  className="py-20 bg-gradient-to-br from-[#335766] to-[#b1d0df] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-center text-white/90 mb-8">
          Have questions or want to connect? Drop us a message or reach out directly.
        </p>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 text-white/90">
            <p><strong>📍 Address:</strong><br />Rainier Avenue Church<br />5900 Rainier Ave S, Seattle, WA 98118</p>
            <p><strong>📧 Email:</strong><br /><a href="mailto:youthcafe@rainieravechurch.org" className="underline hover:text-pink-200">youthcafe@rainieravechurch.org</a></p>
            <p><strong>🔗 Follow Us:</strong><br />
              <a href="https://instagram.com/rangkhamplace" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-200">Instagram</a> · 
              <a href="https://facebook.com/rangkhamplace" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-200 ml-2">Facebook</a>
            </p>
          </div>

          {/* Message Form */}
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
            <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70" />
            <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70" />
            <textarea name="message" rows={4} required placeholder="Message" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 resize-none" />
            <button type="submit" className="bg-red-500 hover:bg-pink-500 py-3 px-6 rounded-full font-bold text-lg transition-transform transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

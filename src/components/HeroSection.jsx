const HeroSection = () => {
    return (
      <section
        className="relative h-screen bg-center bg-cover flex items-center justify-center text-white px-6"
        style={{
          backgroundImage: "url('/images/hero4.jpg')" // Replace with your image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
  
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Rangkham's Place Youth Café
          </h1>
  
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            Empowering youth through a 10-week Sunday program at Rainier Avenue Church —
            blending barista training, biblical discipleship, creative teamwork, and real-world career skills.
          </p>
  
          <p className="text-base md:text-lg text-white/80 mb-8">
            <strong>Program begins:</strong> Sunday, <span className="underline">September 7th, 2025</span><br />
            <strong>Time:</strong> 8:30 AM – 1:00 PM at Rainier Avenue Church
          </p>
  
          <a
            href="https://rainieravenuechurch.ccbchurch.com/goto/forms/453/responses/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 hover:bg-pink-500 font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-transform transform hover:scale-105"
          >
            APPLY NOW
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
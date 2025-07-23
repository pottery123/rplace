const VideoSection = () => {
    return (
      <section id="video" className="bg-slate-50 py-16 px-6 text-center text-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">🎓 Capstone Project</h2>
        <p className="text-lg text-slate-600 mb-8">
          This video showcases our previous cohort's final capstone project—a culmination of 10 weeks of training,
          collaboration, and spiritual growth at Rangkham's Place Youth Cafe.
        </p>
    
        {/* Embedded Video via iframe */}
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/4nrERTCyPwI?si=hmBaCyv9_y6_LtTm" // replace with your actual video URL
            title="Youth Café Capstone Project"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
    
    );
  };
  export default VideoSection;
  
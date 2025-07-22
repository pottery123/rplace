const VideoSection = () => {
    return (
      <section id="video" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Watch the Story</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Youth Café Story"
              className="w-full h-full rounded-xl shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  export default VideoSection;
  
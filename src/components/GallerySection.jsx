const mediaItems = [
    { imageUrl: '/images/barista.jpg', title: 'Barista Training', description: 'Learning café skills hands-on' },
    { imageUrl: '/images/team.jpg', title: 'Team Building', description: 'Creative group projects' },
  ];
  
  const GallerySection = () => {
    return (
      <section  id="gallery" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Photo Gallery</h2>
          <p className="text-lg text-slate-700">Moments from our program</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {mediaItems.map((item, index) => (
            <div key={index} className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/40">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default GallerySection;
  
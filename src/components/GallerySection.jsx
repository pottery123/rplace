
import students5 from '/hero4.jpg'
import group from '/group.jpg'
import student from '/student.jpg'



const galleryImages = [
    { src: students5, caption: 'Serving coffee like a pro!' },
    { src: group, caption: ' Discipleship through community' },
    { src: student , caption: ' Sunday setup time' },
  ];
  
  const GallerySection = () => (
    <section id="gallery" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">📷 Photo Gallery</h2>
        <p className="text-lg text-slate-600 mb-10">Snapshots from our journey</p>
  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="h-48 w-full rounded-xl shadow-md mb-2"
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <p className="text-sm text-slate-600 italic">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default GallerySection;
  
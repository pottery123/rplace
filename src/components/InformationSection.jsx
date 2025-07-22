import { FaCoffee, FaBible, FaUsers, FaHandshake, FaFileAlt, FaGift } from 'react-icons/fa';

const cardData = [
  { title: 'Barista Experience', icon: <FaCoffee />, description: 'Hands-on café skills every Sunday.' },
  { title: 'Biblical Discipleship', icon: <FaBible />, description: 'Spiritual growth through mentorship and study.' },
  { title: 'Team Projects', icon: <FaUsers />, description: 'Collaborative activities to build trust and creativity.' },
  { title: 'Customer Service Skills', icon: <FaHandshake />, description: 'Training in communication and professionalism.' },
  { title: 'Resume Development', icon: <FaFileAlt />, description: 'Build a strong résumé with real-world experience.' },
  { title: 'Stipend Awarded', icon: <FaGift />, description: 'Receive financial recognition upon completing the program.' },
];

const InformationSection = () => {
  return (
    <section id="information" className="py-20 bg-gradient-to-br from-[#335766] via-[#b1d0df] to-white text-white relative">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md z-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-200">
          Program Overview
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/30 p-6 rounded-xl shadow-lg text-white/90 text-center space-y-4 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;

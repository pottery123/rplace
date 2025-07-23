import { FaCoffee, FaBible, FaUsers, FaHandshake, FaFileAlt, FaGift } from 'react-icons/fa';

const cardData = [
  { icon: <FaCoffee />, title: 'Barista Training', description: 'Hands-on experience brewing and serving every Sunday.' },
  { icon: <FaBible />, title: 'Biblical Discipleship', description: 'Spiritual growth through mentorship and study.' },
  { icon: <FaUsers />, title: 'Team Projects', description: 'Collaborative activities that build trust and creativity.' },
  { icon: <FaHandshake />, title: 'Customer Service', description: 'Training in professional communication.' },
  { icon: <FaFileAlt />, title: 'Resume Building', description: 'Showcase real-world job experience.' },
  { icon: <FaGift />, title: 'Stipend Awarded', description: 'Receive financial recognition after 10 weeks.' },
];

const InformationSection = () => (
  <section id="information" className="py-20 bg-sage-olive text-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">Program Overview</h2>
      <p className="text-base mb-10">
      The 10-week program meets every Sunday from 8:30 AM to 1:00 PM at Rainier Avenue Church.
      Youth will gain hands-on barista experience, engage in biblical discipleship, and build teamwork
      through creative group projects. Along the way, they’ll develop customer service skills and strengthen
      their resumes with practical work experience. Additionally, students will receive a stipend upon
      completing the ten-week program.
    </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((item, index) => (
          <div key={index} className="bg-white text-slate-800 rounded-xl p-6 shadow-lg hover:scale-[1.03] transition-transform">
            <div className="text-3xl text-terracotta mb-2">{item.icon}</div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InformationSection;

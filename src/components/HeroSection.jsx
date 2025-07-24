import imgUrl from "/hero-image3.jpg";

const HeroSection = () => (
  <>
    {/* 🖼️ Full-Screen Image */}
    <div className="h-16" />{" "}
    {/* Spacer to push content below the fixed header */}
    <section
  id="home"
  className="h-[500px] md:h-screen w-full flex items-center justify-center px-6 text-white"
  style={{
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Layer any content here */}
</section>

    {/* 💬 Combined Info + Apply Panel */}
    <section className="bg-white py-16 px-6 text-center text-slate-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Rangkham's Place Youth Café</h1>
        <p className="text-xl mb-6">
          Empowering youth with barista skills, discipleship, and real-world
          work experience.
        </p>
        <div className="text-base mb-6">
          <p>
            <strong>Program begins:</strong> September 7th, 2025
          </p>
          <p>
            <strong>Time:</strong> 8:30 AM – 12:00 PM
          </p>
          <p>
            <strong>Duration:</strong> 10 weeks
          </p>
          <p>
            <strong>Location:</strong> Rainier Avenue Church, 5900 Rainier Ave S, Seattle, WA 98118 
          </p>
        </div>
        <a
          href="https://rainieravenuechurch.ccbchurch.com/goto/forms/453/responses/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-coral to-terracotta text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          APPLY NOW
        </a>
      </div>
    </section>
  </>
);

export default HeroSection;

// const HeroSection = () => (
//     <section
//       id="home"
//       className="h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-red-500 flex items-center justify-center px-6 text-white relative"
//       style={{
//        backgroundImage: `url(${imgUrl})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundBlendMode: "overlay"
//       }}

//     >
//       <div className="bg-white text-slate-800 rounded-xl shadow-xl p-8 max-w-3xl text-center backdrop-blur-md bg-opacity-80">
//         <h1 className="text-4xl font-bold mb-4">Rangkham's Place Youth Café</h1>
//         <p className="text-xl mb-4">Empowering youth with barista skills, discipleship, and real-world experience.</p>
//         <p className="text-base mb-6">
//           <strong>Program begins:</strong> September 7th, 2025<br />
//           <strong>Time:</strong> 8:30 AM – 1:00 PM at Rainier Avenue Church
//         </p>
//         <a
//           href="https://rainieravenuechurch.ccbchurch.com/goto/forms/453/responses/new"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
//         >
//           APPLY NOW
//         </a>
//       </div>
//     </section>
//   );

//   export default HeroSection;

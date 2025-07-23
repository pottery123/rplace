const NavBar = () => (
    <nav className=" bg-sage-olive fixed top-0 w-full bg-white/20 backdrop-blur-md shadow-md z-50 text-coral">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center ">
        <div className="text-xl font-bold  "><a className=" text-charcoal hover:text-coral" href="#home">Rangkham's Place Youth Cafe</a></div>
        <ul className="flex space-x-6 text-sm font-medium ">
          <li><a href="#information" className=" text-charcoal hover:text-coral">Program</a></li>
          <li><a href="#video" className="text-charcoal hover:text-coral">Video</a></li>
          <li><a href="#gallery" className="text-charcoal hover:text-coral">Gallery</a></li>
          <li><a href="#testimonials" className="text-charcoal hover:text-coral">Testimonials</a></li>
          <li><a href="#contact" className="text-charcoal hover:text-coral">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
  
  export default NavBar;
  
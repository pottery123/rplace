import React from 'react';
import HeroSection from './components/HeroSection';
import InformationSection from './components/InformationSection';
import VideoSection from './components/VideoSection';
import GallerySection from './components/GallerySection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
      <HeroSection />
      <InformationSection />
      <VideoSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}

export default App;



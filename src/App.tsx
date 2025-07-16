import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Coffee,
  Calendar,
  MapPin,
  DollarSign,
  BookOpen,
  Users,
  Briefcase,
  Star,
  Phone,
  Mail,
  Clock,
  Award
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'program', label: 'Program' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const programDetails = [
    {
      icon: <Calendar style={{ width: '2rem', height: '2rem', marginBottom: '1rem' }} />,
      title: 'Schedule',
      description: '10-week program\nEvery Sunday\n8:30 AM - 1:00 PM\nStarting September 7th, 2025'
    },
    {
      icon: <MapPin style={{ width: '2rem', height: '2rem', marginBottom: '1rem' }} />,
      title: 'Location',
      description: 'Rainier Avenue Church\nJoin us in our welcoming community space equipped with professional coffee training facilities. Learn more at www.rainieravenuechurch.org'
    },
    {
      icon: <DollarSign style={{ width: '2rem', height: '2rem', marginBottom: '1rem' }} />,
      title: 'Completion Bonus',
      description: 'Students will receive a stipend after successfully completing the entire 10-week program'
    }
  ];

  const learningItems = [
    {
      icon: <Coffee style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Barista Skills',
      description: 'Master the art of coffee making with hands-on training using professional equipment'
    },
    {
      icon: <BookOpen style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Biblical Discipleship',
      description: 'Grow in faith through engaging biblical studies and spiritual mentorship'
    },
    {
      icon: <Users style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Teamwork',
      description: 'Build collaborative skills through creative group projects and team challenges'
    },
    {
      icon: <Briefcase style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Customer Service',
      description: 'Develop professional communication and customer interaction skills'
    },
    {
      icon: <Award style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Resume Building',
      description: 'Gain practical work experience that strengthens your resume and future opportunities'
    },
    {
      icon: <Star style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Creative Projects',
      description: 'Express creativity while learning practical business and leadership skills'
    }
  ];

  const mediaItems = [
    {
      category: 'photos',
      title: 'Training Sessions',
      description: 'Students learning professional barista techniques and coffee brewing methods',
      imageUrl: '/students.jpg',
    },
    {
      category: 'photos',
      title: 'Team Projects',
      description: 'Collaborative creative projects that build teamwork and leadership skills',
      imageUrl: '/student.jpg',
    },
    {
      category: 'photos',
      title: 'Biblical Studies',
      description: 'Engaging in meaningful discussions and spiritual growth activities',
      imageUrl: '/group.jpg'
    }
  ];

  const testimonials = [
    {
      content: 'I enjoyed learning how to take orders, interact with customers, and set up the café. I also appreciated the flexibility to create new drinks.',
      author: 'Marium, Program Graduate'
    },
    {
      content: 'I loved being able to work and talk with people. It brought me joy, and I want to do it again.',
      author: 'Kaylene, Program Graduate'
    },
  ];

  const contactInfo = [
    {
      icon: <Mail style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Email',
      details: 'rp@rainieravenuechurch.org',
      subtitle: 'For applications and general inquiries'
    },
    {
      icon: <MapPin style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: 'Address',
      details: '5900 Rainier Ave S, Seattle, WA 98118 ',
      subtitle: ' (In the upstairs lobby!)'
    },
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom right, #eff6ff, #faf5ff)'
    },
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s ease',
      background: scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      boxShadow: scrollY > 50 ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
    },
    nav: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      height: '4rem'
    },
    logoImg: {
      height: '100%',
      aspectRatio: '1/1',
      objectFit: 'contain'
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #335766, #b1d0df)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    desktopNav: {
      display: 'none',
      alignItems: 'center',
      gap: '2rem'
    },
    navButton: {
      color: '#374151',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '1rem',
      transition: 'color 0.2s ease'
    },
    mobileMenuButton: {
      display: 'block',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    },
    mobileNav: {
      marginTop: '1rem',
      paddingBottom: '1rem',
      borderTop: '1px solid #e5e7eb',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      paddingTop: '1rem'
    },
    mobileNavButton: {
      textAlign: 'left',
      padding: '0.5rem 1rem',
      color: '#374151',
      background: 'none',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.2s ease'
    },
    heroSection: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("/hero4.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10,
      marginTop: '5rem'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1.5rem',
      animation: 'fadeInUp 1s ease-out'
    },
    heroSubtitle: {
      background: 'rgba(51, 87, 102, 0.2)',
      backdropFilter: 'blur(4px)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      maxWidth: '48rem',
      margin: '0 auto 2rem',
      animation: 'fadeInUp 1s ease-out 0.3s both'
    },
    heroSubtitleText: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '1.25rem'
    },
    heroApplyText: {
      color: 'rgba(255, 255, 255, 0.9)'
    },
    applyButton: {
      background: 'linear-gradient(to right, #ef4444, #ec4899)',
      color: 'white',
      fontWeight: 'bold',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      fontSize: '1.125rem',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      animation: 'fadeInUp 1s ease-out 0.6s both'
    },
    learningSection: {
      padding: '5rem 0',
      background: 'linear-gradient(to bottom right, #b1d0df, #335766)'
    },
    sectionContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem'
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      maxWidth: '32rem',
      margin: '0 auto'
    },
    learningGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem'
    },
    learningCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '1.5rem',
      borderRadius: '1rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    learningCardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    learningCardIcon: {
      color: 'rgba(255, 255, 255, 0.9)',
      marginRight: '0.75rem'
    },
    learningCardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white'
    },
    learningCardDescription: {
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: '1.6'
    },
    programSection: {
      padding: '5rem 0',
      backgroundColor: 'white'
    },
    programGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    programCard: {
      background: 'linear-gradient(to bottom right, #335766, #b1d0df)',
      color: 'white',
      padding: '2rem',
      borderRadius: '1.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      cursor: 'pointer'
    },
    programCardIcon: {
      display: 'flex',
      justifyContent: 'center',
      color: 'rgba(255, 255, 255, 0.9)'
    },
    programCardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    programCardDescription: {
      color: 'rgba(255, 255, 255, 0.9)',
      whiteSpace: 'pre-line',
      lineHeight: '1.6'
    },
    studentWorkSection: {
      padding: '5rem 0',
      backgroundColor: '#f9fafb'
    },
    videoContainer: {
      width: '100%',
      height: '100vh'
    },
    videoFrame: {
      width: '100%',
      height: '100%',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    gallerySection: {
      padding: '5rem 0',
      backgroundColor: 'white'
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    galleryCard: {
      backgroundColor: '#f9fafb',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    galleryImage: {
      height: '12rem',
      position: 'relative',
      overflow: 'hidden'
    },
    galleryImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    galleryCardContent: {
      padding: '1.5rem'
    },
    galleryCardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '0.5rem'
    },
    galleryCardDescription: {
      color: '#4b5563',
      lineHeight: '1.6'
    },
    testimonialsSection: {
      padding: '5rem 0',
      background: 'linear-gradient(to bottom right, #335766, #b1d0df)'
    },
    testimonialsContainer: {
      maxWidth: '64rem',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },
    testimonialCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      position: 'relative',
      cursor: 'pointer'
    },
    testimonialQuote: {
      fontSize: '3.75rem',
      color: '#f9a8d4',
      position: 'absolute',
      top: '1rem',
      left: '1.5rem',
      fontFamily: 'serif'
    },
    testimonialContent: {
      paddingLeft: '2rem'
    },
    testimonialText: {
      color: '#374151',
      fontSize: '1.125rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      fontStyle: 'italic'
    },
    testimonialAuthor: {
      color: '#111827',
      fontWeight: 'bold'
    },
    contactSection: {
      backgroundColor: '#335766',
      padding: '5rem 0'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    },
    contactCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '1.5rem',
      borderRadius: '1rem',
      transition: 'all 0.3s ease'
    },
    contactCardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    contactCardIcon: {
      color: '#60a5fa',
      marginRight: '0.75rem'
    },
    contactCardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white'
    },
    contactCardDetails: {
      color: '#d1d5db',
      whiteSpace: 'pre-line',
      lineHeight: '1.6',
      marginBottom: '0.5rem'
    },
    contactCardSubtitle: {
      color: '#9ca3af',
      fontSize: '0.875rem'
    },
    footer: {
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '2rem 0',
      textAlign: 'center'
    },
    footerText: {
      color: '#9ca3af'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>
            <img
              src="/hero-image3.jpg"
              alt="Cafe Logo"
              style={styles.logoImg}
            />
            <div style={styles.logoText}>
              Rangkham's Place Youth Cafe
            </div>
          </div>

          {/* Desktop Navigation */}
          <div style={{
            ...styles.desktopNav,
            display: window.innerWidth >= 768 ? 'flex' : 'none'
          }}>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={styles.navButton}
                onMouseEnter={(e) => e.target.style.color = '#9333ea'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              ...styles.mobileMenuButton,
              display: window.innerWidth < 768 ? 'block' : 'none'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {isMenuOpen ? <X style={{ width: '1.5rem', height: '1.5rem' }} /> : <Menu style={{ width: '1.5rem', height: '1.5rem' }} />}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div style={styles.mobileNav}>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={styles.mobileNavButton}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#9333ea';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#374151';
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h1 style={{
              ...styles.heroTitle,
              fontSize: window.innerWidth >= 768 ? '4.5rem' : '3rem'
            }}>
              Rangkham's Place Youth Cafe
            </h1>
            <div style={styles.heroSubtitle}>
              <p style={{
                ...styles.heroSubtitleText,
                fontSize: window.innerWidth >= 768 ? '1.5rem' : '0.875rem'
              }}>
                A transformative 10-week journey that combines practical job training and spiritual growth to empower youth for meaningful work and purpose.
              </p>
              <p style={styles.heroApplyText}>
                Apply today! Next cohort starts September 7th, 2025
              </p>
            </div>
            <a
              href="https://rainieravenuechurch.ccbchurch.com/goto/forms/453/responses/new"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.applyButton}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(to right, #dc2626, #db2777)';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(to right, #ef4444, #ec4899)';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section style={styles.learningSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={{
              ...styles.sectionTitle,
              fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem'
            }}>
              What You'll Learn
            </h2>
            <p style={styles.sectionSubtitle}>
              Develop valuable skills that will serve you in work and life
            </p>
          </div>

          <div style={styles.learningGrid}>
            {learningItems.map((item, index) => (
              <div
                key={index}
                style={styles.learningCard}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.learningCardHeader}>
                  <div style={styles.learningCardIcon}>
                    {item.icon}
                  </div>
                  <h3 style={styles.learningCardTitle}>{item.title}</h3>
                </div>
                <p style={styles.learningCardDescription}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program" style={styles.programSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={{
              ...styles.sectionTitle,
              color: '#111827',
              fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem'
            }}>
              Program Overview
            </h2>
            <p style={{
              ...styles.sectionSubtitle,
              color: '#4b5563'
            }}>
              A transformative 10-week journey that combines practical job training and spiritual growth to empower youth for meaningful work and purpose.
            </p>
          </div>

          <div style={styles.programGrid}>
            {programDetails.map((detail, index) => (
              <div
                key={index}
                style={styles.programCard}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
                  e.target.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.programCardIcon}>
                  {detail.icon}
                </div>
                <h3 style={styles.programCardTitle}>{detail.title}</h3>
                <p style={styles.programCardDescription}>
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Work */}
      <section style={styles.studentWorkSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={{
              ...styles.sectionTitle,
              color: '#111827',
              fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem'
            }}>
              Student Work
            </h2>
            <p style={{
              ...styles.sectionSubtitle,
              color: '#4b5563'
            }}>
              Showcasing achievements and projects from our participants
            </p>
          </div>

          <div style={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/4nrERTCyPwI?si=SID1GuDkIZQgSCI8"
              title="Full-Screen Video"
              style={styles.videoFrame}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" style={styles.gallerySection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={{
              ...styles.sectionTitle,
              color: '#111827',
              fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem'
            }}>
              Photo Gallery
            </h2>
            <p style={{
              ...styles.sectionSubtitle,
              color: '#4b5563'
            }}>
              Moments from our program in action
            </p>
          </div>

          <div style={styles.galleryGrid}>
            {mediaItems.map((item, index) => (
              <div
                key={index}
                style={styles.galleryCard}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  e.target.style.transform = 'translateY(-8px)';
                  const img = e.target.querySelector('img');
                  if (img) img.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                  const img = e.target.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <div style={styles.galleryImage}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={styles.galleryImg}
                  />
                </div>
                <div style={styles.galleryCardContent}>
                  <h3 style={styles.galleryCardTitle}>{item.title}</h3>
                  <p style={styles.galleryCardDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={styles.testimonialsSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={{
              ...styles.sectionTitle,
              color: '#111827',
              fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem'
            }}>
              What Students Say
            </h2>
            <p style={{
              ...styles.sectionSubtitle,
              color: '#4b5563'
            }}>
              Hear from our program graduates
            </p>
          </div>

          <div style={styles.testimonialsContainer}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={styles.testimonialCard}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  e.target.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.testimonialQuote}>"</div>
                <div style={styles.testimonialContent}>
                  <p style={styles.testimonialText}>
                    {testimonial.content}
                  </p>
                  <p style={styles.testimonialAuthor}>
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={{
              ...styles.sectionTitle,
              fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem'
            }}>
              Ready to Apply?
            </h2>
            <p style={{
              ...styles.sectionSubtitle,
              color: '#d1d5db'
            }}>
              Get in touch to learn more or submit your application
            </p>
          </div>

          <div style={styles.contactGrid}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                style={styles.contactCard}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={styles.contactCardHeader}>
                  <div style={styles.contactCardIcon}>
                    {info.icon}
                  </div>
                  <h3 style={styles.contactCardTitle}>{info.title}</h3>
                </div>
                <p style={styles.contactCardDetails}>
                  {info.details}
                </p>
                {info.subtitle && (
                  <p style={styles.contactCardSubtitle}>{info.subtitle}</p>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              href="https://rainieravenuechurch.ccbchurch.com/goto/forms/453/responses/new"
              style={styles.applyButton}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(to right, #dc2626, #db2777)';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(to right, #ef4444, #ec4899)';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.sectionContainer}>
          <p style={styles.footerText}>
            &copy; 2025 Youth Barista Program - Rainier Avenue Church. All rights reserved.
          </p>
        </div>
      </footer>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (min-width: 768px) {
            .desktop-nav {
              display: flex !important;
            }
            .mobile-menu-button {
              display: none !important;
            }
          }

          @media (max-width: 767px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import AdminPanel from './components/AdminPanel';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProjectsSlider from './components/ProjectsSlider';
import DemoSites from './components/DemoSites';
import Industries from './components/Industries';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import './components/adminStyles.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Theme initialization (defaulting to dark mode as per original code)
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Scroll reveal logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.service-card, .offer-card, .team-card, .contact-item, .industry-card');
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    // Load animation logic
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);

    // Magnetic button effect and ripple logic
    const handleMouseMove = (e) => {
      const cursorGlow = document.getElementById('cursorGlow');
      if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      const cursorGlow = document.getElementById('cursorGlow');
      if (cursorGlow) cursorGlow.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = '';
  };

  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Check for admin panel shortcut (press 'A' key)
    const handleKeyPress = (e) => {
      if (e.key === 'a' && e.ctrlKey) {
        e.preventDefault();
        setShowAdmin(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (showAdmin) {
    return <AdminPanel />;
  }

  return (
    <div className="app-container">
      <div id="cursorGlow" className="cursor-glow"></div>
      <Header onMenuToggle={toggleSidebar} isMenuOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <main>
        <ProjectsSlider />
        <DemoSites />
        <Industries />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

const ProductsPage = ({ onMenuToggle, isMenuOpen }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeSection, setActiveSection] = useState('products');

    const instituteManagementSoftware = {
        title: "Smart Institute Management Software",
        subtitle: "Complete Solution for Schools, Colleges & Coaching Institutes",
        icon: "fa-graduation-cap",
        image: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        desc: "Transform your educational institute with our comprehensive management software. Designed specifically for Indian schools, colleges, and coaching centers to streamline operations, enhance communication, and boost efficiency. Complete ERP solution with Teacher Portal, Parent Portal, and Institute Portal.",
        features: [
            "Teacher Portal with Attendance & Homework Management",
            "Parent Portal for Live Updates & Communication",
            "Institute Dashboard with Complete Analytics",
            "Cloud-Based Access from Anywhere, Anytime",
            "Biometric Attendance Support",
            "SMS & Email Notifications",
            "Mobile App Available",
            "Multi-Language Support",
            "Data Backup & Security",
            "Affordable Pricing Plans"
        ],
        availableFor: [
            "Schools (CBSE, ICSE, State Boards)",
            "Colleges & Universities", 
            "Tuition Classes & Coaching Institutes",
            "Vocational Training Centers"
        ],
        portals: [
            {
                name: "Teacher Portal",
                icon: "fa-chalkboard-teacher",
                features: [
                    "Attendance Management System",
                    "Homework & Assignment Updates",
                    "Student Performance Tracking",
                    "Online Test & Exam Management",
                    "Lesson Planning Tools",
                    "Grade & Report Card Generation",
                    "Direct Communication with Parents",
                    "Class Schedule Management"
                ],
                color: "#3b82f6"
            },
            {
                name: "Parent Portal", 
                icon: "fa-users",
                features: [
                    "Live Attendance Updates",
                    "Homework & Assignment Tracking",
                    "Real-time Result Monitoring",
                    "Notices & Announcements",
                    "Fee Payment Status",
                    "Direct Communication with Teachers",
                    "Student Progress Reports",
                    "Leave Application System"
                ],
                color: "#10b981"
            },
            {
                name: "Institute / Head Portal",
                icon: "fa-university",
                features: [
                    "Complete Institute Dashboard",
                    "Staff & Student Management",
                    "Fees Collection & Reports",
                    "Performance Analytics",
                    "Inventory Management",
                    "Library Management System",
                    "Transport Management",
                    "Hostel Management (Optional)",
                    "Multi-branch Support"
                ],
                color: "#8b5cf6"
            }
        ],
        keyFeatures: [
            "User-Friendly Interface",
            "Secure & Fast System", 
            "Cloud-Based Solution",
            "Mobile App Available",
            "Biometric Attendance Support",
            "SMS & Email Notifications",
            "Custom Features Available",
            "Data Backup & Security",
            "Multi-Language Support",
            "Affordable Pricing Plans"
        ],
        benefits: [
            "Reduce Administrative Work by 70%",
            "Improve Parent-Teacher Communication",
            "Enhance Student Performance Tracking", 
            "Digital Record Keeping",
            "Increase Operational Efficiency",
            "Better Decision Making with Analytics",
            "Paperless Office Environment",
            "24/7 Access from Anywhere"
        ],
        techSpecs: {
            platform: "Cloud-Based Web Application",
            access: "Desktop, Tablet & Mobile",
            security: "256-bit SSL Encryption",
            backup: "Daily Automated Backups",
            support: "24/7 Technical Support"
        }
    };

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

    useEffect(() => {
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

        // Service card animations - matching main page
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            const cards = document.querySelectorAll('.service-card');
            cards.forEach(card => {
                const handleMouseMove = (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.08), rgba(255, 255, 255, 0.03))`;
                };
                const handleMouseLeave = () => {
                    card.style.background = 'rgba(255, 255, 255, 0.03)';
                };
                card.addEventListener('mousemove', handleMouseMove);
                card.addEventListener('mouseleave', handleMouseLeave);
                return () => {
                    card.removeEventListener('mousemove', handleMouseMove);
                    card.removeEventListener('mouseleave', handleMouseLeave);
                };
            });
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Smart Institute Management Software - Aadyaa Infotech</title>
                <meta name="description" content="Complete Institute Management Software for Schools, Colleges & Coaching Institutes. Teacher Portal, Parent Portal, and Institute Portal with advanced features." />
                <meta name="keywords" content="Institute Management Software, School Management Software, College Management System, Coaching Institute Software, Education ERP, Student Management System" />
            </Helmet>
            
            <div className="app-container">
                <div id="cursorGlow" className="cursor-glow"></div>
                
                {/* Modern Navigation Header */}
                <div style={{ 
                    position: 'fixed', 
                    top: '0', 
                    left: '0', 
                    right: '0', 
                    zIndex: '1000',
                    background: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(25px) saturate(180%)',
                    padding: '0.75rem 1.5rem',
                    borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        maxWidth: '1400px',
                        margin: '0 auto',
                        position: 'relative'
                    }}>
                        {/* Logo Section */}
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '1rem',
                            flex: '1'
                        }}>
                            <div style={{ 
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(99, 102, 241, 0.3)',
                                    boxShadow: '0 4px 16px rgba(99, 102, 241, 0.2)'
                                }}>
                                    <img src="/logo.png" alt="Aadyaa Infotech Logo" style={{ height: '28px' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ 
                                        fontWeight: '700', 
                                        fontSize: '1.25rem',
                                        lineHeight: '1.2',
                                        background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', 
                                        WebkitBackgroundClip: 'text', 
                                        WebkitTextFillColor: 'transparent', 
                                        backgroundClip: 'text',
                                        color: 'transparent'
                                    }}>
                                        Aadyaa
                                    </span>
                                    <span style={{ 
                                        color: '#e5e7eb', 
                                        fontSize: '1.1rem',
                                        fontWeight: '500',
                                        marginTop: '2px'
                                    }}>
                                        Infotech
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Items */}
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            flex: '2'
                        }}>
                            <button 
                                onClick={() => {
                                    setActiveSection('products');
                                    window.location.hash = '#/products';
                                    setTimeout(() => {
                                        const productsSection = document.getElementById('products');
                                        if (productsSection) {
                                            productsSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 100);
                                }}
                                style={{
                                    background: 'rgba(59, 130, 246, 0.9)',
                                    border: '1px solid rgba(59, 130, 246, 0.3)',
                                    color: '#ffffff',
                                    padding: '0.6rem 1.2rem',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = 'rgba(59, 130, 246, 1)';
                                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.6)';
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.4)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = 'rgba(59, 130, 246, 0.9)';
                                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
                                }}
                            >
                                <span style={{ position: 'relative', zIndex: '2' }}>
                                    <i className="fas fa-box" style={{ marginRight: '0.5rem' }}></i>
                                    Products
                                </span>
                            </button>

                            <button 
                                onClick={() => {
                                    setActiveSection('contact');
                                    window.location.hash = '#/contact';
                                    setTimeout(() => {
                                        const contactSection = document.getElementById('contact');
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 100);
                                }}
                                style={{
                                    background: activeSection === 'contact' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                                    border: activeSection === 'contact' ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.3)',
                                    color: '#ffffff',
                                    padding: '0.6rem 1.2rem',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = activeSection === 'contact' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.15)';
                                    e.target.style.borderColor = activeSection === 'contact' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.5)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = activeSection === 'contact' ? 'rgba(255, 255, 255, 0.15)' : 'transparent';
                                    e.target.style.borderColor = activeSection === 'contact' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.3)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                <span style={{ position: 'relative', zIndex: '2' }}>
                                    <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
                                    Contact
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => {
                                const menu = document.getElementById('mobile-menu');
                                if (menu) {
                                    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
                                }
                            }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: '#ffffff',
                                padding: '0.5rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                display: 'none',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            id="mobile-menu-btn"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div 
                        id="mobile-menu"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            right: '0',
                            background: 'rgba(15, 23, 42, 0.98)',
                            backdropFilter: 'blur(25px) saturate(180%)',
                            padding: '1rem',
                            borderRadius: '0 0 16px 16px 0 0',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                            display: 'none',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            minWidth: '200px'
                        }}
                    >
                        <button 
                            onClick={() => {
                                setActiveSection('services');
                                window.location.hash = '#services';
                                setTimeout(() => {
                                    const servicesSection = document.getElementById('services');
                                    if (servicesSection) {
                                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 100);
                            }}
                            style={{
                                background: activeSection === 'services' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                                border: 'none',
                                color: '#ffffff',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s ease',
                                width: '100%',
                                textAlign: 'left'
                            }}
                        >
                            <i className="fas fa-layer-group" style={{ marginRight: '0.75rem' }}></i>
                            Services
                        </button>
                        
                        <button 
                            onClick={() => {
                                setActiveSection('products');
                                window.location.hash = '#/products';
                                setTimeout(() => {
                                    const productsSection = document.getElementById('products');
                                    if (productsSection) {
                                        productsSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 100);
                            }}
                            style={{
                                background: activeSection === 'products' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                                border: 'none',
                                color: '#ffffff',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s ease',
                                width: '100%',
                                textAlign: 'left'
                            }}
                        >
                            <i className="fas fa-box" style={{ marginRight: '0.75rem' }}></i>
                            Products
                        </button>

                        <button 
                            onClick={() => {
                                setActiveSection('contact');
                                window.location.hash = '#/contact';
                                setTimeout(() => {
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 100);
                            }}
                            style={{
                                background: activeSection === 'contact' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                                border: 'none',
                                color: '#ffffff',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s ease',
                                width: '100%',
                                textAlign: 'left'
                            }}
                        >
                            <i className="fas fa-envelope" style={{ marginRight: '0.75rem' }}></i>
                            Contact
                        </button>
                    </div>
                </div>
                
                {/* Products Hero Section - Custom header without "Building Digital Experiences That Matter" */}
                <header className="premium-header-light" style={{ minHeight: '100vh', paddingTop: '80px' }}>
                    <div className="header-soft-bg"></div>
                    
                    <div className="about-story-card">
                        <div className="card-glass-layer"></div>

                        <div className="story-content">
                            <div className="story-badge">
                                <span className="badge-dot"></span>
                                <i className="fas fa-graduation-cap"></i>
                                <span>Featured Product</span>
                            </div>

                            <h1 className="story-headline">
                                Smart Institute <span className="gradient-accent">Management Software</span>
                            </h1>

                            <p className="story-description">
                                Complete digital transformation for educational institutions. 
                                Designed specifically for Indian schools, colleges, and coaching centers 
                                to streamline operations, enhance communication, and boost efficiency.
                            </p>

                            <div className="story-highlights">
                                <div className="highlight-item">
                                    <div className="highlight-icon">
                                        <i className="fas fa-school"></i>
                                    </div>
                                    <div className="highlight-text">
                                        <strong>For All Institutes</strong>
                                        <span>Schools, Colleges & Coaching</span>
                                    </div>
                                </div>

                                <div className="highlight-item">
                                    <div className="highlight-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="highlight-text">
                                        <strong>Three Portals</strong>
                                        <span>Teacher, Parent & Institute</span>
                                    </div>
                                </div>

                                <div className="highlight-item">
                                    <div className="highlight-icon">
                                        <i className="fas fa-cloud"></i>
                                    </div>
                                    <div className="highlight-text">
                                        <strong>Cloud-Based</strong>
                                        <span>Access Anywhere, Anytime</span>
                                    </div>
                                </div>
                            </div>

                            <div className="story-actions">
                                <button 
                                    className="btn-primary-soft"
                                    onClick={() => {
                                        const text = `Hi Aadyaa Infotech, I'm interested in your Smart Institute Management Software. Please provide me with a demo and pricing details.`;
                                        window.location.href = `https://wa.me/916355893624?text=${encodeURIComponent(text)}`;
                                    }}
                                >
                                    <i className="fab fa-whatsapp"></i>
                                    <span>Request Demo</span>
                                </button>
                                <button 
                                    className="btn-outline-soft"
                                    onClick={() => window.location.hash = '#/'}
                                    style={{ cursor: 'pointer', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}
                                >
                                    <i className="fas fa-home"></i>
                                    <span>Back to Home</span>
                                </button>
                            </div>
                        </div>

                        <div className="story-visual">
                            <div className="visual-container">
                                <div className="visual-card visual-card-1">
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                                <div className="visual-card visual-card-2">
                                    <i className="fas fa-chalkboard-teacher"></i>
                                </div>
                                <div className="visual-card visual-card-3">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="visual-card visual-card-4">
                                    <i className="fas fa-chart-line"></i>
                                </div>

                                <div className="decor-circle decor-1"></div>
                                <div className="decor-circle decor-2"></div>
                                <div className="decor-circle decor-3"></div>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <section id="products" className="services">
                        <div className="container">
                            <h2 className="section-title">Smart Institute Management Software</h2>
                            <p className="section-subtitle">Complete ERP solution for educational institutions</p>

                            <div className="marquee-background">
                                <div className="marquee-inner">
                                    {[...Array(10)].map((_, i) => (
                                        <span key={i}>INSTITUTE MANAGEMENT • AADYAA INFOTECH • DIGITAL TRANSFORMATION • </span>
                                    ))}
                                </div>
                            </div>

                            <div className="services-grid">
                                <div className="service-card" onClick={() => setSelectedProduct(instituteManagementSoftware)} style={{ cursor: 'pointer' }}>
                                    <div className="icon-box">
                                        <i className={`fas ${instituteManagementSoftware.icon}`}></i>
                                    </div>
                                    <h3>{instituteManagementSoftware.title}</h3>
                                    <p>{instituteManagementSoftware.desc}</p>
                                    <ul className="service-features">
                                        {instituteManagementSoftware.features.map((feature, fIndex) => (
                                            <li key={fIndex}><i className="fas fa-check"></i> {feature}</li>
                                        ))}
                                    </ul>
                                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                                        <button className="btn-primary-soft" onClick={() => {
                                            const text = `Hi Aadyaa Infotech, I'm interested in your Smart Institute Management Software. Please provide me with a demo and pricing details.`;
                                            window.location.href = `https://wa.me/916355893624?text=${encodeURIComponent(text)}`;
                                        }}>
                                            Request Demo <i className="fab fa-whatsapp" style={{ marginLeft: '8px' }}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Portals Section */}
                            <div style={{ marginTop: '4rem' }}>
                                <h3 className="section-title">🔹 Three Powerful Portals</h3>
                                <div className="services-grid" style={{ marginTop: '2rem' }}>
                                    {instituteManagementSoftware.portals.map((portal, index) => (
                                        <div className="service-card" key={index} style={{ cursor: 'pointer' }}>
                                            <div className="icon-box" style={{ backgroundColor: portal.color }}>
                                                <i className={`fas ${portal.icon}`}></i>
                                            </div>
                                            <h3>{portal.name}</h3>
                                            <ul className="service-features">
                                                {portal.features.map((feature, fIndex) => (
                                                    <li key={fIndex}><i className="fas fa-check"></i> {feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features & Benefits Section */}
                            <div style={{ marginTop: '4rem' }}>
                                <div className="services-grid">
                                    <div className="service-card">
                                        <div className="icon-box">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h3>🔹 Key Features</h3>
                                        <ul className="service-features">
                                            {instituteManagementSoftware.keyFeatures.map((feature, index) => (
                                                <li key={index}><i className="fas fa-check"></i> {feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="service-card">
                                        <div className="icon-box">
                                            <i className="fas fa-trophy"></i>
                                        </div>
                                        <h3>🎯 Benefits</h3>
                                        <ul className="service-features">
                                            {instituteManagementSoftware.benefits.map((benefit, index) => (
                                                <li key={index}><i className="fas fa-check"></i> {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Specifications */}
                            <div style={{ marginTop: '4rem' }}>
                                <div className="service-card">
                                    <div className="icon-box">
                                        <i className="fas fa-cog"></i>
                                    </div>
                                    <h3>⚙️ Technical Specifications</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="fas fa-cloud" style={{ color: '#3b82f6' }}></i>
                                            <div>
                                                <strong>Platform:</strong> {instituteManagementSoftware.techSpecs.platform}
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="fas fa-mobile-alt" style={{ color: '#3b82f6' }}></i>
                                            <div>
                                                <strong>Access:</strong> {instituteManagementSoftware.techSpecs.access}
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="fas fa-shield-alt" style={{ color: '#3b82f6' }}></i>
                                            <div>
                                                <strong>Security:</strong> {instituteManagementSoftware.techSpecs.security}
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="fas fa-database" style={{ color: '#3b82f6' }}></i>
                                            <div>
                                                <strong>Backup:</strong> {instituteManagementSoftware.techSpecs.backup}
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="fas fa-headset" style={{ color: '#3b82f6' }}></i>
                                            <div>
                                                <strong>Support:</strong> {instituteManagementSoftware.techSpecs.support}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                                <div className="service-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                                    <div className="icon-box">
                                        <i className="fas fa-rocket"></i>
                                    </div>
                                    <h3>Ready to Transform Your Institute?</h3>
                                    <p>Join 500+ educational institutions already using our software</p>
                                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                        <button className="btn-primary-soft" onClick={() => {
                                            const text = `Hi Aadyaa Infotech, I'm interested in your Smart Institute Management Software. Please provide me with a demo and pricing details.`;
                                            window.location.href = `https://wa.me/916355893624?text=${encodeURIComponent(text)}`;
                                        }}>
                                            <i className="fab fa-whatsapp"></i>
                                            Request Demo
                                        </button>
                                        <button className="btn-outline-soft" onClick={() => {
                                            const text = `Hi Aadyaa Infotech, I need more information about your Institute Management Software for my educational institution.`;
                                            window.location.href = `https://wa.me/916355893624?text=${encodeURIComponent(text)}`;
                                        }}>
                                            <i className="fas fa-info-circle"></i>
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
                <FloatingButtons />
            </div>

            {selectedProduct && (
                <div className="service-modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="service-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="service-modal-close" onClick={() => setSelectedProduct(null)}>
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="modal-icon-box">
                            <i className={`fas ${selectedProduct.icon}`}></i>
                        </div>
                        <h3>{selectedProduct.title}</h3>
                        <p>{selectedProduct.desc}</p>
                        <ul className="modal-features">
                            {selectedProduct.features.map((feature, idx) => (
                                <li key={idx}><i className="fas fa-check"></i> {feature}</li>
                            ))}
                        </ul>
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <button className="btn-primary-soft" onClick={() => {
                                const text = `Thank you for contacting Aadyaa Infotech. We truly appreciate your message. Our team will review your inquiry and get back to you shortly.\n\nInquiry about: ${selectedProduct.title}`;
                                window.location.href = `https://wa.me/916355893624?text=${encodeURIComponent(text)}`;
                            }}>
                                Inquiry Now <i className="fab fa-whatsapp" style={{ marginLeft: '8px' }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductsPage;

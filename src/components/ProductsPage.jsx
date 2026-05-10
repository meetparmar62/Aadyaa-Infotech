import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

const ProductsPage = ({ onMenuToggle, isMenuOpen }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeSection, setActiveSection] = useState('products');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                
                {/* Professional Navigation Header */}
                <div style={{ 
                    position: 'fixed', 
                    top: '0', 
                    left: '0', 
                    right: '0', 
                    zIndex: '1000',
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    padding: '1rem 2rem',
                    borderBottom: '1px solid rgba(99, 102, 241, 0.15)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        maxWidth: '1600px',
                        margin: '0 auto',
                        position: 'relative'
                    }}>
                        {/* Professional Logo Section */}
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '1.25rem',
                            flex: '1'
                        }}>
                            <div style={{ 
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.15))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(99, 102, 241, 0.25)',
                                    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.15)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
                                        animation: 'gradientShift 3s ease-in-out infinite'
                                    }}></div>
                                    <img src="/logo.png" alt="Aadyaa Infotech Logo" style={{ 
                                        height: '32px',
                                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                                    }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ 
                                        fontWeight: '800', 
                                        fontSize: '1.4rem',
                                        lineHeight: '1.2',
                                        background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #ec4899)', 
                                        WebkitBackgroundClip: 'text', 
                                        WebkitTextFillColor: 'transparent', 
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        letterSpacing: '0.5px'
                                    }}>
                                        Aadyaa
                                    </span>
                                    <span style={{ 
                                        color: '#e2e8f0', 
                                        fontSize: '1.2rem',
                                        fontWeight: '600',
                                        marginTop: '2px',
                                        letterSpacing: '0.25px'
                                    }}>
                                        Infotech
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Professional Desktop Navigation */}
                        <div className="desktop-nav" style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.75rem',
                            flex: '2',
                            justifyContent: 'center'
                        }}>
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
                                    background: activeSection === 'services' 
                                        ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(59, 130, 246, 0.25))' 
                                        : 'rgba(255, 255, 255, 0.05)',
                                    border: activeSection === 'services' 
                                        ? '1px solid rgba(99, 102, 241, 0.4)' 
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: activeSection === 'services' 
                                        ? '0 8px 32px rgba(99, 102, 241, 0.25)' 
                                        : '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    letterSpacing: '0.5px'
                                }}
                                onMouseOver={(e) => {
                                    if (activeSection !== 'services') {
                                        e.target.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.15))';
                                        e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.2)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (activeSection !== 'services') {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                                    }
                                }}
                            >
                                <span style={{ 
                                    position: 'relative', 
                                    zIndex: '2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ 
                                        stroke: activeSection === 'services' ? '#60a5fa' : '#94a3b8',
                                        strokeWidth: '2',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="9" y1="9" x2="15" y2="9"></line>
                                        <line x1="9" y1="15" x2="15" y2="15"></line>
                                    </svg>
                                    Services
                                </span>
                                {activeSection === 'services' && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '30px',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                                        borderRadius: '1px',
                                        animation: 'pulse 2s infinite'
                                    }}></div>
                                )}
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
                                    background: activeSection === 'products' 
                                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(37, 99, 235, 0.25))' 
                                        : 'rgba(255, 255, 255, 0.05)',
                                    border: activeSection === 'products' 
                                        ? '1px solid rgba(59, 130, 246, 0.4)' 
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: activeSection === 'products' 
                                        ? '0 8px 32px rgba(59, 130, 246, 0.25)' 
                                        : '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    letterSpacing: '0.5px'
                                }}
                                onMouseOver={(e) => {
                                    if (activeSection !== 'products') {
                                        e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15))';
                                        e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.2)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (activeSection !== 'products') {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                                    }
                                }}
                            >
                                <span style={{ 
                                    position: 'relative', 
                                    zIndex: '2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ 
                                        stroke: activeSection === 'products' ? '#3b82f6' : '#94a3b8',
                                        strokeWidth: '2',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                    </svg>
                                    Products
                                </span>
                                {activeSection === 'products' && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '30px',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                                        borderRadius: '1px',
                                        animation: 'pulse 2s infinite'
                                    }}></div>
                                )}
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
                                    background: activeSection === 'contact' 
                                        ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(219, 39, 119, 0.25))' 
                                        : 'rgba(255, 255, 255, 0.05)',
                                    border: activeSection === 'contact' 
                                        ? '1px solid rgba(236, 72, 153, 0.4)' 
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: activeSection === 'contact' 
                                        ? '0 8px 32px rgba(236, 72, 153, 0.25)' 
                                        : '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    letterSpacing: '0.5px'
                                }}
                                onMouseOver={(e) => {
                                    if (activeSection !== 'contact') {
                                        e.target.style.background = 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.15))';
                                        e.target.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(236, 72, 153, 0.2)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (activeSection !== 'contact') {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                                    }
                                }}
                            >
                                <span style={{ 
                                    position: 'relative', 
                                    zIndex: '2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ 
                                        stroke: activeSection === 'contact' ? '#ec4899' : '#94a3b8',
                                        strokeWidth: '2',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    Contact
                                </span>
                                {activeSection === 'contact' && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '30px',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #ec4899, #db2777)',
                                        borderRadius: '1px',
                                        animation: 'pulse 2s infinite'
                                    }}></div>
                                )}
                            </button>
                        </div>

                        {/* Professional Mobile Menu Button */}
                        <button 
                            onClick={() => {
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                            }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.15))',
                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                color: '#ffffff',
                                padding: '0.875rem',
                                borderRadius: '14px',
                                cursor: 'pointer',
                                display: 'none',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.15)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                position: 'relative',
                                overflow: 'hidden',
                                width: '48px',
                                height: '48px'
                            }}
                            id="mobile-menu-btn"
                            onMouseOver={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(59, 130, 246, 0.25))';
                                e.target.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.25)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.15))';
                                e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                e.target.style.transform = 'scale(1)';
                                e.target.style.boxShadow = '0 8px 32px rgba(99, 102, 241, 0.15)';
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ 
                                stroke: '#ffffff',
                                strokeWidth: '2',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round'
                            }}>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                right: '0',
                                height: '2px',
                                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
                                animation: 'gradientShift 3s ease-in-out infinite'
                            }}></div>
                        </button>
                    </div>

                    {/* Enhanced Mobile Menu with Unique Features */}
                    <div 
                        id="mobile-menu"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            right: '0',
                            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
                            backdropFilter: 'blur(25px) saturate(180%)',
                            padding: '1.5rem',
                            borderRadius: '0 0 24px 24px',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.2)',
                            display: isMobileMenuOpen ? 'flex' : 'none',
                            flexDirection: 'column',
                            gap: '1rem',
                            minWidth: '100%',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        {/* Animated Background Effect */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            height: '2px',
                            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                            backgroundSize: '200% 100%',
                            animation: 'gradientShift 3s ease-in-out infinite'
                        }}></div>

                        {/* Menu Header */}
                        <div style={{
                            textAlign: 'center',
                            padding: '0.5rem 0 1rem 0',
                            borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
                            marginBottom: '0.5rem'
                        }}>
                            <h4 style={{
                                color: '#ffffff',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                margin: '0',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Navigation
                            </h4>
                        </div>

                        {/* Enhanced Menu Items */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
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
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`menu-item ${activeSection === 'services' ? 'active' : ''}`}
                                style={{
                                    background: activeSection === 'services' 
                                        ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(59, 130, 246, 0.3))' 
                                        : 'rgba(255, 255, 255, 0.05)',
                                    border: activeSection === 'services' 
                                        ? '1px solid rgba(99, 102, 241, 0.5)' 
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '16px',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    width: '100%',
                                    textAlign: 'left',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: activeSection === 'services' 
                                        ? '0 8px 32px rgba(99, 102, 241, 0.3)' 
                                        : '0 4px 16px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseOver={(e) => {
                                    if (activeSection !== 'services') {
                                        e.target.style.background = 'rgba(99, 102, 241, 0.2)';
                                        e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                        e.target.style.transform = 'translateX(8px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.2)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (activeSection !== 'services') {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.transform = 'translateX(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                                    }
                                }}
                            >
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    background: activeSection === 'services' 
                                        ? 'linear-gradient(135deg, #3b82f6, #2563eb)' 
                                        : 'rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ 
                                        stroke: activeSection === 'services' ? '#ffffff' : '#60a5fa',
                                        strokeWidth: '2',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="9" y1="9" x2="15" y2="9"></line>
                                        <line x1="9" y1="15" x2="15" y2="15"></line>
                                    </svg>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ 
                                        fontSize: '1rem', 
                                        fontWeight: '600',
                                        marginBottom: '0.25rem'
                                    }}>
                                        Services
                                    </div>
                                    <div style={{ 
                                        fontSize: '0.85rem', 
                                        opacity: 0.7,
                                        color: '#94a3b8'
                                    }}>
                                        Explore our solutions
                                    </div>
                                </div>
                                <i className="fas fa-chevron-right" style={{
                                    fontSize: '0.8rem',
                                    opacity: 0.5,
                                    transition: 'all 0.3s ease'
                                }}></i>
                                {activeSection === 'services' && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                                        animation: 'pulse 2s infinite'
                                    }}></div>
                                )}
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
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`menu-item ${activeSection === 'products' ? 'active' : ''}`}
                                style={{
                                    background: activeSection === 'products' 
                                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.3))' 
                                        : 'rgba(255, 255, 255, 0.05)',
                                    border: activeSection === 'products' 
                                        ? '1px solid rgba(59, 130, 246, 0.5)' 
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '16px',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    width: '100%',
                                    textAlign: 'left',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: activeSection === 'products' 
                                        ? '0 8px 32px rgba(59, 130, 246, 0.3)' 
                                        : '0 4px 16px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseOver={(e) => {
                                    if (activeSection !== 'products') {
                                        e.target.style.background = 'rgba(59, 130, 246, 0.2)';
                                        e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                                        e.target.style.transform = 'translateX(8px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.2)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (activeSection !== 'products') {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.transform = 'translateX(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                                    }
                                }}
                            >
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    background: activeSection === 'products' 
                                        ? 'linear-gradient(135deg, #3b82f6, #2563eb)' 
                                        : 'rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ 
                                        stroke: activeSection === 'products' ? '#ffffff' : '#3b82f6',
                                        strokeWidth: '2',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                    </svg>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ 
                                        fontSize: '1rem', 
                                        fontWeight: '600',
                                        marginBottom: '0.25rem'
                                    }}>
                                        Products
                                    </div>
                                    <div style={{ 
                                        fontSize: '0.85rem', 
                                        opacity: 0.7,
                                        color: '#94a3b8'
                                    }}>
                                        Institute Management
                                    </div>
                                </div>
                                <i className="fas fa-chevron-right" style={{
                                    fontSize: '0.8rem',
                                    opacity: 0.5,
                                    transition: 'all 0.3s ease'
                                }}></i>
                                {activeSection === 'products' && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                                        animation: 'pulse 2s infinite'
                                    }}></div>
                                )}
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
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`menu-item ${activeSection === 'contact' ? 'active' : ''}`}
                                style={{
                                    background: activeSection === 'contact' 
                                        ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(219, 39, 119, 0.3))' 
                                        : 'rgba(255, 255, 255, 0.05)',
                                    border: activeSection === 'contact' 
                                        ? '1px solid rgba(236, 72, 153, 0.5)' 
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '16px',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    width: '100%',
                                    textAlign: 'left',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: activeSection === 'contact' 
                                        ? '0 8px 32px rgba(236, 72, 153, 0.3)' 
                                        : '0 4px 16px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseOver={(e) => {
                                    if (activeSection !== 'contact') {
                                        e.target.style.background = 'rgba(236, 72, 153, 0.2)';
                                        e.target.style.borderColor = 'rgba(236, 72, 153, 0.4)';
                                        e.target.style.transform = 'translateX(8px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(236, 72, 153, 0.2)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (activeSection !== 'contact') {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.transform = 'translateX(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                                    }
                                }}
                            >
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    background: activeSection === 'contact' 
                                        ? 'linear-gradient(135deg, #ec4899, #db2777)' 
                                        : 'rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ 
                                        stroke: activeSection === 'contact' ? '#ffffff' : '#ec4899',
                                        strokeWidth: '2',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ 
                                        fontSize: '1rem', 
                                        fontWeight: '600',
                                        marginBottom: '0.25rem'
                                    }}>
                                        Contact
                                    </div>
                                    <div style={{ 
                                        fontSize: '0.85rem', 
                                        opacity: 0.7,
                                        color: '#94a3b8'
                                    }}>
                                        Get in touch
                                    </div>
                                </div>
                                <i className="fas fa-chevron-right" style={{
                                    fontSize: '0.8rem',
                                    opacity: 0.5,
                                    transition: 'all 0.3s ease'
                                }}></i>
                                {activeSection === 'contact' && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #ec4899, #db2777)',
                                        animation: 'pulse 2s infinite'
                                    }}></div>
                                )}
                            </button>
                        </div>

                        {/* Footer Section */}
                        <div style={{
                            marginTop: '1rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid rgba(99, 102, 241, 0.2)',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '0.85rem',
                                color: '#94a3b8',
                                marginBottom: '0.5rem'
                            }}>
                                © 2024 Aadyaa Infotech
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '1rem'
                            }}>
                                <a href="https://www.facebook.com/share/1AhUFCfrv7/" target="_blank" rel="noopener noreferrer" style={{
                                    color: '#60a5fa',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/aadyaa-infotech" target="_blank" rel="noopener noreferrer" style={{
                                    color: '#60a5fa',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/aadyaainfotech" target="_blank" rel="noopener noreferrer" style={{
                                    color: '#60a5fa',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Enhanced Animations CSS */}
                <style>{`
                    @keyframes slideDown {
                        from {
                            opacity: 0;
                            transform: translateY(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    @keyframes shimmer {
                        0% {
                            transform: translateX(-100%) translateY(-50%);
                        }
                        50% {
                            transform: translateX(100%) translateY(-50%);
                        }
                        100% {
                            transform: translateX(-100%) translateY(-50%);
                        }
                    }
                    
                    @keyframes gradientShift {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                    
                    @keyframes pulse {
                        0%, 100% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0.5;
                        }
                    }
                    
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }
                    
                    @keyframes glow {
                        0%, 100% {
                            box-shadow: 0 0 5px rgba(99, 102, 241, 0.5);
                        }
                        50% {
                            box-shadow: 0 0 20px rgba(99, 102, 241, 0.8);
                        }
                    }
                    
                    @media (max-width: 768px) {
                        .desktop-nav {
                            display: none !important;
                        }
                        
                        #mobile-menu-btn {
                            display: flex !important;
                        }
                        
                        /* Mobile Header Optimizations */
                        header > div {
                            padding: 0.5rem 1rem !important;
                        }
                        
                        /* Mobile Logo Adjustments */
                        header .logo-container {
                            width: 40px !important;
                            height: 40px !important;
                        }
                        
                        header .logo-text {
                            font-size: 1rem !important;
                        }
                        
                        header .logo-subtext {
                            font-size: 0.9rem !important;
                        }
                        
                        /* Enhanced Mobile Menu */
                        #mobile-menu {
                            position: fixed !important;
                            top: 70px !important;
                            left: 0 !important;
                            right: 0 !important;
                            background: linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98)) !important;
                            backdropFilter: blur(25px) saturate(180%) !important;
                            padding: 1.5rem !important;
                            border-radius: 0 0 24px 24px !important;
                            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.2) !important;
                            flex-direction: column !important;
                            gap: 1rem !important;
                            min-width: 100% !important;
                            max-height: 70vh !important;
                            overflow-y: auto !important;
                            animation: slideDown 0.4s ease-out !important;
                        }
                        
                        #mobile-menu button {
                            background: rgba(255, 255, 255, 0.05) !important;
                            border: 1px solid rgba(255, 255, 255, 0.1) !important;
                            color: #ffffff !important;
                            padding: 1rem 1.5rem !important;
                            border-radius: 16px !important;
                            cursor: pointer !important;
                            font-size: 1rem !important;
                            font-weight: 500 !important;
                            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                            width: 100% !important;
                            text-align: left !important;
                            display: flex !important;
                            align-items: center !important;
                            gap: 1rem !important;
                            position: relative !important;
                            overflow: hidden !important;
                        }
                        
                        #mobile-menu button:hover {
                            background: rgba(99, 102, 241, 0.2) !important;
                            border-color: rgba(99, 102, 241, 0.4) !important;
                            transform: translateX(8px) !important;
                            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.2) !important;
                        }
                        
                        #mobile-menu button.active {
                            background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(59, 130, 246, 0.3)) !important;
                            border-color: rgba(99, 102, 241, 0.5) !important;
                            box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3) !important;
                            animation: glow 2s ease-in-out infinite !important;
                        }
                        
                        #mobile-menu button .icon-box {
                            width: 40px !important;
                            height: 40px !important;
                            border-radius: 12px !important;
                            background: rgba(255, 255, 255, 0.1) !important;
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            transition: all 0.3s ease !important;
                        }
                        
                        #mobile-menu button.active .icon-box {
                            background: linear-gradient(135deg, #3b82f6, #2563eb) !important;
                            animation: float 3s ease-in-out infinite !important;
                        }
                        
                        /* Enhanced Mobile Menu Button */
                        #mobile-menu-btn {
                            width: 45px !important;
                            height: 45px !important;
                            background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.2)) !important;
                            border: 1px solid rgba(99, 102, 241, 0.4) !important;
                            color: #ffffff !important;
                            padding: 0.75rem !important;
                            border-radius: 12px !important;
                            cursor: pointer !important;
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            font-size: 1.2rem !important;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                            position: relative !important;
                            overflow: hidden !important;
                            box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3) !important;
                        }
                        
                        #mobile-menu-btn:hover {
                            background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(59, 130, 246, 0.3)) !important;
                            border-color: rgba(99, 102, 241, 0.6) !important;
                            transform: scale(1.05) !important;
                            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4) !important;
                            animation: glow 2s ease-in-out infinite !important;
                        }
                        
                        /* Mobile Header Height */
                        header {
                            padding: 0.75rem 1rem !important;
                        }
                        
                        /* Mobile Logo Container */
                        header .logo-box {
                            width: 40px !important;
                            height: 40px !important;
                            border-radius: 10px !important;
                        }
                        
                        header .logo-box img {
                            height: 22px !important;
                        }
                        
                        /* Mobile Text Adjustments */
                        header .brand-name {
                            font-size: 1.1rem !important;
                        }
                        
                        header .brand-subname {
                            font-size: 0.95rem !important;
                        }
                        
                        /* Enhanced Menu Header */
                        #mobile-menu h4 {
                            animation: float 4s ease-in-out infinite !important;
                        }
                        
                        /* Social Links Animation */
                        #mobile-menu .social-links a {
                            transition: all 0.3s ease !important;
                        }
                        
                        #mobile-menu .social-links a:hover {
                            transform: translateY(-3px) !important;
                            color: #ffffff !important;
                            text-shadow: 0 0 10px currentColor !important;
                        }
                    }
                `}</style>
                
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

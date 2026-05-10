import React, { useEffect, useState } from 'react';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const instituteManagementSoftware = {
        title: "Smart Institute Management Software",
        subtitle: "Complete Solution for Schools, Colleges & Coaching Institutes",
        icon: "fa-graduation-cap",
        image: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Transform your educational institute with our comprehensive management software. Designed specifically for Indian schools, colleges, and coaching centers to streamline operations, enhance communication, and boost efficiency.",
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

    useEffect(() => {
        // Add entrance animations
        const cards = document.querySelectorAll('.product-card, .portal-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });

        // Parallax effect for hero section
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.products-hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="products" className="products">
            <div className="container">
                {/* Hero Section */}
                <div className="products-hero">
                    <div className="hero-badge">
                        <i className="fas fa-star"></i>
                        <span>Featured Product</span>
                    </div>
                    <h2 className="section-title">Smart Institute Management Software</h2>
                    <p className="section-subtitle">Complete digital transformation for educational institutions</p>
                </div>

                {/* Main Product Card */}
                <div className="main-product-card">
                    <div className="product-image-container">
                        <img 
                            src={instituteManagementSoftware.image} 
                            alt="Institute Management Software"
                            className="product-hero-image"
                        />
                        <div className="image-overlay">
                            <div className="overlay-content">
                                <i className={`fas ${instituteManagementSoftware.icon}`}></i>
                                <span>Leading ERP Solution</span>
                            </div>
                        </div>
                    </div>

                    <div className="product-content">
                        <div className="product-header">
                            <h3>{instituteManagementSoftware.title}</h3>
                            <p>{instituteManagementSoftware.subtitle}</p>
                        </div>

                        <div className="product-description">
                            <p>{instituteManagementSoftware.description}</p>
                        </div>

                        <div className="available-for">
                            <h4>✅ Available For:</h4>
                            <div className="available-grid">
                                {instituteManagementSoftware.availableFor.map((item, index) => (
                                    <div key={index} className="available-item">
                                        <i className="fas fa-check-circle"></i>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portals Section */}
                <div className="portals-section">
                    <h3 className="portals-title">🔹 Three Powerful Portals</h3>
                    <div className="portals-grid">
                        {instituteManagementSoftware.portals.map((portal, index) => (
                            <div 
                                key={index} 
                                className="portal-card"
                                style={{ borderLeft: `4px solid ${portal.color}` }}
                            >
                                <div className="portal-header">
                                    <div className="portal-icon" style={{ backgroundColor: portal.color }}>
                                        <i className={`fas ${portal.icon}`}></i>
                                    </div>
                                    <h4>{portal.name}</h4>
                                </div>
                                <ul className="portal-features">
                                    {portal.features.map((feature, fIndex) => (
                                        <li key={fIndex}>
                                            <i className="fas fa-check"></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features & Benefits */}
                <div className="features-benefits-section">
                    <div className="features-grid">
                        <div className="features-card">
                            <h4>🔹 Key Features</h4>
                            <ul className="features-list">
                                {instituteManagementSoftware.keyFeatures.map((feature, index) => (
                                    <li key={index}>
                                        <i className="fas fa-star"></i>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="benefits-card">
                            <h4>🎯 Benefits</h4>
                            <ul className="benefits-list">
                                {instituteManagementSoftware.benefits.map((benefit, index) => (
                                    <li key={index}>
                                        <i className="fas fa-trophy"></i>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Technical Specifications */}
                <div className="tech-specs-card">
                    <h4>⚙️ Technical Specifications</h4>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <i className="fas fa-cloud"></i>
                            <div>
                                <strong>Platform</strong>
                                <span>{instituteManagementSoftware.techSpecs.platform}</span>
                            </div>
                        </div>
                        <div className="spec-item">
                            <i className="fas fa-mobile-alt"></i>
                            <div>
                                <strong>Access</strong>
                                <span>{instituteManagementSoftware.techSpecs.access}</span>
                            </div>
                        </div>
                        <div className="spec-item">
                            <i className="fas fa-shield-alt"></i>
                            <div>
                                <strong>Security</strong>
                                <span>{instituteManagementSoftware.techSpecs.security}</span>
                            </div>
                        </div>
                        <div className="spec-item">
                            <i className="fas fa-database"></i>
                            <div>
                                <strong>Backup</strong>
                                <span>{instituteManagementSoftware.techSpecs.backup}</span>
                            </div>
                        </div>
                        <div className="spec-item">
                            <i className="fas fa-headset"></i>
                            <div>
                                <strong>Support</strong>
                                <span>{instituteManagementSoftware.techSpecs.support}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="product-cta">
                    <div className="cta-content">
                        <h3>Ready to Transform Your Institute?</h3>
                        <p>Join 500+ educational institutions already using our software</p>
                        <div className="cta-buttons">
                            <button 
                                className="btn-primary-soft"
                                onClick={() => {
                                    const text = `Hi Aadyaa Infotech, I'm interested in your Smart Institute Management Software. Please provide me with a demo and pricing details.`;
                                    window.location.href = `https://wa.me/916355893624?text=${encodeURIComponent(text)}`;
                                }}
                            >
                                <i className="fab fa-whatsapp"></i>
                                Request Demo
                            </button>
                            <button 
                                className="btn-outline-soft"
                                onClick={() => {
                                    const text = `Hi Aadyaa Infotech, I need more information about your Institute Management Software for my educational institution.`;
                                    window.location.href = `https://wa.me/916355893624?text=${encodeURIComponent(text)}`;
                                }}
                            >
                                <i className="fas fa-info-circle"></i>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;

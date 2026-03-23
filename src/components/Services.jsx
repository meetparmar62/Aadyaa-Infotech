import React, { useEffect, useState } from 'react';

const services = [
    {
        title: "Business Websites",
        icon: "fa-laptop-code",
        desc: "Your website is open 24/7 selling your services while you sleep. We build fast, SEO-ready sites that turn visitors into paying customers.",
        features: [
            "Custom UI/UX Premium Design",
            "Mobile-First Responsiveness",
            "Technical SEO Architecture",
            "Lightning Fast Page Loading",
            "SSL & Advanced Security Setup",
            "CMS Integration for Easy Updates"
        ]
    },
    {
        title: "Ecommerce Development",
        icon: "fa-shopping-cart",
        desc: "Launch your online store with a checkout experience that maximises order value and reduces cart abandonment.",
        features: [
            "Tailored Shopping Cart Experience",
            "Multi-Payment Gateway Integrations",
            "Advanced Inventory Management",
            "Real-time Order Tracking Dashboard",
            "Abandoned Cart Recovery Funnels",
            "High-Converting Checkout Process"
        ]
    },
    {
        title: "Mobile App Development",
        icon: "fa-mobile-alt",
        desc: "Put your business in your customers' pocket. We build native iOS and Android apps or cross-platform solutions that engage users.",
        features: [
            "Native iOS App Development",
            "Native Android App Development",
            "Cross-Platform React/Flutter Apps",
            "Interactive Push Notifications",
            "Smooth Offline Mode Capabilities",
            "Full App Store Publishing Support"
        ]
    },
    {
        title: "CMS Platforms",
        icon: "fa-edit",
        desc: "Take control of your content without needing a developer. We build WordPress, Sanity, or headless CMS solutions.",
        features: [
            "Modern Headless CMS Architecture",
            "Custom WordPress & Sanity Builds",
            "Intuitive Drag-and-Drop Builders",
            "Custom Data Types & Taxonomies",
            "Role-Based Team Access Control",
            "Seamless Third-Party API Sync"
        ]
    },
    {
        title: "High-Converting Pages",
        icon: "fa-rocket",
        desc: "Every paid ad click costs you money. We design landing pages engineered for maximum conversion so your campaigns actually profit.",
        features: [
            "A/B Split Testing Configurations",
            "Conversion Rate Optimization (CRO)",
            "Strategic Call-to-Action Placements",
            "User Heatmaps & Analytics Tracking",
            "Frictionless Lead Generation Forms",
            "Persuasive Sales Copywriting structure"
        ]
    },
    {
        title: "Custom Web Applications",
        icon: "fa-cogs",
        desc: "Replace manual processes with smart web applications that automate workflows, manage data, and create scalable efficiencies.",
        features: [
            "Scalable Custom Backend & Logic",
            "Relational Database Architecture",
            "Cloud Infrastructure (AWS/GCP)",
            "Fully Automated Workflows Setup",
            "Enterprise-Grade Data Security",
            "Legacy Platform Modernization"
        ]
    },
    {
        title: "AI Automation",
        icon: "fa-brain",
        desc: "Transform your business operations with intelligent AI solutions that automate tasks, reduce costs, and boost productivity.",
        features: [
            "Custom AI Chatbot Development",
            "Process Automation & Optimization",
            "Machine Learning Model Integration",
            "Natural Language Processing (NLP)",
            "Intelligent Data Analysis",
            "Workflow Automation Solutions"
        ]
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
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
    }, []);

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Our Professional Services</h2>
                <p className="section-subtitle">Complete digital solutions to grow your business online</p>

                <div className="marquee-background">
                    <div className="marquee-inner">
                        {[...Array(10)].map((_, i) => (
                            <span key={i}>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                        ))}
                    </div>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index} onClick={() => setSelectedService(service)} style={{ cursor: 'pointer' }}>
                            <div className="icon-box">
                                <i className={`fas ${service.icon}`}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <ul className="service-features">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex}><i className="fas fa-check"></i> {feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {selectedService && (
                <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
                    <div className="service-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="service-modal-close" onClick={() => setSelectedService(null)}>
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="modal-icon-box">
                            <i className={`fas ${selectedService.icon}`}></i>
                        </div>
                        <h3>{selectedService.title}</h3>
                        <p>{selectedService.desc}</p>
                        <ul className="modal-features">
                            {selectedService.features.map((feature, idx) => (
                                <li key={idx}><i className="fas fa-check"></i> {feature}</li>
                            ))}
                        </ul>
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <button className="btn-primary-soft" onClick={() => {
                                const text = `Thank you for contacting Aadyaa Infotech. We truly appreciate your message. Our team will review your inquiry and get back to you shortly.\n\nInquiry about: ${selectedService.title}`;
                                window.location.href = `https://wa.me/916355893624?text=${encodeURIComponent(text)}`;
                            }}>
                                Inquiry Now <i className="fab fa-whatsapp" style={{ marginLeft: '8px' }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;

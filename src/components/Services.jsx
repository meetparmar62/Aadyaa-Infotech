import React, { useEffect } from 'react';

const services = [
    {
        title: "Website Development",
        icon: "fa-laptop-code",
        desc: "Business, Hotel, E-commerce Websites - Custom built to match your brand",
        features: ["Responsive Design", "Fast Loading", "Modern UI/UX"]
    },
    {
        title: "Mobile App Development",
        icon: "fa-mobile-alt",
        desc: "Android & iOS apps that engage users and drive growth",
        features: ["Native & Hybrid Apps", "User-Friendly Interface", "Performance Optimized"]
    },
    {
        title: "SEO Optimization",
        icon: "fa-search-dollar",
        desc: "Rank higher on Google and attract more organic traffic",
        features: ["Keyword Research", "On-Page SEO", "Link Building"]
    },
    {
        title: "Social Media Marketing",
        icon: "fa-bullhorn",
        desc: "Build your brand presence across all social platforms",
        features: ["Content Creation", "Campaign Management", "Analytics & Reporting"]
    },
    {
        title: "Graphic Design",
        icon: "fa-palette",
        desc: "Stunning visuals for branding, posters, ads and more",
        features: ["Logo & Branding", "Marketing Materials", "Creative Designs"]
    },
    {
        title: "Digital Marketing",
        icon: "fa-chart-line",
        desc: "Comprehensive online marketing strategies for brand growth",
        features: ["Strategy Planning", "Campaign Execution", "ROI Tracking"]
    }
];

const Services = () => {
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
                        <div className="service-card" key={index}>
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
        </section>
    );
};

export default Services;

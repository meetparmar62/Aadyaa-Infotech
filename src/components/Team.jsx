import React, { useEffect } from 'react';

const teamStats = [
    { 
        value: "4+",
        label: "Years Experience",
        title: "Expert Developers", 
        subtitle: "Website & App Development",
        icon: "fa-code",
        gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        bgColor: "rgba(99, 102, 241, 0.1)"
    },
    { 
        value: "3+",
        label: "Years Experience",
        title: "Creative Designer", 
        subtitle: "UI/UX & Graphics Design",
        icon: "fa-palette",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
        bgColor: "rgba(139, 92, 246, 0.1)"
    },
    { 
        value: "3+",
        label: "Years Experience",
        title: "Business Strategy", 
        subtitle: "Growth & Strategic Planning",
        icon: "fa-chart-line",
        gradient: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
        bgColor: "rgba(236, 72, 153, 0.1)"
    }
];

const Team = () => {
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            const cards = document.querySelectorAll('.stat-card-inner');
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
        <section id="team" className="team-professional-section">
            <div className="container">
                <div className="team-header-wrapper">
                    <div className="team-badge">
                        <span className="badge-dot"></span>
                        <i className="fas fa-users"></i>
                        <span>Our Expert Team</span>
                    </div>
                    
                    <h2 className="section-title">
                        Years of <span className="gradient-accent">Excellence</span>
                    </h2>
                    <p className="section-subtitle">Delivering exceptional results through expertise and innovation</p>
                    <div className="title-line"></div>
                </div>

                <div className="marquee-background">
                    <div className="marquee-inner">
                        <span>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                        <span>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                        <span>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                        <span>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                    </div>
                </div>

                <div className="team-stats-grid">
                    {teamStats.map((stat, index) => (
                        <div className="team-stat-card" key={index}>
                            <div className="stat-card-inner">
                                <div className="icon-box" style={{ background: stat.gradient }}>
                                    <i className={`fas ${stat.icon}`}></i>
                                </div>
                                
                                <div className="experience-display">
                                    <span className="years-value">{stat.value}</span>
                                    <span className="years-label">{stat.label}</span>
                                </div>
                                
                                <div className="stat-content">
                                    <h3 className="stat-title">{stat.title}</h3>
                                    <p className="stat-subtitle">{stat.subtitle}</p>
                                </div>
                                
                                <div className="stat-decoration"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

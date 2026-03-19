import React, { useState, useEffect } from 'react';

const Header = ({ onMenuToggle }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="premium-header-light" id="premiumHeader">
            <div className="header-soft-bg"></div>
            <div className="header-blur-blob blob-1"></div>
            <div className="header-blur-blob blob-2"></div>
            <div className="header-blur-blob blob-3"></div>

            <div className={`floating-header-card ${scrolled ? 'scrolled' : ''}`}>
                <div className={`header-top-bar ${scrolled ? 'scrolled' : ''}`}>
                    <div className="brand-identity">
                        <div className="logo-mark">
                            <img src="/logo.png" alt="Aadyaa Infotech Logo" className="logo-image" />
                        </div>
                        <div className="brand-name">
                            <span className="gradient-text-light">Aadyaa</span> Infotech
                        </div>
                    </div>

                    <div className="header-actions">
                        <button className="minimal-menu-btn" id="menuToggle" onClick={onMenuToggle}>
                            <span className="menu-line line-1"></span>
                            <span className="menu-line line-2"></span>
                            <span className="menu-line line-3"></span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="about-story-card">
                <div className="card-glass-layer"></div>

                <div className="story-content">
                    <div className="story-badge">
                        <span className="badge-dot"></span>
                        <i className="fas fa-sparkles"></i>
                        <span>Creative Digital Solutions</span>
                    </div>

                    <h1 className="story-headline">
                        Building Digital <span className="gradient-accent">Experiences</span> That Matter
                    </h1>

                    <p className="story-description">
                        We're a passionate team of creators and technologists dedicated to crafting beautiful websites,
                        powerful mobile apps, and brands that stand out. Your growth is our story.
                    </p>

                    <div className="story-highlights">
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <div className="highlight-text">
                                <strong>Passion-Driven</strong>
                                <span>Every project matters</span>
                            </div>
                        </div>

                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <i className="fas fa-palette"></i>
                            </div>
                            <div className="highlight-text">
                                <strong>Creative First</strong>
                                <span>Design that inspires</span>
                            </div>
                        </div>

                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <div className="highlight-text">
                                <strong>Growth-Focused</strong>
                                <span>Results that scale</span>
                            </div>
                        </div>
                    </div>

                    <div className="story-actions">
                        <a href="#contact" className="btn-primary-soft">
                            <span>Start Your Project</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="#services" className="btn-outline-soft">
                            <span>Explore Work</span>
                        </a>
                    </div>
                </div>

                <div className="story-visual">
                    <div className="visual-container">
                        <div className="visual-card visual-card-1">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <div className="visual-card visual-card-2">
                            <i className="fas fa-mobile-screen"></i>
                        </div>
                        <div className="visual-card visual-card-3">
                            <i className="fas fa-paintbrush"></i>
                        </div>
                        <div className="visual-card visual-card-4">
                            <i className="fas fa-chart-pie"></i>
                        </div>

                        <div className="decor-circle decor-1"></div>
                        <div className="decor-circle decor-2"></div>
                        <div className="decor-circle decor-3"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

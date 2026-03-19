import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container footer-container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>Aadyaa Infotech</h3>
                            <p>
                                Your trusted partner for digital transformation and business growth.
                            </p>
                        </div>

                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li>Website Development</li>
                                <li>Mobile App Development</li>
                                <li>SEO & Digital Marketing</li>
                                <li>Graphic Design</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2026 Aadyaa Infotech. All Rights Reserved.</p>
                        <span>Designed by Aadyaa Infotech</span>
                    </div>
                </div>
            </footer>

            <button className="scroll-top" id="scrollTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    );
};

export default Footer;

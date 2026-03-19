import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, service, message } = formData;

        if (!name || !email || !phone || !service || !message) {
            alert('Please fill in all fields');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        const whatsappMessage = `*New Inquiry from Website*%0A%0A` +
            `*Name:* ${encodeURIComponent(name)}%0A` +
            `*Email:* ${encodeURIComponent(email)}%0A` +
            `*Phone:* ${encodeURIComponent(phone)}%0A` +
            `*Service:* ${encodeURIComponent(service)}%0A` +
            `*Message:* ${encodeURIComponent(message)}`;

        const whatsappURL = `https://wa.me/916355893624?text=${whatsappMessage}`;
        window.open(whatsappURL, '_blank');

        alert('Redirecting to WhatsApp...');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Ready to start your digital journey? Contact us today!</p>

                <div className="marquee-background">
                    <div className="marquee-inner">
                        {[...Array(10)].map((_, i) => (
                            <span key={i}>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                        ))}
                    </div>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <a href="https://wa.me/916355893624" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-phone-alt"></i>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <p>+91 63558 93624</p>
                                </div>
                            </a>
                        </div>

                        <div className="contact-item">
                            <a href="mailto:aadyaainfotech@gmail.com" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>aadyaainfotech@gmail.com</p>
                                </div>
                            </a>
                        </div>

                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Location</h4>
                                <p>Ahmedabad, Gujarat, India</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.facebook.com/share/1AhUFCfrv7/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/aadyaa-infotech" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/aadyaa_infotech" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/916355893624" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="name" required placeholder="Your Name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" required placeholder="Your Email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="tel" id="phone" required placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <select id="service" required value={formData.service} onChange={handleChange}>
                                    <option value="">Select Service</option>
                                    <option value="website">Website Development</option>
                                    <option value="mobile">Mobile App Development</option>
                                    <option value="seo">SEO Optimization</option>
                                    <option value="social">Social Media Marketing</option>
                                    <option value="graphic">Graphic Design</option>
                                    <option value="digital">Digital Marketing</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea id="message" rows="5" required placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

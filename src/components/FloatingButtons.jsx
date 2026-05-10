import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show buttons after a short delay for better UX
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleProductsClick = () => {
        window.location.hash = '#/products';
    };

    const handleWhatsAppClick = () => {
        const text = `Hi Aadyaa Infotech, I'm interested in your services. Please provide me with more information.`;
        window.location.href = `https://wa.me/916355893624?text=${encodeURIComponent(text)}`;
    };

    if (!isVisible) return null;

    return (
        <div className="floating-buttons">
            {/* Products Button */}
            <button 
                className="floating-btn products-btn"
                onClick={handleProductsClick}
                title="View Our Products"
            >
                <i className="fas fa-box"></i>
                <span className="btn-tooltip">Products</span>
            </button>

            {/* WhatsApp Button */}
            <button 
                className="floating-btn whatsapp-btn"
                onClick={handleWhatsAppClick}
                title="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
                <span className="btn-tooltip">WhatsApp</span>
            </button>
        </div>
    );
};

export default FloatingButtons;

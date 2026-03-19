import React, { useEffect, useRef, useState } from 'react';

const teamStats = [
    { value: "3+ Years", desc: "Experienced Website & App Developers", icon: "fa-code" },
    { value: "4+ Years", desc: "Experienced Graphic Designer", icon: "fa-paint-brush" },
    { value: "2+ Years", desc: "Business Strategy & Growth Experts", icon: "fa-briefcase" }
];

const Team = () => {
    const teamRef = useRef(null);
    const [counterObserved, setCounterObserved] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !counterObserved) {
                setCounterObserved(true);
                const counters = teamRef.current.querySelectorAll('.team-card h3');
                counters.forEach(counter => {
                    const targetText = counter.innerText;
                    const years = parseInt(targetText.replace(/\D/g, ''));
                    let count = 0;
                    const increment = years / 50;
                    const updateCounter = () => {
                        if (count < years) {
                            count += increment;
                            counter.innerText = `${Math.ceil(count)}+ Years`;
                            setTimeout(updateCounter, 40);
                        } else {
                            counter.innerText = targetText;
                        }
                    };
                    updateCounter();
                });
            }
        }, { threshold: 0.5 });

        if (teamRef.current) observer.observe(teamRef.current);
        return () => { if (teamRef.current) observer.disconnect(); };
    }, [counterObserved]);

    return (
        <section id="team" className="team" ref={teamRef}>
            <div className="container">
                <h2 className="section-title">Our Experienced Team</h2>
                <p className="section-subtitle">Skilled professionals dedicated to your success</p>

                <div className="marquee-background">
                    <div className="marquee-inner">
                        <span>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                        <span>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                        <span>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                        <span>SPECIAL OFFER • AADYAA INFOTECH • LIMITED PERIOD DEAL • </span>
                    </div>
                </div>

                <div className="team-grid">
                    {teamStats.map((stat, index) => (
                        <div className="team-card" key={index}>
                            <div className="team-icon">
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                            <h3>{stat.value}</h3>
                            <p>{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

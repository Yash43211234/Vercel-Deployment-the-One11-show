import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Updates.css'; // Import the new CSS file

const cardData = [
    {
        title: 'Battle of Bands',
        description: 'A thrilling face-off between top bands showcasing their musical synergy, energy, and performance skills.',
        link: '/Results/bands.jpg'
    },
    {
        title: 'Battle of Singer-Songwriters', // Changed title for consistency
        description: 'Original voices and lyrical stories come alive as singer-songwriters express their unique artistry.', // Expanded description
        link: '/Results/signer_songwriters.png'
    },
    {
        title: 'Battle of Musicians',
        description: 'An epic competition where instrumentalists and solo artists push musical boundaries to win.',
        link: '/Results/musicians.png'
    },
    {
        title: 'Battle of Rappers',
        description: 'A powerful showcase of lyrical prowess, flow, and storytelling from upcoming vocal powerhouses.', // More descriptive text
        link: '/Results/rappers.jpg'
    }
];

const Updates = () => {
    const [popupImage, setPopupImage] = useState(null);
    const navigate = useNavigate();

    const handleProceedClick = (category) => {
        const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
        const scrollTop = isMobile ? 700 : 100; // Scroll position for mobile/desktop

        // Scroll to top/appropriate position before navigating
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });

        // Navigate after a short delay to allow scroll animation to start
        setTimeout(() => {
            navigate('/payment-instructions', {
                state: { category: category }
            });
        }, 200);
    };

    return (
        <div>
            <h1 className="updates-heading">
                Shortlisted Candidates for Round 1A Are Out!
            </h1>

            <div className="updates-container">
                {cardData.map((card, index) => (
                    <div key={index} className="update-card">
                        <div className="card-content">
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-description">{card.description}</p>

                            <div className="card-buttons">
                                <button
                                    className="card-button view-button"
                                    onClick={() => setPopupImage(card.link)}
                                >
                                    View Results
                                </button>
                                <button
                                    className="card-button proceed-button"
                                    onClick={() => handleProceedClick(card.title)}
                                >
                                    Proceed to Next Round
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Popup */}
            {popupImage && (
                <div className="popup-overlay" onClick={() => setPopupImage(null)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-button" onClick={() => setPopupImage(null)}>×</button>
                        <a href={popupImage} download className="download-button">
                            ⬇ Download
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Updates;
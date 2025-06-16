import React from 'react';
import './InfoSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

function InfoSection() {
    const navigate = useNavigate();

    const handleShowUpdates = () => {
    navigate('/updates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


    return (
        <div className="info-section">
            <div className="info-card">
                <h2 onClick={handleShowUpdates} style={{ cursor: 'pointer' }}>Show Updates</h2>
                <p>
                    Stay tuned here for announcements, schedule changes, artist lineups, and exclusive updates from The One11 Show. We'll keep this space fresh with the latest happenings!
                </p>
            </div>

            <div className="info-card">
                <h2>Contact Us</h2>
                <p>
                    If you have questions or want to connect, feel free to message us on WhatsApp.
                </p>
                <br />
                <div className="social-links">
                    <a href="https://wa.me/917477785294" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/theone11.show?igsh=MTVvdTcwcTVvYnM2cw==" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61576672565861&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://x.com/theone11show" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
// No need to import './InfoSection.css' anymore, we'll use inline <style jsx>
// for a self-contained, crazy fantastic component.

function InfoSection() {
    const navigate = useNavigate();

    const handleShowUpdates = () => {
        navigate('/updates');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="info-section-crazy-fantastic">
            <div className="info-panel panel-updates">
                <div className="panel-header">
                    <h2 onClick={handleShowUpdates}>
                        <span className="header-icon">🚀</span> SYSTEM LOG: Updates
                    </h2>
                    <button className="view-all-btn" onClick={handleShowUpdates}>View All &gt;</button>
                </div>
                <div className="notice-board-display">
                    <h3 className="board-heading-crazy">
                        <span>| LATEST BROADCASTS</span>
                        <span className="scanline-indicator"></span>
                    </h3>

                    <div className="notice-entry" onClick={handleShowUpdates}>
                        <div className="notice-date-module">
                            <span className="day">17</span>
                            <span className="month">JUN</span>
                            <span className="year">2025</span>
                        </div>
                        <div className="notice-content-area">
                            <h4>Shortlisted Candidates for Round 1A Are Out!</h4>
                            <p>Dive into the details of the first selection phase. See if you made the cut for the next stage...</p>
                            <button className="action-button" onClick={handleShowUpdates}>ACCESS_FILE</button>
                        </div>
                    </div>
                    {/* You can add more notice entries here if needed, styled similarly */}
                    {/*
                    <div className="notice-entry" onClick={handleShowUpdates}>
                        <div className="notice-date-module">
                            <span className="day">10</span>
                            <span className="month">JUN</span>
                            <span className="year">2025</span>
                        </div>
                        <div className="notice-content-area">
                            <h4>Phase Two Project Submission Guidelines Released!</h4>
                            <p>New criteria and submission portal now active. Prepare your next groundbreaking works.</p>
                            <button className="action-button" onClick={handleShowUpdates}>ACCESS_FILE</button>
                        </div>
                    </div>
                    */}
                </div>
            </div>

            <div className="info-panel panel-contact">
                <div className="panel-header">
                    <h2 className="static-heading">
                        <span className="header-icon">📡</span> INTERFACE: Connect
                    </h2>
                </div>
                <div className="contact-info-block">
                    <p>
                        Should you require a direct data link or wish to establish communication, transmit your queries via encrypted channels. Our support nodes are active.
                    </p>
                    <div className="social-grid">
                        <a href="https://wa.me/917477785294" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            <span className="icon-label">WHATSAPP</span>
                        </a>
                        <a href="https://www.instagram.com/theone11.show?igsh=MTVvdTcwcTVvYnM2cw==" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                            <span className="icon-label">INSTAGRAM</span>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61576672565861&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                            <span className="icon-label">FACEBOOK</span>
                        </a>
                        <a href="https://x.com/theone11show" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <FontAwesomeIcon icon={faXTwitter} size="2x" />
                            <span className="icon-label">X-TWITTER</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Injected CSS for the Crazy Fantastic Design */}
            <style jsx>{`
                /* --- CSS Variables for consistency and easy tweaks --- */
                :root {
                    --dystopian-bg-color: #0a0110;
                    --panel-bg: rgba(15, 1, 20, 0.7); /* Slightly transparent dark purple */
                    --border-color-light: #33aaff;
                    --border-color-dark: #0088cc;
                    --text-color-primary: #e0e0e0;
                    --text-color-secondary: #aaaaaa;
                    --accent-red: #ff3366;
                    --accent-green: #39ff14;
                    --accent-blue: #00e5ff;
                    --glow-effect-1: 0 0 10px var(--accent-blue), 0 0 20px rgba(0, 229, 255, 0.5);
                    --glow-effect-2: 0 0 8px var(--accent-green), 0 0 15px rgba(57, 255, 20, 0.6);
                    --transition-fast: 0.2s ease-out;
                    --transition-medium: 0.4s ease-in-out;
                    --main-font: 'Orbitron', sans-serif;
                    --alt-font: 'Press Start 2P', monospace;
                }

                /* Ensure fonts are loaded (e.g., in your public/index.html or _app.js) */
                /* @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Press+Start+2P&display=swap'); */

                .info-section-crazy-fantastic {
                    background: linear-gradient(145deg, var(--dystopian-bg-color), #000000);
                    padding: 4rem 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 3.5rem; /* Increased gap */
                    font-family: var(--main-font);
                    color: var(--text-color-primary);
                    position: relative;
                    overflow: hidden; /* Important for background effects */
                    border-top: 1px dashed rgba(255,255,255,0.1);
                    border-bottom: 1px dashed rgba(255,255,255,0.1);
                }
                .info-section-crazy-fantastic::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: radial-gradient(circle at center, rgba(0,255,255,0.05) 0%, transparent 70%);
                    animation: section-pulse 8s infinite alternate ease-in-out;
                    pointer-events: none;
                    z-index: 0;
                }

                /* --- Individual Info Panels --- */
                .info-panel {
                    background: var(--panel-bg);
                    border: 1px solid var(--border-color-light);
                    border-radius: 0.75rem; /* Slightly less rounded for techy feel */
                    box-shadow: var(--glow-effect-1);
                    padding: 2.5rem; /* More generous padding */
                    transition: all var(--transition-medium);
                    position: relative;
                    overflow: hidden;
                    z-index: 1; /* Above background effects */
                }

                .info-panel::before {
                    content: '';
                    position: absolute;
                    top: -2px; left: -2px; right: -2px; bottom: -2px;
                    background: linear-gradient(45deg, var(--accent-blue), var(--accent-red), var(--accent-green));
                    z-index: -1;
                    filter: blur(10px);
                    opacity: 0;
                    transition: opacity var(--transition-medium);
                }

                .info-panel:hover {
                    transform: translateY(-8px) scale(1.01);
                    box-shadow: var(--glow-effect-2); /* Different glow on hover */
                    border-color: var(--border-color-dark);
                }
                .info-panel:hover::before {
                    opacity: 0.6; /* Inner glow on hover */
                }


                /* --- Panel Headers --- */
                .panel-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    border-bottom: 1px dashed rgba(255,255,255,0.2);
                    padding-bottom: 1rem;
                }

                .info-panel h2 {
                    color: var(--accent-blue);
                    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    text-shadow: var(--glow-effect-1);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
                .info-panel h2:hover {
                    color: var(--accent-green);
                    text-shadow: var(--glow-effect-2);
                }

                .header-icon {
                    margin-right: 10px;
                    font-size: 1.2em;
                    animation: icon-pulse 2s infinite alternate;
                }

                .static-heading {
                    cursor: default; /* No pointer on non-navigable heading */
                }


                /* --- View All Button --- */
                .view-all-btn {
                    background: none;
                    border: 1px solid var(--accent-red);
                    color: var(--accent-red);
                    padding: 0.6rem 1.2rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all var(--transition-fast);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 0 5px rgba(255, 51, 102, 0.5);
                }
                .view-all-btn:hover {
                    background-color: var(--accent-red);
                    color: var(--text-color-primary);
                    box-shadow: 0 0 15px var(--accent-red);
                    transform: scale(1.05);
                }

                /* --- Notice Board Display (Updates Panel Specific) --- */
                .notice-board-display {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .board-heading-crazy {
                    font-family: var(--alt-font); /* Pixelated font for this heading */
                    font-size: clamp(1rem, 2.5vw, 1.3rem);
                    color: var(--accent-green);
                    margin-bottom: 1rem;
                    text-align: left;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid rgba(57, 255, 20, 0.3);
                    padding-bottom: 5px;
                    position: relative;
                }
                .board-heading-crazy span {
                    margin-right: 5px;
                    text-shadow: var(--glow-effect-2);
                }
                .scanline-indicator {
                    position: absolute;
                    bottom: -1px; /* Aligns with border */
                    left: 0;
                    width: 30px; /* Short line */
                    height: 2px;
                    background-color: var(--accent-green);
                    animation: scanline-move 2s infinite linear alternate;
                }


                .notice-entry {
                    display: flex;
                    align-items: flex-start;
                    background: rgba(0, 0, 0, 0.3); /* Darker background for entries */
                    border: 1px solid rgba(0, 229, 255, 0.2);
                    border-radius: 0.5rem;
                    padding: 1rem;
                    cursor: pointer;
                    transition: all var(--transition-fast);
                    box-shadow: 0 0 5px rgba(0, 229, 255, 0.2);
                }
                .notice-entry:hover {
                    background: rgba(0, 0, 0, 0.5);
                    border-color: var(--accent-blue);
                    box-shadow: var(--glow-effect-1);
                    transform: translateX(5px); /* Slide right on hover */
                }

                .notice-date-module {
                    background: var(--accent-red);
                    color: var(--text-color-primary);
                    padding: 0.8rem;
                    border-radius: 0.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: var(--alt-font);
                    font-size: 0.8rem;
                    line-height: 1;
                    box-shadow: 0 0 10px var(--accent-red);
                    margin-right: 1rem;
                    min-width: 70px; /* Fixed width for dates */
                }
                .notice-date-module .day {
                    font-size: 1.8rem;
                    font-weight: 700;
                    text-shadow: 0 0 5px rgba(0,0,0,0.5);
                }
                .notice-date-module .month {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                }
                .notice-date-module .year {
                    font-size: 0.7rem;
                    opacity: 0.8;
                }

                .notice-content-area {
                    flex-grow: 1;
                    text-align: left;
                }
                .notice-content-area h4 {
                    color: var(--accent-blue);
                    font-size: clamp(1.1rem, 2vw, 1.3rem);
                    margin-bottom: 0.5rem;
                    line-height: 1.3;
                }
                .notice-content-area p {
                    color: var(--text-color-secondary);
                    font-size: 0.9rem;
                    line-height: 1.5;
                    margin-bottom: 0.8rem;
                    opacity: 0.9;
                }

                .action-button {
                    background: var(--accent-green);
                    border: none;
                    color: var(--dystopian-bg-color);
                    padding: 0.5rem 1rem;
                    border-radius: 3px;
                    font-family: var(--alt-font);
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all var(--transition-fast);
                    text-transform: uppercase;
                    box-shadow: var(--glow-effect-2);
                }
                .action-button:hover {
                    background-color: var(--accent-blue);
                    color: var(--text-color-primary);
                    box-shadow: var(--glow-effect-1);
                    transform: scale(1.02);
                }

                /* --- Contact Info Block (Contact Panel Specific) --- */
                .contact-info-block p {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--text-color-secondary);
                    margin-bottom: 2rem;
                }

                .social-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 1.5rem;
                    margin-top: 1rem;
                }

                .social-icon-link {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    color: var(--accent-blue);
                    font-size: 1.2rem;
                    transition: all var(--transition-fast);
                    padding: 1rem;
                    border: 1px solid rgba(0, 229, 255, 0.2);
                    border-radius: 0.5rem;
                    background: rgba(0, 0, 0, 0.2);
                    box-shadow: 0 0 5px rgba(0, 229, 255, 0.2);
                    position: relative;
                    overflow: hidden;
                }
                .social-icon-link:hover {
                    color: var(--accent-green);
                    border-color: var(--accent-green);
                    box-shadow: var(--glow-effect-2);
                    background: rgba(0, 0, 0, 0.4);
                    transform: translateY(-3px) scale(1.05);
                }
                .social-icon-link svg {
                    font-size: 2.5rem; /* Larger icons */
                    margin-bottom: 0.5rem;
                    filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.5));
                    transition: filter var(--transition-fast);
                }
                .social-icon-link:hover svg {
                    filter: drop-shadow(0 0 15px var(--accent-green));
                }
                .icon-label {
                    font-family: var(--alt-font);
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: var(--text-color-secondary);
                    transition: color var(--transition-fast);
                }
                .social-icon-link:hover .icon-label {
                    color: var(--accent-green);
                }

                /* Dynamic Grid Lines on Hover */
                .social-icon-link::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(
                        45deg,
                        transparent 49%,
                        var(--accent-green) 50%,
                        transparent 51%
                    ),
                    linear-gradient(
                        -45deg,
                        transparent 49%,
                        var(--accent-green) 50%,
                        transparent 51%
                    );
                    background-size: 200% 200%;
                    background-position: center center;
                    opacity: 0;
                    transition: opacity var(--transition-fast);
                    pointer-events: none;
                    z-index: 1; /* Above icon/label, below panel content */
                }
                .social-icon-link:hover::before {
                    opacity: 0.5; /* Show dynamic lines on hover */
                    animation: social-grid-pulse 1s infinite alternate;
                }


                /* --- Keyframe Animations --- */

                @keyframes section-pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.01); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }

                @keyframes icon-pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }

                @keyframes scanline-move {
                    0% { transform: translateX(0); width: 30px; }
                    50% { transform: translateX(calc(100% - 30px)); width: 50px; }
                    100% { transform: translateX(0); width: 30px; }
                }

                @keyframes social-grid-pulse {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 100% 100%; }
                }


                /* --- Responsive Layout --- */
                @media (min-width: 1024px) {
                    .info-section-crazy-fantastic {
                        flex-direction: row;
                        justify-content: center; /* Center content */
                        padding: 6rem 8rem; /* More generous side padding */
                        gap: 4rem; /* More space between panels */
                    }

                    .info-panel {
                        width: 48%; /* Adjust width to fit two columns */
                        max-width: 580px; /* Max width for consistency */
                        min-height: 450px; /* Ensure panels are roughly same height */
                    }
                    .info-panel.panel-updates {
                        margin-top: -30px; /* Slight vertical offset for dynamic feel */
                    }
                    .info-panel.panel-contact {
                        margin-top: 30px; /* Slight vertical offset */
                    }
                }

                @media (min-width: 1400px) {
                    .info-section-crazy-fantastic {
                        padding: 8rem 12rem;
                    }
                }

                @media (max-width: 768px) {
                    .info-section-crazy-fantastic {
                        padding: 3rem 1rem;
                        gap: 2.5rem;
                    }
                    .info-panel {
                        padding: 2rem;
                    }
                    .panel-header {
                        flex-direction: column;
                        align-items: flex-start;
                        margin-bottom: 1.5rem;
                    }
                    .info-panel h2 {
                        font-size: clamp(1.4rem, 4vw, 1.8rem);
                        margin-bottom: 1rem;
                    }
                    .view-all-btn {
                        align-self: flex-end; /* Push button to bottom right */
                        margin-top: -30px; /* Overlap with header for a tighter look */
                    }
                    .notice-entry {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                    .notice-date-module {
                        margin-right: 0;
                        margin-bottom: 1rem;
                    }
                    .social-grid {
                        grid-template-columns: 1fr 1fr; /* Two columns on smaller screens */
                        gap: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .info-section-crazy-fantastic {
                        padding: 2rem 0.8rem;
                        gap: 2rem;
                    }
                    .info-panel {
                        padding: 1.5rem;
                    }
                    .info-panel h2 {
                        font-size: clamp(1.2rem, 5vw, 1.6rem);
                    }
                    .board-heading-crazy {
                        font-size: clamp(0.9rem, 3vw, 1.1rem);
                    }
                    .notice-content-area h4 {
                        font-size: clamp(1rem, 3.5vw, 1.2rem);
                    }
                    .notice-content-area p {
                        font-size: 0.85rem;
                    }
                    .action-button {
                        font-size: 0.75rem;
                        padding: 0.4rem 0.8rem;
                    }
                    .social-grid {
                        grid-template-columns: 1fr; /* Single column on very small screens */
                    }
                    .social-icon-link svg {
                        font-size: 2rem;
                    }
                    .icon-label {
                        font-size: 0.7rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default InfoSection;
import React, { useState } from 'react';

const cardData = [
  {
  title: 'Battle of Bands',
  description: 'A thrilling face-off between top bands showcasing their musical synergy, energy, and performance skills.',
  image: '/gallery1.jpg',
  link: '/Results/bands.png'
},
{
  title: 'Battle of Singers Song writers',
  description: 'Original voices and lyrical stories come alive as singer-songwriters compete with passion and creativity.',
  image: '/gallery6.jpg',
  link: '/Results/musicians.png'
},
{
  title: 'Battle of Musicians',
  description: 'An epic competition where instrumentalists and solo artists push musical boundaries to win the crown.',
  image: '/gallery2.jpg',
  link: '/Results/rappers.png'
},
{
  title: 'Battle of Rappers',
  description: 'A soulful showcase of vocal talent, range, control, and expression from upcoming vocal powerhouses.',
  image: '/gallery5.jpg',
  link: '/Results/singer_songwriters.png'
}

];

const Updates = () => {
  const [popupImage, setPopupImage] = useState(null);

  return (
    <div>
      <div style={styles.container}>
        {cardData.map((card, index) => (
          <div key={index} style={styles.card}>
            <img src={card.image} alt={card.title} style={styles.image} />
            <div style={styles.content}>
              <h2 style={styles.title}>{card.title}</h2>
              <p style={styles.description}>{card.description}</p>
              <button
                style={styles.button}
                onClick={() => setPopupImage(card.link)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {/* Modal Popup */}
{popupImage && (
  <div style={styles.popupOverlay} onClick={() => setPopupImage(null)}>
    <div style={styles.popupContent} onClick={(e) => e.stopPropagation()}>
      <img src={popupImage} alt="Popup" style={styles.popupImage} />
      <button style={styles.closeButton} onClick={() => setPopupImage(null)}>×</button>

      {/* Download Button */}
      <a
        href={popupImage}
        download
        style={styles.downloadButton}
      >
        ⬇ Download
      </a>
    </div>
  </div>
)}

    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '40px',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '340px',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',

    
    transition: 'transform 0.3s ease',
  },
  image: {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  backgroundColor: '#fff', // optional, helps avoid transparency issues
},

  content: {
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 10px',
    color: '#222',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 16px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popupContent: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '90%',
    maxHeight: '90%',
    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
  },
  popupImage: {
    maxWidth: '100%',
    maxHeight: '80vh',
    display: 'block',
    margin: '0 auto',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '24px',
    background: 'transparent',
    border: 'none',
    color: '#000',
    cursor: 'pointer',
  },
  downloadButton: {
  display: 'inline-block',
  marginTop: '20px',
  padding: '10px 16px',
  backgroundColor: '#28a745',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '6px',
  fontWeight: '600',
  textAlign: 'center',
}

};

export default Updates;

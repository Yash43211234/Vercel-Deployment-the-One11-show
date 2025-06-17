import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PaymentInstructions.css";
import gpayIcon from "../assets/gpay.png";
import phonepeIcon from "../assets/phonepe.png";
import paytmIcon from "../assets/paytm.webp";
import { QRCode } from "react-qrcode-logo";

const PaymentInstructions = () => {
  const location = useLocation();
  const passedCategory = location.state?.category || "Battle of Rappers";

  const [category] = useState(passedCategory);
  const [showQR, setShowQR] = useState(false);

  const categoryFees = {
    "Battle of Bands": 4999,
    "Battle of Rappers": 1199,
    "Battle of Singer-Songwriters": 1999,
    "Battle of Musicians": 1199,
  };

  const amount = categoryFees[category];
  const upiID = "7811092672-1@okbizaxis";
  const upiLink = `upi://pay?pa=${upiID}&pn=theOne11%20show&am=${amount}&cu=INR&tn=${encodeURIComponent(`${category} Registration`)}`;

  const copyUPI = () => {
    navigator.clipboard.writeText(upiID);
    alert("UPI ID copied to clipboard!");
  };

  const handleUPIClick = () => {
    if (window.innerWidth > 768) {
      setShowQR(true); // show popup on desktop
    } else {
      window.location.href = upiLink; // mobile - direct UPI call
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">THE ONE11 SHOW – NEXT ROUND REGISTRATION INSTRUCTIONS</h2>

      <div className="payment-section">
        <h3 className="section-heading green">CONGRATULATIONS! YOU’RE SELECTED FOR THE NEXT ROUND!</h3>
        <p>To confirm your entry, follow the steps below:</p>
      </div>

      <div className="payment-section">
        <h3 className="section-heading blue">STEP 1: PAY YOUR REGISTRATION FEE</h3>
        <ul>
          <li><strong>Selected Category:</strong> {category}</li>
          <li><strong>Amount:</strong> ₹{amount.toLocaleString()}</li>
          <li>
            <strong>UPI ID:</strong>{" "}
            <code onClick={copyUPI} className="upi-code">{upiID}</code>{" "}
            <button className="copy-button" onClick={copyUPI}>Copy</button>
          </li>
          <li><strong>Last Date to Pay:</strong> 19 June 2025 (by 11:59 PM)</li>
        </ul>

        <div className="upi-buttons">
          <h4>Pay Using:</h4>
          <div className="upi-apps">
            {[gpayIcon, phonepeIcon, paytmIcon].map((icon, index) => (
              <button className="upi-button" onClick={handleUPIClick} key={index}>
                <img src={icon} alt="UPI App" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="payment-section">
        <h3 className="section-heading blue">STEP 2: SEND US THE CONFIRMATION</h3>
        <pre className="payment-format">
<strong>Full Name:</strong> [Your Name]{"\n"}
<strong>Registration Code:</strong> ONE11-2025-042{"\n"}
<strong>Mobile Number:</strong> [Your Mobile]{"\n"}
<strong>Category:</strong> {category}{"\n"}
<strong>Transaction ID:</strong> [Your UPI/Transaction ID]{"\n"}
<strong>Screenshot:</strong> [Attach Image]
        </pre>

        <p>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/917277785294" target="_blank" rel="noopener noreferrer">
            +91-7277785294
          </a>
          <br />
          <strong>Instagram:</strong>{" "}
          <a href="https://www.instagram.com/theone11.show?igsh=MTVvdTcwcTVvYnM2cw%3D%3D" target="_blank" rel="noopener noreferrer">
            @theone11show
          </a>
        </p>
      </div>

      <div className="payment-section">
        <h3 className="section-heading red">⚠ IMPORTANT NOTES:</h3>
        <ul>
          <li>Payments are <strong>non-refundable</strong>.</li>
          <li><strong>Match your name and registration code</strong> with your previous entry.</li>
          <li>Wrong or missing details will <strong>not be accepted</strong>.</li>
          <li>Confirmation is <strong>only after manual verification</strong>.</li>
        </ul>
      </div>

      <div className="payment-section">
        <h3 className="section-heading purple">NEED HELP?</h3>
        <p>
          Call / WhatsApp: +91-7277785294<br />
          Email: <a href="mailto:one11show@gmail.com">one11show@gmail.com</a><br />
          Instagram: @theone11show
        </p>
      </div>

      {showQR && (
        <div className="qr-modal">
          <div className="qr-content">
            <h3>Scan to Pay</h3>
            <QRCode value={upiLink} size={180} />
            <p>{upiID}</p>
            <button className="copy-button" onClick={copyUPI}>Copy UPI ID</button>
            <button className="close-button" onClick={() => setShowQR(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentInstructions;

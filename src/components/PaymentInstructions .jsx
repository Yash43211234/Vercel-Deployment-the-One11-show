import React, { useState } from "react";
import "./PaymentInstructions.css";
import gpayIcon from "../assets/gpay.png";
import phonepeIcon from "../assets/phonepe.png";
import paytmIcon from "../assets/paytm.webp";

const PaymentInstructions = () => {
    const [category, setCategory] = useState("Battle of Rappers");

    const categoryFees = {
        "Battle of Bands": 4999,
        "Battle of Rappers": 1199,
        "Battle of Singer-Songwriters": 1999,
        "Battle of Musicians": 1199,
    };

    const amount = categoryFees[category];
    const upiLink = `upi://pay?pa=one11show@oksbi&pn=One11%20Show&am=${amount}&cu=INR&tn=${encodeURIComponent(
        category + " Registration"
    )}`;

    const copyUPI = () => {
        navigator.clipboard.writeText("one11show@oksbi");
        alert("UPI ID copied to clipboard!");
    };

    return (
        <div className="payment-container">
            <h2 className="payment-title">
                📄 THE ONE11 SHOW – NEXT ROUND REGISTRATION INSTRUCTIONS
            </h2>

            <div className="payment-section">
                <h3 className="section-heading green">✅ IF YOU’RE SELECTED FOR THE NEXT ROUND!</h3>
                <p>To confirm your entry, follow these 3 simple steps:</p>
            </div>

            <div className="payment-section">
                <h3 className="section-heading purple">🎵 Participation Fee by Category:</h3>
                <ul>
                    {Object.entries(categoryFees).map(([cat, fee]) => (
                        <li key={cat}>
                            <strong>{cat}</strong> – ₹{fee.toLocaleString()} per{" "}
                            {cat.includes("Band") ? "band" : "artist"}
                        </li>
                    ))}
                </ul>

                <label htmlFor="category-select"><strong>Select Your Category:</strong></label>
                <select id="category-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {Object.keys(categoryFees).map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className="payment-section">
                <h3 className="section-heading blue">💰 STEP 1: PAY YOUR REGISTRATION FEE</h3>
                <ul>
                    <li><strong>Selected Category:</strong> {category}</li>
                    <li><strong>Amount:</strong> ₹{amount.toLocaleString()}</li>
                    <li>
                        <strong>UPI ID:</strong>{" "}
                        <code onClick={copyUPI} className="upi-code">one11show@oksbi</code>{" "}
                        <button className="copy-button" onClick={copyUPI}>Copy</button>
                    </li>
                    <li><strong>Last Date to Pay:</strong> 20 June 2025 (by 11:59 PM)</li>
                </ul>

                <div className="upi-buttons">
                    <h4>Pay Using:</h4>
                    <div className="upi-apps">
                        <a href={upiLink} className="upi-button">
                            <img src={gpayIcon} alt="Google Pay" />
                        </a>
                        <a href={upiLink} className="upi-button">
                            <img src={phonepeIcon} alt="PhonePe" />
                        </a>
                        <a href={upiLink} className="upi-button">
                            <img src={paytmIcon} alt="Paytm" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="payment-section">
                <h3 className="section-heading blue">📸 STEP 2: TAKE A SCREENSHOT</h3>
                <p>Take a <strong>clear screenshot</strong> of your payment confirmation.</p>
                <p>Note the <strong>Transaction ID / UPI Reference Number</strong>.</p>
            </div>

            <div className="payment-section">
                <h3 className="section-heading blue">📩 STEP 3: SEND US THE CONFIRMATION</h3>
                <p>Send the screenshot + following details via <strong>WhatsApp or Instagram DM</strong>:</p>

                <pre className="payment-format">
Full Name: [Your Name]
Registration Code: ONE11-2025-042
Mobile Number: [Your Mobile]
Category: {category}
Transaction ID: [Your UPI/Transaction ID]
Screenshot: [Attach Image]
                </pre>

                <p>
                    📲 <strong>WhatsApp:</strong> +91-XXXXXXXXXX<br />
                    📸 <strong>Instagram:</strong> @theone11show
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
                <h3 className="section-heading purple">🤝 NEED HELP?</h3>
                <p>
                    📞 Call / WhatsApp: +91-XXXXXXXXXX<br />
                    📧 Email: <a href="mailto:one11show@gmail.com">one11show@gmail.com</a><br />
                    📲 Instagram: @theone11show
                </p>
            </div>
        </div>
    );
};

export default PaymentInstructions;

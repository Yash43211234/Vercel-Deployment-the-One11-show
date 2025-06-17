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
    const upiID = "one11show@oksbi";
    const upiLink = `upi://pay?pa=${upiID}&pn=One11%20Show&am=${amount}&cu=INR&tn=${encodeURIComponent(`${category} Registration`)}`;

    const copyUPI = async () => {
        try {
            await navigator.clipboard.writeText(upiID);
            // non-blocking UX
            const copiedAlert = document.createElement("div");
            copiedAlert.innerText = "UPI ID copied!";
            copiedAlert.className = "copy-toast";
            document.body.appendChild(copiedAlert);
            setTimeout(() => document.body.removeChild(copiedAlert), 1500);
        } catch (err) {
            alert("Failed to copy UPI ID.");
        }
    };

    return (
        <div className="payment-container">
            <h2 className="payment-title">
                THE ONE11 SHOW – NEXT ROUND REGISTRATION INSTRUCTIONS
            </h2>

            <div className="payment-section">
                <h3 className="section-heading green">IF YOU’RE SELECTED FOR THE NEXT ROUND!</h3>
                <p>To confirm your entry, follow these 3 simple steps:</p>
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
                    <li><strong>Last Date to Pay:</strong> 20 June 2025 (by 11:59 PM)</li>
                </ul>

                <div className="upi-buttons">
                    <h4>Pay Using:</h4>
                    <div className="upi-apps">
                        <a href={upiLink} className="upi-button" target="_blank" rel="noopener noreferrer">
                            <img src={gpayIcon} alt="Google Pay" />
                        </a>
                        <a href={upiLink} className="upi-button" target="_blank" rel="noopener noreferrer">
                            <img src={phonepeIcon} alt="PhonePe" />
                        </a>
                        <a href={upiLink} className="upi-button" target="_blank" rel="noopener noreferrer">
                            <img src={paytmIcon} alt="Paytm" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="payment-section">
                <h3 className="section-heading blue">STEP 2: SEND US THE CONFIRMATION</h3>
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
                    <strong>WhatsApp:</strong> +91-7477785294<br />
                    <strong>Instagram:</strong> @theone11show
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
                    Call / WhatsApp: +91-7477785294<br />
                    Email: <a href="mailto:one11show@gmail.com">one11show@gmail.com</a><br />
                    Instagram: @theone11show
                </p>
            </div>
        </div>
    );
};

export default PaymentInstructions;

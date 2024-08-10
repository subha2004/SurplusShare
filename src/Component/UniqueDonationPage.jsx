import React from 'react';
import './UniqueDonationPage.css';

const UniqueDonationPage = () => {
    return (
        <div className="unique-donation-container">
            <div className="unique-info-section">
                <div className="unique-info-item">
                    <div className="unique-stars">★★★★★</div>
                    <p className="unique-info-text">FMSC consistently receives the highest awards for integrity and trustworthiness.</p>
                </div>
                <div className="unique-info-item">
                    <div className="unique-pie-chart">🍰</div>
                    <p className="unique-info-text">More than 90% of total donations are spent directly on meal production.</p>
                </div>
                <div className="unique-info-item">
                    <div className="unique-cost-circle">29¢</div>
                    <p className="unique-info-text">Each meal costs less than 30 cents.</p>
                </div>
            </div>
            <div className="unique-donation-section">
                <h2 className="unique-donation-title">Donate today</h2>
                <div className="unique-donation-options">
                    <div className="unique-donation-option">
                        <div className="unique-option-amount">$106</div>
                        <div className="unique-option-description">Feeds a child for a year</div>
                    </div>
                    <div className="unique-donation-option">
                        <div className="unique-option-amount">$424</div>
                        <div className="unique-option-description">Feeds a family for a year</div>
                    </div>
                    <div className="unique-donation-option">
                        <div className="unique-option-amount">2,255</div>
                        <div className="unique-option-description">Feeds a class for a year</div>
                    </div>
                    <div className="unique-donation-option">
                        <div className="unique-option-description">Other</div>
                    </div>
                </div>
                <div className="unique-donation-input">
                    <span className="unique-currency">$</span>
                    <input type="number" className="unique-input-field" value="106" />
                    <div className="unique-donation-frequency">
                        <label><input type="radio" name="frequency" checked /> Monthly</label>
                        <label><input type="radio" name="frequency" /> One time</label>
                    </div>
                </div>
                <button className="unique-donate-button">Give Now</button>
                <p className="unique-donate-instructions">Donate by credit card, bank account or digital wallet.</p>
            </div>
        </div>
    );
};

export default UniqueDonationPage;

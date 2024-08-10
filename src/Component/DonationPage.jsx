
import React, { useState } from 'react';
import './DonationPage.css';

const DonationPage = () => {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');

    const handleSelectAmount = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount(''); 
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null); 
    };

    return (
        <div className='foddbody'>
        <div className="pledge-container">
            <div className="button-row">
                <button 
                    className={`pledge-button ${selectedAmount === 750 ? 'selected' : ''}`} 
                    onClick={() => handleSelectAmount(750)}
                >
                    50 meals<br/>₹ 750
                </button>
                <button 
                    className={`pledge-button ${selectedAmount === 1500 ? 'selected' : ''}`} 
                    onClick={() => handleSelectAmount(1500)}
                >
                    100 meals<br/>₹ 1500
                </button>
            </div>
            <div className="button-row">
                <button 
                    className={`pledge-button ${selectedAmount === 3000 ? 'selected' : ''}`} 
                    onClick={() => handleSelectAmount(3000)}
                >
                    200 meals<br/>₹ 3000
                </button>
                <input 
                    type="digit" 
                    className="custom-amount-input" 
                    placeholder="INR" 
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                />
            </div>
            <p>“Your generosity has the power to transform lives. Donate today to support our mission and help provide nourishment and hope to those in need."</p>
            <button className="pledge-submit">Proceed</button>
        </div>
        </div>
    );
}




export default DonationPage;


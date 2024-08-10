
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h5>Surplus food to Need</h5>
                    <ul>
                        <li>Our Mission</li>
                        <li>Our Team</li>
                        <li>Impact Stories</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer-section get-involved">
                    <h5>Get Involved</h5>
                    <ul>
                        <li>Volunteer</li>
                        <li>Partner with Us</li>
                        <li>Donate</li>
                    </ul>
                </div>
                <div className="footer-section services">
                    <h5>Services</h5>
                    <ul>
                        <li>Food Collection</li>
                        <li>Delivery Service</li>
                        <li>Cooking Service</li>
                    </ul>
                </div>
                <div className="footer-section special-features">
                    <h5>Special Features</h5>
                    <ul>
                        <li>7 O'Clock Scheme</li>
                        <li>Feeding Program</li>
                        <li>Points and Rewards System</li>
                    </ul>
                </div>
                <div className="footer-section support">
                    <h5>Support</h5>
                    <ul>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="social-links">
                    <a href="#" className="facebook">Facebook</a>
                    <a href="#" className="twitter">Twitter</a>
                    <a href="#" className="instagram">Instagram</a>
                    <a href="#" className="linkedin">LinkedIn</a>
                </div>
                <div className="contact-info">
                    <p>Email: support@surplusShare.org</p>
                    <p>Phone: +980-456-7890</p>
                    <p>Address: 123 FoodBridge Lane, FoodCity, FC 12345</p>
                </div>
                <p>© 2024 SurplusShare. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;


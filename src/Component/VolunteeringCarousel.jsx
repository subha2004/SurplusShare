


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './VolunteeringCarousel.css';

const VolunteeringCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showPolicies, setShowPolicies] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const slides = [
        'https://media.istockphoto.com/id/485376132/photo/group-of-volunteers-provide-groceries-donations-to-needy-families-charity.jpg?s=612x612&w=0&k=20&c=mq9imrlhPOSTserWo3CRwJq9pY3LfbSghOLICgZySq0=',
        'https://static.independent.co.uk/2020/09/08/10/food%20bank%20.jpg',
        'https://media.istockphoto.com/id/472165353/photo/little-girl-holding-bowl-at-soup-kitchen-or-food-bank.jpg?s=612x612&w=0&k=20&c=_25T4X2NL96SQmkZemBPSPo0n5azVrWOARl4JxuxeuU=',
        'https://marvel-b1-cdn.bc0a.com/f00000000210829/www.lionsclubs.org/sites/default/files/styles/full_width_image/public/wordpress/2016/11/feeding-hungry.png?itok=Pch3c15a',
        'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/04/09/Pictures/_a330a856-7a3f-11ea-b578-8bb50559d90e.JPG'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [slides.length]);

    const togglePolicies = () => {
        setShowPolicies(!showPolicies);
        setShowFAQ(false); // Ensure only one modal is open at a time
    };

    const toggleFAQ = () => {
        setShowFAQ(!showFAQ);
        setShowPolicies(false); // Ensure only one modal is open at a time
    };

    const handleRegisterClick = () => {
        navigate('/volreg'); // Navigate to the Register page
    };

    return (
        <div className='vollbody'>
            <h2 className="vvcarousel-heading">Volunteering Highlights</h2>
            <div className="vvcarousel-container">
                <div className="vvcarousel-slide">
                    <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="vvcarousel-image" />
                    <div className="vvcarousel-arrow vvcarousel-prev" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>❮</div>
                    <div className="vvcarousel-arrow vvcarousel-next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>❯</div>
                    <button className="register-button" onClick={handleRegisterClick}>Register</button> {/* New Register Button */}
                </div>
            </div>
            <div className="carousel-buttons">
                <button className="policies-button" onClick={togglePolicies}>Volunteer Policies</button>
                <button className="faq-button" onClick={toggleFAQ}>Volunteer FAQ</button>
            </div>
            <div className="modal-wrapper">
                {showPolicies && (
                    <div className="modal-page">
                        <div className="modal-content">
                            <button className="cclose-modal" onClick={togglePolicies}>✖</button>
                            <h2>Volunteer Policies</h2>
                            <ul className="policies-list">
                                <li>
                                    <strong>Objective:</strong> Our mission is to bridge the gap between food surplus and need by collecting extra food from event organizers and individuals, and distributing it to those in need through NGOs or volunteers.
                                </li>
                                <li>
                                    <strong>Platform Services:</strong> Volunteers can choose to participate in delivery services or cooking, offering flexible ways to contribute to the cause.
                                </li>
                                <li>
                                    <strong>7 o'Clock Scheme:</strong> Every day at 7 PM, all registered needy individuals will receive food. This consistent schedule ensures that help reaches those who depend on it.
                                </li>
                                <li>
                                    <strong>Cost Management:</strong> The costs associated with the food distribution are covered by donations from individuals and organizations who support our mission.
                                </li>
                                <li>
                                    <strong>Volunteer Rewards:</strong> Volunteers and event organizers earn points based on their contributions, which can be redeemed for monetary rewards once a certain threshold is reached.
                                </li>
                                <li>
                                    <strong>Community Engagement:</strong> We encourage community involvement through various programs and initiatives, fostering a network of support and collaboration.
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                {showFAQ && (
                    <div className="modal-page">
                        <div className="modal-content">
                            <button className="cclose-modal" onClick={toggleFAQ}>✖</button>
                            <h2>Volunteer FAQ</h2>
                            <ul className="faq-list">
                                <li>
                                    <strong>How can I become a volunteer?</strong>
                                    <p>Register through our app or website and choose the service you want to participate in.</p>
                                </li>
                                <li>
                                    <strong>What services can I volunteer for?</strong>
                                    <p>Volunteers can participate in delivery or cooking services, based on their preferences and availability.</p>
                                </li>
                                <li>
                                    <strong>How does the points system work?</strong>
                                    <p>You earn points for every service you complete. Points can be redeemed for monetary rewards once you reach a certain threshold.</p>
                                </li>
                                <li>
                                    <strong>What is the 7 o'Clock Scheme?</strong>
                                    <p>A program where registered needy individuals receive food daily at 7 PM. This ensures consistent and timely food distribution.</p>
                                </li>
                                <li>
                                    <strong>How is the food cost managed?</strong>
                                    <p>Food costs are covered through donations, ensuring that our mission remains sustainable and impactful.</p>
                                </li>
                                <li>
                                    <strong>Can I contribute in other ways?</strong>
                                    <p>Yes! Besides volunteering, you can donate funds or spread the word to help us reach more people in need.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VolunteeringCarousel;

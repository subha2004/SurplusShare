
import React from 'react';
import { Link } from 'react-router-dom';
import IncreasingDonationsChart from './IncreasingDonationsChart';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <h2>Admin Dashboard</h2>
                <nav>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/manageorg`}>Manage Organization</Link></li>
                        <li><Link to={`/managevol`}>Manage Volunteer</Link></li>
                        <li><Link to={`/managedon`}>Manage Donor</Link></li>
                        <li><Link to={`/mfooddonate`}>Food Donation</Link></li>
                        <li><Link to={`/mgrocerydonate`}>Grocery Donation</Link></li>
                        <li><Link to={`/mclothdonate`}>Cloth Donation</Link></li>
                        
                    </ul>
                </nav>
            </div>
            <div className="dcontent">
                <div className="dcards">
                    <div className="dcard">
                        <h3>Donors</h3>
                        <p>440+</p>
                    </div>
                    <div className="dcard">
                        <h3>Organization</h3>
                        <p>250+</p>
                    </div>
                    <div className="dcard">
                        <h3>Volunteer</h3>
                        <p>260+</p>
                    </div>
                    <div className="dcard">
                        <h3>Food Donation</h3>
                        <p>550+</p>
                    </div>
                    <div className="dcard">
                        <h3>Grocery Donation</h3>
                        <p>650+</p>
                    </div>
                    <div className="dcard">
                        <h3>Cloth Donation</h3>
                        <p>350+</p>
                    </div>
                </div>
                <IncreasingDonationsChart />
            </div>
            
        </div>
    );
}

export default AdminDashboard;

import React, { useState } from 'react';
import './ManageVolunteer.css'; // Make sure to create this CSS file

// Sample data for volunteers
const initialVolunteers = [
  {
    id: 1,
    userName: 'Anand Kumar',
    state: 'Tamil Nadu',
    district: 'Chennai',
    city: 'Chennai',
    street: '12 Park Street',
    pincode: '600001',
    phoneNo: '044-12345678',
    email: 'anand.kumar@example.com',
    password: 'password1',
  },
  {
    id: 2,
    userName: 'Nisha Patel',
    state: 'Tamil Nadu',
    district: 'Chennai',
    city: 'Chennai',
    street: '34 Beach Road',
    pincode: '600002',
    phoneNo: '044-23456789',
    email: 'nisha.patel@example.com',
    password: 'password2',
  },
  {
    id: 3,
    userName: 'Rajesh Reddy',
    state: 'Tamil Nadu',
    district: 'Coimbatore',
    city: 'Coimbatore',
    street: '56 Industrial Area',
    pincode: '641001',
    phoneNo: '0422-3456789',
    email: 'rajesh.reddy@example.com',
    password: 'password3',
  },
  {
    id: 4,
    userName: 'Sangeetha Nair',
    state: 'Tamil Nadu',
    district: 'Coimbatore',
    city: 'Coimbatore',
    street: '78 Garden Street',
    pincode: '641002',
    phoneNo: '0422-4567890',
    email: 'sangeetha.nair@example.com',
    password: 'password4',
  },
  {
    id: 5,
    userName: 'Karthik Sharma',
    state: 'Tamil Nadu',
    district: 'Madurai',
    city: 'Madurai',
    street: '90 Main Road',
    pincode: '625001',
    phoneNo: '0452-5678901',
    email: 'karthik.sharma@example.com',
    password: 'password5',
  },
  {
    id: 6,
    userName: 'Divya Menon',
    state: 'Tamil Nadu',
    district: 'Madurai',
    city: 'Madurai',
    street: '23 South Street',
    pincode: '625002',
    phoneNo: '0452-6789012',
    email: 'divya.menon@example.com',
    password: 'password6',
  },
  {
    id: 7,
    userName: 'Vijay Kumar',
    state: 'Tamil Nadu',
    district: 'Tiruchirappalli',
    city: 'Tiruchirappalli',
    street: '45 Temple Street',
    pincode: '620001',
    phoneNo: '0431-7890123',
    email: 'vijay.kumar@example.com',
    password: 'password7',
  },
  {
    id: 8,
    userName: 'Pooja Rao',
    state: 'Tamil Nadu',
    district: 'Tiruchirappalli',
    city: 'Tiruchirappalli',
    street: '67 Market Lane',
    pincode: '620002',
    phoneNo: '0431-8901234',
    email: 'pooja.rao@example.com',
    password: 'password8',
  },
  {
    id: 9,
    userName: 'Harish Babu',
    state: 'Tamil Nadu',
    district: 'Salem',
    city: 'Salem',
    street: '89 New Colony',
    pincode: '636001',
    phoneNo: '0427-9012345',
    email: 'harish.babu@example.com',
    password: 'password9',
  },
  {
    id: 10,
    userName: 'Aarthi Vijay',
    state: 'Tamil Nadu',
    district: 'Salem',
    city: 'Salem',
    street: '12 Old Town',
    pincode: '636002',
    phoneNo: '0427-0123456',
    email: 'aarthi.vijay@example.com',
    password: 'password10',
  },
];

const ManageVolunteer = () => {
  const [volunteers, setVolunteers] = useState(initialVolunteers);

  const handleDelete = (id) => {
    setVolunteers((prevVolunteers) =>
      prevVolunteers.filter((vol) => vol.id !== id)
    );
  };

  return (
    <div className="manage-volunteer">
      <h1>Manage Volunteers</h1>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>State</th>
            <th>District</th>
            <th>City</th>
            <th>Street</th>
            <th>Pincode</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((vol) => (
            <tr key={vol.id}>
              <td>{vol.userName}</td>
              <td>{vol.state}</td>
              <td>{vol.district}</td>
              <td>{vol.city}</td>
              <td>{vol.street}</td>
              <td>{vol.pincode}</td>
              <td>{vol.phoneNo}</td>
              <td>{vol.email}</td>
              <td>{vol.password}</td>
              <td>
                <button onClick={() => handleDelete(vol.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="back-button-container">
        <a href="/admindashboard" className="back-button">
          Back to Dashboard
        </a>
      </div>
    </div>
  );
};

export default ManageVolunteer;

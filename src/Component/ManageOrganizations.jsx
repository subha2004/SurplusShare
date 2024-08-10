import React, { useState } from 'react';
import './ManageOrganizations.css';

const initialOrganizations = [
  {
    id: 1,
    organizationName: 'Tamil Nadu Red Cross',
    ownerName: 'Dr. Ravi Kumar',
    orgId: 'TN001',
    state: 'Tamil Nadu',
    district: 'Chennai',
    city: 'Chennai',
    street: '123 Red Cross Lane',
    pincode: '600001',
    phoneNo: '044-12345678',
    email: 'info@tnredcross.org',
    password: 'password1',
  },
  {
    id: 2,
    organizationName: 'Chennai Helping Hands',
    ownerName: 'Sita Raman',
    orgId: 'TN002',
    state: 'Tamil Nadu',
    district: 'Chennai',
    city: 'Chennai',
    street: '456 Helping Street',
    pincode: '600002',
    phoneNo: '044-23456789',
    email: 'contact@chennaihelpinghands.org',
    password: 'password2',
  },
  {
    id: 3,
    organizationName: 'Coimbatore Relief Fund',
    ownerName: 'Arun Patel',
    orgId: 'TN003',
    state: 'Tamil Nadu',
    district: 'Coimbatore',
    city: 'Coimbatore',
    street: '789 Relief Road',
    pincode: '641001',
    phoneNo: '0422-3456789',
    email: 'support@coimbatorerelief.org',
    password: 'password3',
  },
  {
    id: 4,
    organizationName: 'Madurai Care Society',
    ownerName: 'Mina Sharma',
    orgId: 'TN004',
    state: 'Tamil Nadu',
    district: 'Madurai',
    city: 'Madurai',
    street: '101 Care Lane',
    pincode: '625001',
    phoneNo: '0452-4567890',
    email: 'info@maduraicaresociety.org',
    password: 'password4',
  },
  {
    id: 5,
    organizationName: 'Tiruchirappalli Aid Group',
    ownerName: 'Rajesh Menon',
    orgId: 'TN005',
    state: 'Tamil Nadu',
    district: 'Tiruchirappalli',
    city: 'Tiruchirappalli',
    street: '202 Aid Street',
    pincode: '620001',
    phoneNo: '0431-5678901',
    email: 'contact@tiruchirappalliaid.org',
    password: 'password5',
  },
  {
    id: 6,
    organizationName: 'Salem Support Network',
    ownerName: 'Suresh Kumar',
    orgId: 'TN006',
    state: 'Tamil Nadu',
    district: 'Salem',
    city: 'Salem',
    street: '303 Support Avenue',
    pincode: '636001',
    phoneNo: '0427-6789012',
    email: 'info@salemsupport.org',
    password: 'password6',
  },
  {
    id: 7,
    organizationName: 'Erode Community Helpers',
    ownerName: 'Priya Nair',
    orgId: 'TN007',
    state: 'Tamil Nadu',
    district: 'Erode',
    city: 'Erode',
    street: '404 Community Road',
    pincode: '638001',
    phoneNo: '0424-7890123',
    email: 'support@erodehelpers.org',
    password: 'password7',
  },
  {
    id: 8,
    organizationName: 'Tirunelveli Welfare Trust',
    ownerName: 'Arvind Reddy',
    orgId: 'TN008',
    state: 'Tamil Nadu',
    district: 'Tirunelveli',
    city: 'Tirunelveli',
    street: '505 Welfare Lane',
    pincode: '627001',
    phoneNo: '0462-8901234',
    email: 'info@tirunelveliwelfare.org',
    password: 'password8',
  },
  {
    id: 9,
    organizationName: 'Vellore Relief Network',
    ownerName: 'Anita Joshi',
    orgId: 'TN009',
    state: 'Tamil Nadu',
    district: 'Vellore',
    city: 'Vellore',
    street: '606 Relief Street',
    pincode: '632001',
    phoneNo: '0416-9012345',
    email: 'support@vellorerelief.org',
    password: 'password9',
  },
  {
    id: 10,
    organizationName: 'Kanchipuram Aid Foundation',
    ownerName: 'Sanjay Sharma',
    orgId: 'TN010',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    city: 'Kanchipuram',
    street: '707 Aid Road',
    pincode: '631001',
    phoneNo: '044-01234567',
    email: 'info@kanchipuramaid.org',
    password: 'password10',
  },
];

const ManageOrganizations = () => {
  const [organizations, setOrganizations] = useState(initialOrganizations);

  const handleDelete = (id) => {
    setOrganizations((prevOrganizations) =>
      prevOrganizations.filter((org) => org.id !== id)
    );
  };

  return (
    <div className="manage-organizations">
      <h1>Manage Organizations</h1>
      <table>
        <thead>
          <tr>
            <th>Organization Name</th>
            <th>Owner Name</th>
            <th>Org ID</th>
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
          {organizations.map((org) => (
            <tr key={org.id}>
              <td>{org.organizationName}</td>
              <td>{org.ownerName}</td>
              <td>{org.orgId}</td>
              <td>{org.state}</td>
              <td>{org.district}</td>
              <td>{org.city}</td>
              <td>{org.street}</td>
              <td>{org.pincode}</td>
              <td>{org.phoneNo}</td>
              <td>{org.email}</td>
              <td>{org.password}</td>
              <td>
                <button onClick={() => handleDelete(org.id)}>Delete</button>
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

export default ManageOrganizations;


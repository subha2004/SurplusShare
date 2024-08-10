import React, { useState } from 'react';
import './ManageGroceryDonation.css'; // Make sure to create this CSS file

const initialGroceryDonations = [
  {
    id: 1,
    firstname: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Elm Street, Chennai, Tamil Nadu, 600001',
    groceryItems: [
      { item: 'Rice', quantity: 10 },
      { item: 'Beans', quantity: 5 },
    ],
    date: '2024-08-01',
  },
  {
    id: 2,
    firstname: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '234-567-8901',
    address: '456 Oak Avenue, Coimbatore, Tamil Nadu, 641001',
    groceryItems: [
      { item: 'Flour', quantity: 7 },
      { item: 'Sugar', quantity: 12 },
    ],
    date: '2024-08-02',
  },
  {
    id: 3,
    firstname: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    phone: '345-678-9012',
    address: '789 Pine Road, Madurai, Tamil Nadu, 625001',
    groceryItems: [
      { item: 'Oil', quantity: 4 },
      { item: 'Salt', quantity: 8 },
    ],
    date: '2024-08-03',
  },
  {
    id: 4,
    firstname: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '456-789-0123',
    address: '101 Maple Street, Tiruchirappalli, Tamil Nadu, 620001',
    groceryItems: [
      { item: 'Pulses', quantity: 15 },
      { item: 'Milk', quantity: 10 },
    ],
    date: '2024-08-04',
  },
  {
    id: 5,
    firstname: 'Sita Devi',
    email: 'sita.devi@example.com',
    phone: '567-890-1234',
    address: '202 Birch Avenue, Salem, Tamil Nadu, 636001',
    groceryItems: [
      { item: 'Spices', quantity: 6 },
      { item: 'Tea', quantity: 5 },
    ],
    date: '2024-08-05',
  },
  {
    id: 6,
    firstname: 'Amit Patel',
    email: 'amit.patel@example.com',
    phone: '678-901-2345',
    address: '303 Cedar Lane, Erode, Tamil Nadu, 638001',
    groceryItems: [
      { item: 'Sugar', quantity: 8 },
      { item: 'Rice', quantity: 12 },
    ],
    date: '2024-08-06',
  },
  {
    id: 7,
    firstname: 'Priya Singh',
    email: 'priya.singh@example.com',
    phone: '789-012-3456',
    address: '404 Pine Road, Tirunelveli, Tamil Nadu, 627001',
    groceryItems: [
      { item: 'Oil', quantity: 5 },
      { item: 'Salt', quantity: 7 },
    ],
    date: '2024-08-07',
  },
  {
    id: 8,
    firstname: 'Arun Kumar',
    email: 'arun.kumar@example.com',
    phone: '890-123-4567',
    address: '505 Walnut Street, Vellore, Tamil Nadu, 632001',
    groceryItems: [
      { item: 'Flour', quantity: 10 },
      { item: 'Pulses', quantity: 5 },
    ],
    date: '2024-08-08',
  },
  {
    id: 9,
    firstname: 'Meena Reddy',
    email: 'meena.reddy@example.com',
    phone: '901-234-5678',
    address: '606 Ash Lane, Kanchipuram, Tamil Nadu, 631001',
    groceryItems: [
      { item: 'Tea', quantity: 6 },
      { item: 'Milk', quantity: 8 },
    ],
    date: '2024-08-09',
  },
  {
    id: 10,
    firstname: 'Ravi Sharma',
    email: 'ravi.sharma@example.com',
    phone: '012-345-6789',
    address: '707 Elm Street, Thanjavur, Tamil Nadu, 613001',
    groceryItems: [
      { item: 'Rice', quantity: 15 },
      { item: 'Sugar', quantity: 10 },
    ],
    date: '2024-08-10',
  },
];


const ManageGroceryDonation = () => {
  const [groceryDonations, setGroceryDonations] = useState(
    initialGroceryDonations
  );

  const handleDelete = (id) => {
    setGroceryDonations((prevDonations) =>
      prevDonations.filter((don) => don.id !== id)
    );
  };

  return (
    <div className="manage-grocery-donation">
      <h1>Manage Grocery Donations</h1>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Grocery Items</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {groceryDonations.map((don) => (
            <tr key={don.id}>
              <td>{don.firstname}</td>
              <td>{don.email}</td>
              <td>{don.phone}</td>
              <td>{don.address}</td>
              <td>
                <ul>
                  {don.groceryItems.map((item, index) => (
                    <li key={index}>
                      {item.item} (Quantity: {item.quantity})
                    </li>
                  ))}
                </ul>
              </td>
              <td>{don.date}</td>
              <td>
                <button onClick={() => handleDelete(don.id)}>Delete</button>
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

export default ManageGroceryDonation;

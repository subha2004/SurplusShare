import React, { useState } from 'react';
import './ManageClothDonation.css'; // Make sure to create this CSS file

// Sample data for cloth donations
const initialClothDonations = [
  {
    id: 1,
    name: 'Aarav',
    email: 'aarav.patel@example.com',
    phone: '594-419-8284',
    address: '228 NH 47, Erode, Tamil Nadu, 694837',
    clothItems: [
      { item: 'Dress', quantity: 7 },
      { item: 'Jeans', quantity: 6 },
    ],
    date: '2024-08-01',
  },
  {
    id: 2,
    name: 'Anaya Kumar',
    email: 'anaya.kumar@example.com',
    phone: '877-952-1409',
    address: '481 Rajaji Street, Madurai, Tamil Nadu, 601334',
    clothItems: [
      { item: 'Jeans', quantity: 9 },
      { item: 'Dress', quantity: 4 },
    ],
    date: '2024-08-04',
  },
  {
    id: 3,
    name: 'Advik Nair',
    email: 'advik.nair@example.com',
    phone: '459-308-2965',
    address: '200 Mount Road, Salem, Tamil Nadu, 625413',
    clothItems: [
      { item: 'Dress', quantity: 8 },
      { item: 'T-Shirt', quantity: 9 },
    ],
    date: '2024-08-07',
  },
  {
    id: 4,
    name: 'Diya',
    email: 'diya.shah@example.com',
    phone: '232-739-2693',
    address: '226 Mount Road, Erode, Tamil Nadu, 600798',
    clothItems: [
      { item: 'Jacket', quantity: 8 },
      { item: 'Shirt', quantity: 10 },
    ],
    date: '2024-08-05',
  },
  {
    id: 5,
    name: 'Gupta',
    email: 'ishaan.gupta@example.com',
    phone: '195-316-2066',
    address: '487 Avinashi Road, Tiruppur, Tamil Nadu, 651303',
    clothItems: [
      { item: 'Jacket', quantity: 3 },
      { item: 'T-Shirt', quantity: 4 },
    ],
    date: '2024-08-04',
  },
  {
    id: 6,
    name: 'Meera Iyer',
    email: 'meera.iyer@example.com',
    phone: '315-855-7297',
    address: '446 Ramanathapuram Road, Madurai, Tamil Nadu, 647648',
    clothItems: [
      { item: 'Cap', quantity: 1 },
      { item: 'Scarf', quantity: 4 },
    ],
    date: '2024-08-05',
  },
  {
    id: 7,
    name: 'Kian Reddy',
    email: 'kian.reddy@example.com',
    phone: '829-737-2935',
    address: '341 Mount Road, Tirunelveli, Tamil Nadu, 635728',
    clothItems: [
      { item: 'Sweater', quantity: 3 },
      { item: 'Jeans', quantity: 5 },
    ],
    date: '2024-08-06',
  },
  {
    id: 8,
    name: 'Saanvi Menon',
    email: 'saanvi.menon@example.com',
    phone: '666-920-3481',
    address: '839 Ramanathapuram Road, Chennai, Tamil Nadu, 610316',
    clothItems: [
      { item: 'Jacket', quantity: 10 },
      { item: 'Cap', quantity: 2 },
    ],
    date: '2024-08-06',
  },
];


const ManageClothDonation = () => {
  const [clothDonations, setClothDonations] = useState(initialClothDonations);

  const handleDelete = (id) => {
    setClothDonations((prevDonations) =>
      prevDonations.filter((don) => don.id !== id)
    );
  };

  return (
    <div className="manage-cloth-donation">
       <div className="back-button-container">
        <a href="/admindashboard" className="back-button">
          Back to Dashboard
        </a>
      </div>
      <h1>Manage Cloth Donations</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Cloth Items</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clothDonations.map((don) => (
            <tr key={don.id}>
              <td>{don.name}</td>
              <td>{don.email}</td>
              <td>{don.phone}</td>
              <td>{don.address}</td>
              <td>
                <ul>
                  {don.clothItems.map((item, index) => (
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
     
    </div>
  );
};

export default ManageClothDonation;


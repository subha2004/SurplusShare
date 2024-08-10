import React, { useState } from 'react';
import './ManageFoodDonation.css'; // Make sure to create this CSS file

// Sample data for food donations
const initialFoodDonations = [
  {
    id: 1,
    name: 'Arun Kumar',
    email: 'arun.kumar@example.com',
    phone: '987-654-3210',
    address: 'No. 15, Anna Salai, Chennai, Tamil Nadu, 600002',
    foodItems: [
      { item: 'Rice', quantity: 20 },
      { item: 'Dal', quantity: 10 },
    ],
    date: '2024-08-01',
  },
  {
    id: 2,
    name: 'Priya Natarajan',
    email: 'priya.natarajan@example.com',
    phone: '876-543-2109',
    address: '42, Race Course Road, Coimbatore, Tamil Nadu, 641018',
    foodItems: [
      { item: 'Bread', quantity: 15 },
      { item: 'Eggs', quantity: 30 },
    ],
    date: '2024-08-02',
  },
  {
    id: 3,
    name: 'Ravi Shankar',
    email: 'ravi.shankar@example.com',
    phone: '765-432-1098',
    address: '16, Alagar Koil Road, Madurai, Tamil Nadu, 625002',
    foodItems: [
      { item: 'Vegetables', quantity: 25 },
      { item: 'Fruits', quantity: 20 },
    ],
    date: '2024-08-03',
  },
  {
    id: 4,
    name: 'Geetha Iyer',
    email: 'geetha.iyer@example.com',
    phone: '654-321-0987',
    address: '10, Thillai Nagar, Tiruchirappalli, Tamil Nadu, 620018',
    foodItems: [
      { item: 'Oil', quantity: 10 },
      { item: 'Sugar', quantity: 5 },
    ],
    date: '2024-08-04',
  },
  {
    id: 5,
    name: 'Suresh Babu',
    email: 'suresh.babu@example.com',
    phone: '543-210-9876',
    address: '55, Cherry Road, Salem, Tamil Nadu, 636001',
    foodItems: [
      { item: 'Milk', quantity: 10 },
      { item: 'Cereal', quantity: 8 },
    ],
    date: '2024-08-05',
  },
  {
    id: 6,
    name: 'Lakshmi Ramesh',
    email: 'lakshmi.ramesh@example.com',
    phone: '432-109-8765',
    address: '25, Main Bazaar, Vellore, Tamil Nadu, 632004',
    foodItems: [
      { item: 'Bread', quantity: 12 },
      { item: 'Butter', quantity: 4 },
    ],
    date: '2024-08-06',
  },
  {
    id: 7,
    name: 'Karthik Subramanian',
    email: 'karthik.subramanian@example.com',
    phone: '321-098-7654',
    address: '8, Gandhi Nagar, Erode, Tamil Nadu, 638001',
    foodItems: [
      { item: 'Flour', quantity: 15 },
      { item: 'Salt', quantity: 3 },
    ],
    date: '2024-08-07',
  },
  {
    id: 8,
    name: 'Anjali Menon',
    email: 'anjali.menon@example.com',
    phone: '210-987-6543',
    address: '12, Raja Street, Tirunelveli, Tamil Nadu, 627001',
    foodItems: [
      { item: 'Pasta', quantity: 8 },
      { item: 'Tomato Sauce', quantity: 6 },
    ],
    date: '2024-08-08',
  },
  {
    id: 9,
    name: 'Vijayalakshmi Krishnan',
    email: 'vijayalakshmi.krishnan@example.com',
    phone: '109-876-5432',
    address: '22, Main Road, Thanjavur, Tamil Nadu, 613001',
    foodItems: [
      { item: 'Potatoes', quantity: 18 },
      { item: 'Onions', quantity: 12 },
    ],
    date: '2024-08-09',
  },
  {
    id: 10,
    name: 'Manoj Varma',
    email: 'manoj.varma@example.com',
    phone: '098-765-4321',
    address: '30, Gandhi Market, Tiruppur, Tamil Nadu, 641602',
    foodItems: [
      { item: 'Chicken', quantity: 5 },
      { item: 'Spices', quantity: 4 },
    ],
    date: '2024-08-10',
  },


];

const ManageFoodDonation = () => {
  const [foodDonations, setFoodDonations] = useState(initialFoodDonations);

  const handleDelete = (id) => {
    setFoodDonations((prevDonations) =>
      prevDonations.filter((don) => don.id !== id)
    );
  };

  return (
    <div className="manage-food-donation">
      <h1>Manage Food Donations</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Food Items</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {foodDonations.map((don) => (
            <tr key={don.id}>
              <td>{don.name}</td>
              <td>{don.email}</td>
              <td>{don.phone}</td>
              <td>{don.address}</td>
              <td>
                <ul>
                  {don.foodItems.map((item, index) => (
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

export default ManageFoodDonation;

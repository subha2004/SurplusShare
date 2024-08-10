// import React, { useState } from 'react';
// import './ManageDonor.css'; // Make sure to create this CSS file

// // Sample data for donors
// const initialDonors = [
//   {
//     id: 1,
//     username: 'Donor1',
//     state: 'State1',
//     district: 'District1',
//     city: 'City1',
//     street: 'Street1',
//     pincode: '123456',
//     phoneNo: '123-456-7890',
//     email: 'donor1@example.com',
//     password: 'password1'
//   },
//   {
//     id: 2,
//     username: 'Donor2',
//     state: 'State2',
//     district: 'District2',
//     city: 'City2',
//     street: 'Street2',
//     pincode: '234567',
//     phoneNo: '234-567-8901',
//     email: 'donor2@example.com',
//     password: 'password2'
//   },
//   {
//     id: 3,
//     username: 'Donor3',
//     state: 'State3',
//     district: 'District3',
//     city: 'City3',
//     street: 'Street3',
//     pincode: '345678',
//     phoneNo: '345-678-9012',
//     email: 'donor3@example.com',
//     password: 'password3'
//   },
//   // Add more donors as needed
// ];

// const ManageDonor = () => {
//   const [donors, setDonors] = useState(initialDonors);

//   const handleDelete = (id) => {
//     setDonors(prevDonors => 
//       prevDonors.filter(don => don.id !== id)
//     );
//   };

//   return (
//     <div className="manage-donor">
//       <h1>Manage Donors</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>State</th>
//             <th>District</th>
//             <th>City</th>
//             <th>Street</th>
//             <th>Pincode</th>
//             <th>Phone No</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {donors.map(don => (
//             <tr key={don.id}>
//               <td>{don.username}</td>
//               <td>{don.state}</td>
//               <td>{don.district}</td>
//               <td>{don.city}</td>
//               <td>{don.street}</td>
//               <td>{don.pincode}</td>
//               <td>{don.phoneNo}</td>
//               <td>{don.email}</td>
//               <td>{don.password}</td>
//               <td>
//                 <button onClick={() => handleDelete(don.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageDonor;


import React, { useState } from 'react';
import './ManageDonor.css'; // Make sure this CSS file is correctly imported

const initialDonors = [
  {
    id: 1,
    username: 'Subha',
    state: 'Tamil Nadu',
    district: 'Chennai',
    city: 'Chennai',
    street: 'MG Road',
    pincode: '600001',
    phoneNo: '987-654-3210',
    email: 'subha@example.com',
    password: 'password1',
  },
  
];

const ManageDonor = () => {
  const [donors, setDonors] = useState(initialDonors);

  const handleDelete = (id) => {
    setDonors((prevDonors) => prevDonors.filter((don) => don.id !== id));
  };

  return (
    <div className="manage-donor">
      <div className="back-button-container">
        <a href="/admindashboard" className="back-button">
          Back to Dashboard
        </a>
      </div>
      <h1>Manage Donors</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
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
          {donors.map((don) => (
            <tr key={don.id}>
              <td>{don.username}</td>
              <td>{don.state}</td>
              <td>{don.district}</td>
              <td>{don.city}</td>
              <td>{don.street}</td>
              <td>{don.pincode}</td>
              <td>{don.phoneNo}</td>
              <td>{don.email}</td>
              <td>{don.password}</td>
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

export default ManageDonor;

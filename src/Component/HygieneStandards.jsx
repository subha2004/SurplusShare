import React from 'react';
import './HygieneStandars.css'; 

const HygieneStandards = () => {
  return (
    <div className="hygiene-standards-container">
      <div className="hygiene-standards-content">
        <h2>Hygiene Standards</h2>
        <ul className="hygiene-standards-list">
          <li>Surplus food is collected from donors and packaged in clean, covered containers.</li>
          <li>Surplus food is stored and transported under hygienic conditions, maintaining the appropriate temperature for both perishable and non-perishable items.</li>
          <li>Transportation vehicles are regularly cleaned and exclusively used for food delivery.</li>
          <li>Surplus food is distributed or served to those in need before its expiry date.</li>
          <li>Spoiled food is carefully handled to avoid disposal in landfills, with preference given to alternatives such as composting or bio-gas plants.</li>
          <li>Food is stored above the floor and away from walls and non-food items, with regular cleaning of the storage area, including floors, pallets, and shelves.</li>
          <li>Storage areas, including doors, windows, and roofs, are properly sealed to prevent pest entry, and pest control measures are implemented regularly.</li>
          <li>Staff and volunteers are trained in personal hygiene and sanitation practices to ensure food handling standards are met.</li>
          <li>We maintain a thorough documentation process, recording details such as donor information, hunger spots, donation dates, food items, quantities, and distribution dates.</li>
        </ul>
      </div>
      <div className="hygiene-standards-images">
        <img className="hygiene-standards-image" src="https://t4.ftcdn.net/jpg/04/98/47/53/360_F_498475327_1fHyorA3Pf0PVeOaIBc5XcjKvliiZCrs.jpg" alt="Hygiene Image 1" />
        <img className="hygiene-standards-image" src="https://media.licdn.com/dms/image/C4D12AQHZuh5YN-n11Q/article-inline_image-shrink_1000_1488/0/1609423187011?e=1726704000&v=beta&t=Vv1icgED-0gEZRldcOpNX4YRPJODrZpAouNluwhKDNQ" alt="Hygiene Image 2" />
        <img className="hygiene-standards-image" src="https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg" alt="Hygiene Image 3" />
        <img className="hygiene-standards-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwHpNLOuVuOMCLPdXfjvjVCj01988p328_w&sg" alt="Hygiene Image 4" />
      </div>
    </div>
  );
};

export default HygieneStandards;

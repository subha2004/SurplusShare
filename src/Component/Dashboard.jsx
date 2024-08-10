
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    
    <div className="dacon2">
      <div className="dabg_col">
        <div className="dafood">
          <h2 className="dafoodhead">DONATE FOOD</h2>
          <img src="https://i.pinimg.com/564x/15/ce/39/15ce390e2962ff5b1de67a464355982e.jpg" alt="imag1"></img>
          <div className="dabt">
            <form action="/donate_food" method="get">
              <button className="dabtb">Donate</button>
            </form>
          </div>
         
        </div>
        <div className="dafood">
          <h2 className="dafoodhead">DONATE GROCERY</h2>
         <img src="https://i.pinimg.com/564x/8b/6a/ab/8b6aab748b3a430020688dcc12fcad58.jpg" alt="img2"></img>
          <div className="dabt">
            <form action="/grocery" method="get">
              <button className="dabtb">Donate</button>
            </form>
          </div>
          

          </div>
        <div className="dafood">
          <h2 className="dafoodhead">DONATE CLOTH</h2>
          <img src="https://i.pinimg.com/564x/98/8b/4d/988b4d390041a845f2f279a183d0037c.jpg" alt="img2"></img>
          <div className="dabt">
            <form action="/cloth" method="get">
              <button className="dabtb">Donate</button>
            </form>
          </div>
          
         
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;

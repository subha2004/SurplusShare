// import React from 'react';
// import './DeliveryProcess.css'; 

// const DeliveryProcess = () => {
//     return (
//         <div className='deliverybody'>
//             <div className="delivery-process">
//                 <header>
//                     <h1>Delivery Process</h1>
//                 </header>
//                 <main>
//                     <section className="delivery-steps">
//                         <h2>How We Deliver Excess Food</h2>
//                         <div className="step">
//                             <img src="https://i.guim.co.uk/img/media/d7820e55554b98df405f1aca3e523ccbe7baee04/0_0_1500_900/master/1500.jpg?width=465&dpr=1&s=none" alt="dfghj" className="step-image" />
//                             <div className="step-content">
//                                 <h3>Step 1: Collecting Food</h3>
//                                 <p>Event organizers and individuals can easily donate excess food through our app. Our system tracks and verifies the donations to ensure quality and safety.</p>
//                             </div>
//                         </div>
//                         <div className="step">
//                             <img src="https://img.freepik.com/premium-vector/clothes-food-donation-volunteer-collecting-box-humanitarian-help-charity-people-giving-grocery-goods-poverty-homeless-shelter-volunteers-social-work-vector-illustration_81894-10272.jpg?semt=ais_hybrid" alt="Preparing Food" className="step-image" />
//                             <div className="step-content">
//                                 <h3>Step 2: Preparing Food</h3>
//                                 <p>Our volunteers prepare the collected food for distribution. This step ensures the food is ready to be served and meets our hygiene standards.</p>
//                             </div>
//                         </div>
//                         <div className="step">
//                             <img src="https://www.shutterstock.com/image-vector/illustration-featuring-different-ways-store-600nw-391107166.jpg" alt="Packing Food" className="step-image" />
//                             <div className="step-content">
//                                 <h3>Step 3: Packing Food</h3>
//                                 <p>The prepared food is packed securely to maintain freshness and prevent contamination during transportation.</p>
//                             </div>
//                         </div>
//                         <div className="step">
//                             <img src="https://thumbs.dreamstime.com/b/charity-delivery-humanitarian-aid-collection-donation-volunteer-tiny-man-donations-volunteers-carrying-box-food-326359295.jpg" alt="Scheduling Delivery" className="step-image" />
//                             <div className="step-content">
//                                 <h3>Step 4: Scheduling Delivery</h3>
//                                 <p>We schedule deliveries to NGOs or needy individuals based on the food availability and priority. This helps in efficient distribution.</p>
//                             </div>
//                         </div>
//                         <div className="step">
//                             <img src="https://lh6.googleusercontent.com/icxtSOKMAegPAXidPiICHVXkQNY73HSwpmdJKLyLQMre1DkIyf_i1YnqCD50gv0R349VNf5w6nIKEBx3qR6BC_kmWERwbUE-ym84GmxwxsC-XfaD0qsg-yNPWzIB2_d1qTjgDOPVdLxGgIlIErM2n2A" alt="Tracking Delivery" className="step-image" />
//                             <div className="step-content">
//                                 <h3>Step 5: Tracking Delivery</h3>
//                                 <p>Our system tracks the delivery status in real-time to ensure timely and accurate distribution of the food.</p>
//                             </div>
//                         </div>
//                         <div className="step">
//                             <img src="https://www.culturemonkey.io/employee-engagement/content/images/2023/10/continuous-feedback-loop-strategies.png" alt="Collecting Feedback" className="step-image" />
//                             <div className="step-content">
//                                 <h3>Step 6: Collecting Feedback</h3>
//                                 <p>After delivery, we collect feedback from recipients and volunteers to continuously improve our process and ensure satisfaction.</p>
//                             </div>
//                         </div>
//                     </section>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default DeliveryProcess;


import React from 'react';
import './DeliveryProcess.css';

const DeliveryProcess = () => {
  return (
    <div className='deliverybody'>
      <div className="delivery-process">
        <header>
          <h1>Delivery Process</h1>
        </header>
        <main>
          <section className="delivery-steps">
            <h2>How We Deliver Excess Food</h2>
            <div className="step" style={{ '--i': 0 }}>
              <img src="https://i.guim.co.uk/img/media/d7820e55554b98df405f1aca3e523ccbe7baee04/0_0_1500_900/master/1500.jpg?width=465&dpr=1&s=none" alt="dfghj" className="step-image" />
              <div className="step-content">
                <h3>Step 1: Collecting Food</h3>
                <p>Event organizers and individuals can easily donate excess food through our app. Our system tracks and verifies the donations to ensure quality and safety.</p>
              </div>
            </div>
            <div className="step" style={{ '--i': 1 }}>
              <img src="https://img.freepik.com/premium-vector/clothes-food-donation-volunteer-collecting-box-humanitarian-help-charity-people-giving-grocery-goods-poverty-homeless-shelter-volunteers-social-work-vector-illustration_81894-10272.jpg?semt=ais_hybrid" alt="Preparing Food" className="step-image" />
              <div className="step-content">
                <h3>Step 2: Preparing Food</h3>
                <p>Our volunteers prepare the collected food for distribution. This step ensures the food is ready to be served and meets our hygiene standards.</p>
              </div>
            </div>
            <div className="step" style={{ '--i': 2 }}>
              <img src="https://www.shutterstock.com/image-vector/illustration-featuring-different-ways-store-600nw-391107166.jpg" alt="Packing Food" className="step-image" />
              <div className="step-content">
                <h3>Step 3: Packing Food</h3>
                <p>The prepared food is packed securely to maintain freshness and prevent contamination during transportation.</p>
              </div>
            </div>
            <div className="step" style={{ '--i': 3 }}>
              <img src="https://thumbs.dreamstime.com/b/charity-delivery-humanitarian-aid-collection-donation-volunteer-tiny-man-donations-volunteers-carrying-box-food-326359295.jpg" alt="Scheduling Delivery" className="step-image" />
              <div className="step-content">
                <h3>Step 4: Scheduling Delivery</h3>
                <p>We schedule deliveries to NGOs or needy individuals based on the food availability and priority. This helps in efficient distribution.</p>
              </div>
            </div>
            <div className="step" style={{ '--i': 4 }}>
              <img src="https://lh6.googleusercontent.com/icxtSOKMAegPAXidPiICHVXkQNY73HSwpmdJKLyLQMre1DkIyf_i1YnqCD50gv0R349VNf5w6nIKEBx3qR6BC_kmWERwbUE-ym84GmxwxsC-XfaD0qsg-yNPWzIB2_d1qTjgDOPVdLxGgIlIErM2n2A" alt="Tracking Delivery" className="step-image" />
              <div className="step-content">
                <h3>Step 5: Tracking Delivery</h3>
                <p>Our system tracks the delivery status in real-time to ensure timely and accurate distribution of the food.</p>
              </div>
            </div>
            <div className="step" style={{ '--i': 5 }}>
              <img src="https://www.culturemonkey.io/employee-engagement/content/images/2023/10/continuous-feedback-loop-strategies.png" alt="Collecting Feedback" className="step-image" />
              <div className="step-content">
                <h3>Step 6: Collecting Feedback</h3>
                <p>After delivery, we collect feedback from recipients and volunteers to continuously improve our process and ensure satisfaction.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DeliveryProcess;


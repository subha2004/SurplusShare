
import React from 'react';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Feedingpro.css';
import FoodBridge from './FoodBridge';

const Feedingpro = () => {
  return (
    <div className='fbody'>
      <div className='ffbb'>
        <div className="fcontainer">

          <motion.div
            className="fsection"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="ftext">
              <h2>Feeding Program</h2>
              <p>
                The SurplusShare Feeding Program is a cornerstone initiative aimed at tackling hunger and food insecurity within our 
                communities. Our feeding program ensures that nutritious meals are delivered daily to the needy, leveraging the power of community volunteers 
                and donations. This not only helps in reducing food wastage but also ensures that perfectly good food reaches those who need it the most.
              </p>
            </div>
            <div className="fimage">
              <img src="https://b.zmtcdn.com/data/o2_assets/fb8ec579b8f48d197f042a8e229e8c661621256027.png" alt="Mission" />
            </div>
          </motion.div>
          </div>
          <motion.div
            className="frsection"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='frcontainer'>
              <div className='frtext'>
                <ul>
                  <li className='bk'>
                    <img src="https://thumbs.dreamstime.com/b/computer-approved-checkmark-color-line-icon-successful-registration-update-download-concept-agreement-validation-element-234187634.jpg" alt="Icon 1" />
                    Event organizers, restaurants, and individuals with surplus food can easily register and donate through our user-friendly app.
                  </li>
                  <li className='bk'>
                    <img src="https://cdn1.iconfinder.com/data/icons/ui-glynh-05-of-5/100/UI_Glyph_09_-08-1024.png" alt="Icon 2" />
                    Donations include detailed information about the type of food, quantity, and pickup location to streamline the collection process.
                  </li>
                  <li className='bk'>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.m5-s8bkEYZJzlzE0thXxiQHaHa&pid=Api&P=0&h=180" alt="Icon 3" />
                    A dedicated network of volunteers signs up to collect and distribute food donations.
                  </li>
                  <li className='bk'>
                    <img src="https://cdn5.vectorstock.com/i/1000x1000/07/09/chef-hat-sign-icon-cooking-symbol-vector-3750709.jpg" alt="Icon 4" />
                    Volunteers can also provide additional services such as cooking and preparing food for distribution.
                  </li>
                </ul>
              </div>
              <div className='frightimage'>
                <img src="https://www.feedingindia.org/dfp/assets/loginbanner-2e27af82.png" alt="Right Side Image" />
                {/* <img src="https://www.wfp.org/sites/default/files/styles/open_graph_image/public/images/news/african%20MFRT4557.jpg?itok=NBhEU7Ry" alt="Right Side Image" /> */}
              </div>
            </div>
          </motion.div>
        
        <br /><br />
      </div>
     <FoodBridge />
    </div>
  );
};

export default Feedingpro;



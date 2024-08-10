
// import React, { useEffect } from 'react';
// import './IncreasingDonationsChart.css'; 

// const IncreasingDonationsChart = () => {
//   useEffect(() => {
 
//     const loadScript = () => {
//       const script = document.createElement('script');
//       script.src = 'https://www.gstatic.com/charts/loader.js';
//       script.onload = () => {
//         window.google.charts.load('current', { packages: ['bar'] });
//         window.google.charts.setOnLoadCallback(drawChart);
//       };
//       document.body.appendChild(script);
//     };

//     const drawChart = () => {
//       const data = window.google.visualization.arrayToDataTable([
//         ['Date', 'Fund Donation', 'Food Donation', 'Cloth Donation', 'Grocery Donation'],
//         ['2020-01', 1000, 400, 200, 500],
//         ['2020-02', 1170, 460, 250, 550],
//         ['2020-03', 1300, 500, 300, 600],
//         ['2020-04', 1500, 550, 350, 650]
//       ]);

//       const options = {
//         chart: {
//           title: 'Increasing Donations Chart',
//           subtitle: 'Fund, Food, Cloth, and Grocery Donations over Time'
//         },
//         bars: 'horizontal' 
//       };

//       const chart = new window.google.charts.Bar(document.getElementById('chart_div'));
//       chart.draw(data, window.google.charts.Bar.convertOptions(options));
//     };

//     loadScript();
//   }, []);

//   return (
//     <div className="chart-container">
//       <div id="chart_div"></div>
//       <a className="powered-by" href="https://livechatai.com/">Powered by LiveChatAI</a>
//     </div>
//   );
// };

// export default IncreasingDonationsChart;


// src/components/IncreasingDonationsChart.js


import React, { useEffect } from 'react';
import './IncreasingDonationsChart.css'; // Import the external CSS file

const IncreasingDonationsChart = () => {
  useEffect(() => {
    // Load Google Charts library and draw the chart
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.onload = () => {
        window.google.charts.load('current', { packages: ['bar'] });
        window.google.charts.setOnLoadCallback(drawChart);
      };
      document.body.appendChild(script);
    };

    const drawChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ['Date', 'Fund Donation', 'Food Donation', 'Cloth Donation', 'Grocery Donation'],
        ['2020-01', 1000, 400, 200, 500],
        ['2020-02', 1170, 460, 250, 550],
        ['2020-03', 1300, 500, 300, 600],
        ['2020-04', 1500, 550, 350, 650]
      ]);

      const options = {
        chart: {
          title: 'Increasing Donations Chart',
          subtitle: 'Fund, Food, Cloth, and Grocery Donations over Time'
        },
        bars: 'vertical', // Required for Material Bar Charts.
        height: 400, // Set the height of the chart
        chartArea: { width: '70%' }, // Adjust the chart area width
        hAxis: { title: 'Amount' },
        vAxis: { title: 'Date' }
      };

      const chart = new window.google.charts.Bar(document.getElementById('chart_div'));
      chart.draw(data, window.google.charts.Bar.convertOptions(options));
    };

    loadScript();
  }, []);

  return (

    <div className='increasebody'>
    <div className="chart-container">
      <div id="chart_div"></div>
      
    </div>
    </div>
  );
};

export default IncreasingDonationsChart;


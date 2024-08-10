import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components required for the Line chart
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const FundDonationChart = () => {
  // Ref to store the canvas element
  const chartRef = useRef(null);

  // Clean up chart instance on component unmount
  useEffect(() => {
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Fund Donations',
        data: [3000, 4000, 5000, 6000, 8000, 9000, 12000],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount ($)',
        },
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2>Increase in Fund Donations</h2>
      <Line
        data={data}
        options={options}
        ref={chartRef}
      />
    </div>
  );
};

export default FundDonationChart;







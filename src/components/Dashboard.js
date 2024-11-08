import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Users',
        data: [10, 35, 45, 25, 35, 15, 35],
        fill: false,
        borderColor: 'rgb(153, 27, 27)', // Red color
        tension: 0.2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + context.raw;
          },
        },
      },
    },
    animation: {
      delay: 1500,
      duration: 1000,
      easing: 'easeInOutQuad', // Choose your preferred easing function
    },
  };

  return (
    <div style={{overflow: 'hidden'}}>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-3">
        <div className="p-4 bg-dark rounded shadow-md animate__animated animate__bounceIn animate-delay-600ms">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="mt-1 text-3xl">1,234</p>
        </div>
        <div className="p-4 bg-dark rounded shadow-md animate__animated animate__bounceIn animate-delay-900ms">
          <h2 className="text-xl font-normal">New Users</h2>
          <p className="mt-1 text-3xl">123</p>
        </div>
        <div className="p-4 bg-dark rounded shadow-md animate__animated animate__bounceIn animate-delay-1200ms">
          <h2 className="text-xl font-semibold">Bounce Rate</h2>
          <p className="mt-1 text-3xl">23%</p>
        </div>
      </div>
      <div className="p-4 bg-dark rounded shadow-md animate__animated animate__fadeIn animate-delay-1500ms">
        <h2 className="text-xl font-semibold">User Statistics</h2>
          <Line data={data} options={chartOptions} />
      </div>
    </div>
  );
};

export default Dashboard;

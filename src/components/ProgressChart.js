import React from 'react';
import testData from '../team.json';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ProgressChart = () => {
    const projects = testData.projects; 

    const chartData = {
      labels: projects.map(p => p.projectName),
      datasets: [{
        label: '% Complete',
        data: projects.map(p => p.completionRate),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)' 
        ]
      }]
    }

    console.log(chartData);
  return <Bar data={chartData} />;
};

export default ProgressChart;
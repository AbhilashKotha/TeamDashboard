import React from 'react';
import testData from '../team.json';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const PeopleIssuesChart = () => {
  const peopleData = testData.peopleIssuesData;
  console.log(peopleData);

  const chartData = {
    labels: Object.keys(peopleData),
    datasets: [
      {
        label: 'Open Issues',
        data: Object.values(peopleData).map((d) => d.openIssues),
        backgroundColor: 'grey', // Color for open issues
      },
      {
        label: 'In Progress Issues',
        data: Object.values(peopleData).map((d) => d.inProgressIssues),
        backgroundColor: 'yellow', // Color for in-progress issues
      },
      {
        label: 'Closed Issues',
        data: Object.values(peopleData).map((d) => d.closedIssues),
        backgroundColor: 'green', // Color for in-progress issues
      }
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default PeopleIssuesChart;
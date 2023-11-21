import { Pie } from 'react-chartjs-2';
import data from '../team.json';
import 'chart.js/auto';

const IssuesChart = () => {

  const issuesData = data.issuesData;

  const totalIssues = issuesData.totalIssues;
  const closedIssues = issuesData.issuesClosed;
  const inProgressIssues = issuesData.issuesInProgress;
  const notStartedIssues = issuesData.issuesNotStarted;


  const chartData = {
    labels: ['Issues Closed', 'Issues In Progress', 'Issues Not Started'],
    datasets: [
      {
        data: [closedIssues, inProgressIssues, notStartedIssues],
        backgroundColor: [
          'green',
          'yellow',
          'grey',
      ]
    }]
  }

  return <Pie data={chartData} />;
}

export default IssuesChart;
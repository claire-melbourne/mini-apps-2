import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

function PriceChart() {
  useEffect(() => {
    const ctx = document.getElementById('timeChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    // Configuration options go here
    options: {}
    })
  })
  return (
    <div>
      <canvas id='timeChart'></canvas>
    "Powered by CoinDesk"
    </div>
  );
};

export default PriceChart;
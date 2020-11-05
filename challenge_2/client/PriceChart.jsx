import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

function PriceChart({data}) {
  useEffect(() => {
    const ctx = document.getElementById('timeChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [new Date("2015-3-15 13:3").toLocaleString(), new Date("2015-3-25 13:2").toLocaleString(), new Date("2015-4-25 14:12").toLocaleString()],
        datasets: [{
          label: 'Demo',
          data: [{
            t: new Date("2015-3-15 13:3"),
            y: 12
            },
            {
              t: new Date("2015-3-25 13:2"),
              y: 21
            },
            {
              t: new Date("2015-4-25 14:12"),
              y: 32
            }
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time'
          }]
        }
      }
    });
  });
  return (
    <div>
      <canvas id='timeChart'></canvas>
    "Powered by CoinDesk"
    </div>
  );
};

export default PriceChart;
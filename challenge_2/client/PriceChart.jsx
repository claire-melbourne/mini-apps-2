import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

function PriceChart({bpiData}) {
  useEffect(() => {
    const ctx = document.getElementById('timeChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        // labels: [new Date("2020-09-04").toLocaleString(), new Date("2020-10-04").toLocaleString(), new Date("2020-11-03").toLocaleString()],
        datasets: [{
          label: 'Demo',
          data: bpiData,
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
        title: {
          display: true,
          text: 'BPI Values in US Dollars September - November 2020'
        },
        scales: {
          xAxes: [{
            type: 'time'
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Closing Values'
            }
          }]
        }
      }
    });
  })

    // const parseData = (data) => {
  //   let parsedData = [];
  //   for (var date in data) {
  //     let coordObj = {};
  //     coordObj.t = new Date(key);
  //     coordObj.y = data[date];
  //     console.log('coordinates:', coordObj);
  //     parsedData.push(coordObj);
  //   }
  //   console.log('parsedData: ', parsedData)
  // }
  return (
    <div>
      {/* {console.log('received:', data)} */}
      <canvas id='timeChart'></canvas>
    "Powered by CoinDesk"
    </div>
  );
};

export default PriceChart;
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PriceChart from './PriceChart.jsx'

function App() {

  const getCurrencyValues = () => {
    axios.get('/api/closingPrices')
    .then((res) => {
      console.log('values retrieved: ', res);
    })
    .catch(err => console.error('Unable to access data at this time')
    )
  };

  return (
    <div>
      Cryptocurrency Values Over Time
      <PriceChart />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
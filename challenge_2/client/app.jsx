import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PriceChart from './PriceChart.jsx'

function App() {
  const [data, setData] = useState(null);
  const parseData = (data) => {
    let parsedData = [];
    for (var date in data) {
      let coordObj = {};
      coordObj.t = new Date(date);
      coordObj.y = data[date];
      console.log('coordinates:', coordObj);
      parsedData.push(coordObj);
    }
    console.log('parsedData: ', parsedData)
    setData(parsedData);
  };

  useEffect(() => {
    axios.get('/api/closingPrices')
    .then((res) => {
      console.log('values retrieved: ', res.data);
      parseData(res.data)
    })
    .catch(err => console.error('Unable to access data at this time')
    )
  }, [])

  return (
    <div>
      <PriceChart bpiData= {data}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
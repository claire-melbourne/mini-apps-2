const express = require('express');
const bpi = require('./bpiRequest');
const PORT = 5000;
app = express();

app.use(express.static(__dirname + '/public'))

app.get('/api/closingPrices', (req, res) => {
  bpi.getCurrencyValues('2020-09-05', '2020-11-05', (err, prices) => {
    if (err) {
      res.status(404).end('Unable to access data');
    } else {
      res.status(200).send(prices).end();
    }
  })
});

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})


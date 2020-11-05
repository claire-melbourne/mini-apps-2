const axios = require('axios');

module.exports = {
  getCurrencyValues(startDate, endDate, cb) {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
    .then((result) => {
      const prices = result.data.bpi;
      console.log('currency prices retrieved: ', prices);
      cb(null, prices);
    })
    .catch((err) => {
      console.error('ERROR: ', err);
      res.status(404).end('Unable to access data');
      cb(err, null);
    });
  }
};
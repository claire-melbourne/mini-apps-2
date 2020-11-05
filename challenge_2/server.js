const express = require('express');
const PORT = 5000;
app = express();

app.use(express.static(__dirname + '/public'))
// app.get('/', (req, res) => {
//   res.send('hello world');
// });

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})


// setup
const express = require('express');
const app = express();
const cors = require('cors');
const prefectures = require('./prefectures');
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());

// root directory route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// api routing
app.get('/api/prefecture/', (req, res) => {
  res.json(prefectures);
  console.log(aomori);
});

app.get('/api/prefecture/:name', (req, res) => {
  const searchPref = req.params.name.toLowerCase();
  if (prefectures[searchPref]) {
    res.json(prefectures[searchPref]);
  } else {
    res.json('Please check the documentation. Request not recognized.');
  }
});

// starting the server
app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});

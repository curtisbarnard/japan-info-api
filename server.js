// setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// test data
const aichi = {
  engName: 'Aichi',
  jName: '愛知県',
  island: 'Honshu',
  region: 'Chubu',
  largeCity: 'Nagoya',
  totalArea: {
    size: 5173.07,
    unit: 'km^2',
  },
  elevation: {
    highest: 1415.2,
    unit: 'm',
  },
  population: {
    2020: 7542415,
  },
};

const aomori = {
  engName: 'Aomori',
  jName: '青森県',
  island: 'Honshu',
  region: 'Tohoku',
  largeCity: 'Aomori',
  totalArea: {
    size: 9645.64,
    unit: 'km^2',
  },
  elevation: {
    highest: 1624.7,
    unit: 'm',
  },
  population: {
    2020: 1237984,
  },
};

const prefectures = { aichi: aichi, aomori: aomori };

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

// prefecture objects in alphabetical order
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

// export object with all prefecture data within
module.exports = { aichi: aichi, aomori: aomori };

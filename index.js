var fetch = require('node-fetch');
const { execSync, exec } = require('child_process');

const countryMap = {
  'Argentina': 'ARG',
  'Australia': 'AUS',
  'Belgium': 'BEL',
  'Brazil': 'BRA',
  'Colombia': 'COL',
  'Costa Rica': 'CRC',
  'Croatia': 'CRO',
  'Denmark': 'DEN',
  'Egypt': 'EGY',
  'England': 'ENG',
  'France': 'FRA',
  'Germany': 'GER',
  'Iceland': 'ISL',
  'Iran': 'IRN',
  'Japan': 'JPN',
  'Mexico': 'MEX',
  'Morocco': 'MAR',
  'Nigeria': 'NGA',
  'Panama': 'PAN',
  'Peru': 'PER',
  'Poland': 'POL',
  'Portugal': 'POR',
  'Russia': 'RUS',
  'Saudi Arabia': 'KSA',
  'Senegal': 'SEN',
  'Serbia': 'SRB',
  'South Korea': 'KOR',
  'Spain': 'ESP',
  'Sweden': 'SWE',
  'Switzerland': 'SUI',
  'Tunisia': 'TUN',
  'Uruguay': 'URU'
};

// wrap inside polling loop
/* fetch('https://world-cup-scores.herokuapp.com/')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    // display to LED board
  }); */

const generateTextImage = (text, filename, ledRows) => {
  execSync(`python3 generate_image.py "${text}" ${filename} ${ledRows}`);
};

generateTextImage('COL - 3 JPN - 0', 'test.ppm', 16);

exec(`sudo ../rpi-rgb-led-matrix/examples-api-use/demo --led-no-hardware-pulse --led-rows=16 --led-brightness=50 -D 1 -m 500 test.ppm`);

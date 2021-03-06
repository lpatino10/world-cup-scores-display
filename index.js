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

let savedResults = [];

const generateTextImage = (text, filename, ledRows) => {
  execSync(`python3 generate_image.py "${text}" ${filename} ${ledRows}`);
};

const displayCurrentResults = () => {
  fetch('https://world-cup-scores.herokuapp.com/')
    .then(response => response.json())
    .then(json => {
      json.forEach((matchResult, index) => {
        const homeTeamAbbreviation = countryMap[matchResult.homeTeamName];
        const homeTeamScore = matchResult.homeTeamScore;
        const awayTeamAbbreviation = countryMap[matchResult.awayTeamName];
        const awayTeamScore = matchResult.awayTeamScore;
        const inputText = `${homeTeamAbbreviation} - ${homeTeamScore} ${awayTeamAbbreviation} - ${awayTeamScore}`;

        // display to LED board
        generateTextImage(inputText, 'score.ppm', 16);
        execSync(`sudo ../rpi-rgb-led-matrix/examples-api-use/demo -t 9 --led-no-hardware-pulse --led-rows=16 --led-brightness=50 -D 1 -m 500 score.ppm`);
      })
    })
    .catch(err => console.log('Error calling API: ' + err));
};

displayCurrentResults();
setInterval(displayCurrentResults, 10000);

var fetch = require('node-fetch');
const { execSync } = require('child_process');

// wrap inside polling loop
/* fetch('https://world-cup-scores.herokuapp.com/')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    // display to LED board
  }); */

const generateTextImage = (text, filename, ledRows) => {
  //const args = [text, filename, ledRows];
  execSync(`python3 generate_image.py ${text} ${filename} ${ledRows}`);
};

generateTextImage('testing', 'test.ppm', 16);

execSync(`sudo ../rpi-rgb-led-matrix/examples-api-use/demo --led-no-hardware-pulse --led-rows=16 --led-brightness=50 -D 1 test.ppm`)
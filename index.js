var fetch = require('node-fetch');

// wrap inside polling loop
fetch('https://world-cup-scores.herokuapp.com/')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    // display to LED board
  });

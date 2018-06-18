var fetch = require('node-fetch');
var Jimp = require('jimp');

// wrap inside polling loop
fetch('https://world-cup-scores.herokuapp.com/')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    // display to LED board
  });

/* let image = new Jimp(32, 16);
Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(font => {
    image.print(font, 0, 0, 'test');
    image.write('test_image.jpg');
}); */

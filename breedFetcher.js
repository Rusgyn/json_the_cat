const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, _response, body) => {
    if (error) {
      callback(error, null);
    } else {
      let result = JSON.parse(body);
      let output = "";
      for (let x of result) {
        output = x.description;
      }
      //let result = JSON.parse(body).length > 1 ? JSON.parse(body)[0].description : 'No results'
      callback(null, output);
    }
  });
};

module.exports = { fetchBreedDescription };
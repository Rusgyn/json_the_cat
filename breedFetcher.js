const request = require('request');
const process = require('process');

let args = process.argv;
let breedName = args[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const makeRequest = function(url, responseHandler) {
  //The underscore(_) written before error and response to represent that these parameters are not in use but needed as part of the `request` syntax.
  request(url, (error, _response, body) => {
    if (error) {
      console.log(error); //Request failed, e.g. breaking the given URL.
    } else {
      const data = JSON.parse(body);
      responseHandler(data); // callback
    }
  });
};


//The callback function, will do the process of showing the requested breed
const responseHandler = function(response) {
  if (response.length > 0) {
    //access the data array and output the description for the user
    for (let entry of response) {
      console.log(entry.description);
    }
  } else {
    //edge case: requested breed not found.
    console.log(`Breed Not Found, breed name: ${breedName}.`);
  }
};

makeRequest(url, responseHandler);
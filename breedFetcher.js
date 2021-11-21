const request = require('request');

const fetchBreedDescription = function(breedName, cb) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      cb(error);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("failed to find specific breed");
    } else {
      cb(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
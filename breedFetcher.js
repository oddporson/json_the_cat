const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {

    if (body) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log('Breed is not defined.');
      } else {
        let breedSummary = data[0].description.trim();
        // console.log(breedSummary);
        callback(error, breedSummary);
      }
    }
  });


};

module.exports = { fetchBreedDescription };

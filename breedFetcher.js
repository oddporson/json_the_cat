const request = require('request'); // when you request from http, you need to request again in line 4 with a link
const breed = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  if (error) {
    console.log('Failed to request breed', error);
  }
  if (body) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed is not defined.');
    } else {
      let breedSummary = data[0].description;
      console.log(breedSummary);
    }
  }
});

const { fetchBreedDescription } = require('./breedFetcher');

const argv = process.argv.slice(2);
const inputBreed = argv[0];

fetchBreedDescription(inputBreed, (error, description) =>{
  if (error) {
    console.log("error", error);
  } else {
    console.log(description);
  }
});
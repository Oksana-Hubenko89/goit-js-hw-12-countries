const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}`).then(response =>
    response.json(), console.log('server answer')
  );
}

 export default { fetchCountries };
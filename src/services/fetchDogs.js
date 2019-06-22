const URL_API = 'https://dogtest-c855.restdb.io/rest/dogs';

const fetchDogs= () => fetch(URL_API, {
    method: "GET",
    headers: {
      'x-apikey' : '5d0e613652556062830a46a9',
      'Accept' : 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())

export default fetchDogs;


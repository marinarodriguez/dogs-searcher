const URL_API = 'https://dogtest-c855.restdb.io/rest/dogs';

const fetchDogs= () => fetch(URL_API).then(response => response.json());


export default fetchDogs;


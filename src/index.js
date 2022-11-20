import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

// import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

    fetch('https://restcountries.com/v3.1/all')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      createMarkup(data);
    })
    .catch(error => {
        console.log(error.message);
    });

// function createMarkup({name, capital, population, flags, languages}) {
// console.log(name.official);
// console.log(capital[0]);
// console.log(population);
// console.log(flags.svg);
// console.log(languages[0].name);
//   }

 

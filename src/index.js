import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

// import { fetchCountries } from './fetchCountries';
// let countriesName = null
const DEBOUNCE_DELAY = 300;


    function fetchCountries(name) {
      return fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
    
        .catch(err => console.log('Error!'));
    }


    
// function createMarkup({name}) {
// console.log(name.common);
//   }


  
  // function createMarkup({name, capital, population, flags, languages}) {
  //   console.log(name.official);
  //   console.log(capital[0]);
  //   console.log(population);
  //   console.log(flags.svg);
  //   console.log(languages[0].name);
  //     }

 

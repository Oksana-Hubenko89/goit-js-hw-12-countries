import './style.css';
import cardCountry from './templates/country.hbs';
import cardCountries from './templates/countries.hbs';
import getRefs from './get-refs';
import API from './fetchCountries';
//import { searcheError } from './pnotify';

import { error } from '@pnotify/core';

import '@pnotify/core/dist/BrightTheme.css';
import { info } from 'autoprefixer';

const debounce = require('lodash.debounce');
const refs = getRefs();

const debounceSearch = debounce(onSearch, 500);

refs.searchForm.addEventListener('input',debounceSearch) ;


function onSearch(event) {
 event.preventDefault();
    
  API.fetchCountries(event.target.value)
    .then(estimateResult).catch(console.log(error));   
  
}

function renderCountriesCard(countries) {
 const markup = cardCountry(countries);
  refs.cardContainer.innerHTML = markup;
}

function renderCountriesCardListr(countries) {
 const markupL = cardCountries(countries);
  refs.cardContainer.innerHTML = markupL;
}

function estimateResult(answer) {
 
  if (answer.status === 404) {
        return error(
          'The country for your request was not found.Please try again'
        );
      }
  if (answer.length > 10)
    return error(
      'Too many mutches found.Please enter a more specific query!');
  if (answer.length === 1)
    return renderCountriesCard(answer);
  if (answer.length > 1)
    return renderCountriesCardListr(answer);
  
}


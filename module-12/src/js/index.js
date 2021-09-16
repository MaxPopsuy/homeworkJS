import * as functions from '../functions.js';
import fetchCountries from './fetchCountries.js';
const debounce = require('lodash.debounce');
const inputForm = document.querySelector('.search__input');


const inputFn = () => {
        if (inputForm.value === '') {
            return;
        }
       fetchCountries(inputForm.value).then(functions.verifyDataLength);
 };

inputFormRef.addEventListener('input', debounce(() => {inputFn()}, 500));
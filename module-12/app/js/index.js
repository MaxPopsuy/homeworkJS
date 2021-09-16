import * as functions from '../functions.js';
import fetchCountries from './fetchCountries.js';
const debounce = require('lodash.debounce');
const inputForm = document.querySelector('.search__input');
const Handlebars = require("handlebars");

const inputFunc = () => {
        if (inputForm.value === '') {
            return;
        }
       fetchCountries(inputForm.value).then(functions.verifyLength);
 };

inputFormRef.addEventListener('input', debounce(() => {inputFunc()}, 500));
/* global document */
import m from 'mithril';
import getCountries from './data/get-countries';
import Start from './components/start';

getCountries();

m.route(document.body, '/', {
    '/': Start,
});

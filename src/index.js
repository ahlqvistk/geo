/* global document */
import m from 'mithril';

import getCountries from './data/get-countries';
import store from './store';

import Maps from './components/maps';
import Start from './components/start';

getCountries();

m.route(document.body, '/', {
    '/': Start,
    '/maps': Maps,
});

store.subscribe(m.redraw);

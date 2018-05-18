/* global document */
import m from 'mithril';
import getCountries from './data/get-countries';
import store from './store';
import Start from './components/start';

getCountries();

m.mount(document.body, Start);
store.subscribe(m.redraw);

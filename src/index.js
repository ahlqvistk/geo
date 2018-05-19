/* global document */
import m from 'mithril';
import {getCountries} from './commands';
import Capitals from './components/capitals';
import Maps from './components/maps';
import Start from './components/start';
import store from './store';

getCountries();

const views = {
    Start,
    Maps,
    Capitals,
};

store.subscribe(() => {
    m.mount(document.body, views[store.getState().view]);
    m.redraw();
});

/* global document */
import m from 'mithril';
import getCountries from './data/get-countries';
import store from './store';
import Start from './components/start';
import Maps from './components/maps';

getCountries();

function mountView(view) {
    switch (view) {
    case 'Start':
        m.mount(document.body, Start);
        break;
    case 'Maps':
        m.mount(document.body, Maps);
        break;
    default:
        break;
    }
}

store.subscribe(() => {
    mountView(store.getState().view);
    m.redraw();
});

/* global document */
import m from 'mithril';
import getCountries from './data/get-countries';
import store from './store';

import Start from './components/start';
import Maps from './components/maps';
import Capitals from './components/capitals';

getCountries();

const views = {
    Start,
    Maps,
    Capitals,
};

store.subscribe(() => {
    m.mount(document.body, {view: () => (
        m(views[store.getState().view], {
            state: store.getState(),
            dispatch: store.dispatch,
        })
    )});
    m.redraw();
});

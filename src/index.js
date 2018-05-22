/* global document */
import m from 'mithril';
import {
    getCountries,
    selectAlternatives,
    selectQuestions,
} from './commands';
import Capitals from './components/capitals';
import Maps from './components/maps';
import Result from './components/result';
import Start from './components/start';
import store from './store';

getCountries().then(() => {
    selectQuestions();
    selectAlternatives();
});

const views = {
    Start,
    Maps,
    Capitals,
    Result,
};

store.subscribe(() => {
    m.mount(document.body, views[store.getState().view]);
    m.redraw();
});

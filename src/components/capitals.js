import m from 'mithril';
import store from '../store';
import {
    questionsSelected,
} from '../actions';

export default {
    oninit() {
        const state = store.getState();

        if (!state.questions.length) {
            store.dispatch(questionsSelected(state.countries[0]));
        }
    },
    view: () => (
        <h1>Capitals</h1>
    ),
};

import m from 'mithril';
import {Countries} from '../types';
import randomFromArray from '../helpers/random-from-array';
import store from '../store';
import {
    questionsSelected,
} from '../actions';

export default {
    view: () => Countries.case({
        Unfetched: () => {
            return <h1>Unfetched</h1>;
        },
        Fetching: () => {
            return <h1>Fetching</h1>;
        },
        Fetched: () => {
            const state = store.getState();

            if (!state.questions.length) {
                const questions = randomFromArray(state.countries[0], 5);

                store.dispatch(questionsSelected(questions));
            }

            return (
                <nav>
                    <button>Maps</button>
                    <button>Flags</button>
                    <button>Capitals</button>
                    <button>Full game</button>
                </nav>
            );
        },
        Failed: () => {
            return <h1>Failed</h1>;
        },
    }, store.getState().countries),
};

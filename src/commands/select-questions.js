import * as events from '../events';
import randomFromArray from '../helpers/random-from-array';
import store from '../store';

export function selectQuestions() {
    const selectedQuestions = randomFromArray(store.getState().countries[0], 5);

    store.dispatch({
        type: events.QUESTIONS_SELECTED,
        payload: selectedQuestions,
    });
}

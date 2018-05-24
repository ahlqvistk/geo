import * as events from '../events';
import randomFromArray from '../helpers/random-from-array';
import store from '../store';

export function selectQuestions() {
    const filter = (x) => x.subregion;
    const selectedQuestions = randomFromArray(
        store.getState().countries[0],
        store.getState().noOfQuestions,
        filter
    );

    store.dispatch({
        type: events.QUESTIONS_SELECTED,
        payload: selectedQuestions,
    });
}

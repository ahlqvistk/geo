import * as events from '../events';
import randomFromArray from '../helpers/random-from-array';
import store from '../store';
import excluded from '../../config/excluded.json';

export function selectQuestions() {
    const filter = (x) => x.subregion && excluded.indexOf(x.alpha2Code) === -1;
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

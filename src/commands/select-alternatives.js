import * as events from '../events';
import randomFromArray from '../helpers/random-from-array';
import store from '../store';

export function selectAlternatives() {
    const state = store.getState();
    const countries = state.countries[0];
    const questions = state.questions;
    const questionIndex = state.questionIndex;
    const currentQuestion = questions[questionIndex];
    const filter = (country) => (
        country.name !== currentQuestion.name &&
        country.subregion === currentQuestion.subregion
    );
    const selectedAlternatives = randomFromArray(countries, 3, filter)
        .concat(currentQuestion);

    store.dispatch({
        type: events.ALTERNATIVES_SELECTED,
        payload: selectedAlternatives,
    });
}

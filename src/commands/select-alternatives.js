import * as events from '../events';
import randomFromArray from '../helpers/random-from-array';
import shuffleArray from '../helpers/shuffle-array';
import store from '../store';
import excluded from '../../config/excluded.json';

export function selectAlternatives() {
    const state = store.getState();
    const countries = state.countries[0];
    const questions = state.questions;
    const questionIndex = state.questionIndex;
    const currentQuestion = questions[questionIndex];
    const filter = (country) => (
        country.name !== currentQuestion.name &&
        country.subregion === currentQuestion.subregion &&
        excluded.indexOf(country.alpha2Code) === -1
    );
    const selectedAlternatives = shuffleArray(
        randomFromArray(countries, 3, filter).concat(currentQuestion)
    );

    store.dispatch({
        type: events.ALTERNATIVES_SELECTED,
        payload: selectedAlternatives,
    });
}

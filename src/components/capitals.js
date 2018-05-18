import m from 'mithril';
import randomFromArray from '../helpers/random-from-array';
import shuffleArray from '../helpers/shuffle-array';
import {
    questionsSelected,
} from '../actions';

export default {
    oninit({attrs}) {
        const {state, dispatch} = attrs;

        if (!state.questions.length) {
            const questions = randomFromArray(state.countries[0], 5);

            dispatch(questionsSelected(questions));
        }
    },
    view({attrs}) {
        const state = attrs.state;

        if (state.questions.length) {
            const currentQuestion = state.questions[state.currentQuestion];
            const filter = (country) => (
                country.name !== currentQuestion.name &&
                country.subregion === currentQuestion.subregion
            );
            const alternatives = shuffleArray(
                randomFromArray(state.countries[0], 3, filter)
                    .concat(currentQuestion)
            );

            return <div>
                <div>The capital of {currentQuestion.name}</div>
                <div>
                    {alternatives.map((country) => (
                        <button>{country.capital}</button>
                    ))}
                </div>
            </div>;
        }
        return;
    },
};

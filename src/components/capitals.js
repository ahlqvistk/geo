import m from 'mithril';
import randomFromArray from '../helpers/random-from-array';
import shuffleArray from '../helpers/shuffle-array';
import {
    alternativesSelected,
    alternativesCleared,
    currentQuestionIndexIncremented,
    questionsSelected,
} from '../actions';

export default {
    oninit({attrs}) {
        const {state, dispatch} = attrs;

        if (!state.questions.length) {
            const questions = randomFromArray(state.countries[0], 5);

            dispatch(questionsSelected(questions));
        } else if (state.questions.length && !state.alternatives.length) {
            const currentQuestion = state.questions[state.currentQuestionIndex];
            const filter = (country) => (
                country.name !== currentQuestion.name &&
                country.subregion === currentQuestion.subregion
            );
            const alternatives = shuffleArray(
                randomFromArray(state.countries[0], 3, filter)
                    .concat(currentQuestion)
            );

            dispatch(alternativesSelected(alternatives));
        }
    },
    view({attrs}) {
        const {state, dispatch} = attrs;

        if (state.questions.length && state.alternatives.length) {
            const currentQuestion = state.questions[state.currentQuestionIndex];

            return <div>
                <div>The capital of {currentQuestion.name}</div>
                <div>
                    {state.alternatives.map((country) => (
                        <button
                            onclick={() => {
                                dispatch(alternativesCleared());
                                dispatch(
                                    currentQuestionIndexIncremented(
                                        state.currentQuestionIndex
                                    )
                                );
                            }}
                        >{country.capital}</button>
                    ))}
                </div>
            </div>;
        }
        return;
    },
};

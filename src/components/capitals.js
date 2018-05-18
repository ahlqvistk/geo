import m from 'mithril';
import randomFromArray from '../helpers/random-from-array';
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

        return state.questions.length ?
            <div>
                <div>The capital of</div>
                <div>{state.questions[state.currentQuestion].name}</div>
            </div> : null;
    },
};

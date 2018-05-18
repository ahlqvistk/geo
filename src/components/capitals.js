import m from 'mithril';
import {
    questionsSelected,
} from '../actions';

export default {
    oninit({attrs}) {
        const {state, dispatch} = attrs;

        if (!state.questions.length) {
            dispatch(questionsSelected(state.countries[0]));
        }
    },
    view({attrs}) {
        const state = attrs.state;

        return (
            state.questions.length ?
                <div>
                    What is the capital
                    of {state.questions[state.currentQuestion].name}?
                </div> : null
        );
    },
};

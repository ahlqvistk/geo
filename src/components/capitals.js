import m from 'mithril';
import Alternative from './alternative';
import store from '../store';

export default {
    view() {
        const state = store.getState();
        const question = state.questions[state.questionIndex];
        const alternatives = state.alternatives;

        if (question && alternatives) {
            return (
                <div class="container">
                    <div class="question">
                        What is the capital of {question.name}?
                    </div>
                    <div class="alternatives">
                        {alternatives.map((alternative) => (
                            <Alternative name={alternative.name}>
                                {alternative.capital || alternative.name}
                            </Alternative>
                        ))}
                    </div>
                </div>
            );
        }
        return;
    },
};

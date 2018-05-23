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
                <div>
                    <div>Select the flag of {question.name}.</div>
                    <div>
                        {alternatives.map((alternative) => (
                            <Alternative name={alternative.name}>
                                <img class="flag" src={alternative.flag} />
                            </Alternative>
                        ))}
                    </div>
                </div>
            );
        }
        return;
    },
};

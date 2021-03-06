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
                        Select the flag of {question.name}
                    </div>
                    <div class="alternatives">
                        {alternatives.map((alternative) => (
                            <Alternative name={alternative.name}>
                                <img
                                    class="flag-image"
                                    src={`http://www.countryflags.io/${alternative.alpha2Code}/shiny/64.png`}
                                />
                            </Alternative>
                        ))}
                    </div>
                </div>
            );
        }
        return;
    },
};

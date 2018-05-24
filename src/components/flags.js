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
                            <Alternative
                                extraclass="flag-button"
                                name={alternative.name}
                            >
                                <object
                                    class="flag-image"
                                    data={`http://www.countryflags.io/${alternative.alpha2Code}/shiny/64.png`}
                                    type="image/png"
                                >
                                    <img
                                        class="flag-image-backup"
                                        src={alternative.flag}
                                    />
                                </object>
                            </Alternative>
                        ))}
                    </div>
                </div>
            );
        }
        return;
    },
};

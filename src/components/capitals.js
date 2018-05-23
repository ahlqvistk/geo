import m from 'mithril';
import {makeGuess} from '../commands/make-guess';
import alternativeButtonClass from '../helpers/alternative-button-class';
import store from '../store';

export default {
    view() {
        const state = store.getState();
        const question = state.questions[state.questionIndex];
        const alternatives = state.alternatives;

        if (question && alternatives) {
            return (
                <div>
                    <div>What is the capital of {question.name}?</div>
                    <div>
                        {alternatives.map((alternative) => (
                            <button
                                class={alternativeButtonClass(
                                    alternative.name,
                                    question.name,
                                    state.status
                                )}
                                onclick={() => {
                                    state.status.case({
                                        Guessing: () => makeGuess(
                                            alternative.name,
                                            state.questionIndex
                                        ),
                                        _: () => false,
                                    });
                                }}
                            >{alternative.capital || alternative.name}</button>
                        ))}
                    </div>
                </div>
            );
        }
        return;
    },
};

import m from 'mithril';
import {makeGuess} from '../commands/make-guess';
import store from '../store';

export default {
    view() {
        const state = store.getState();
        const question = state.questions[state.questionIndex];
        const alternatives = state.alternatives;

        function buttonClass(buttonName) {
            return state.status.case({
                Guessing: () => '',
                Guessed: (guessName) => {
                    if (buttonName === guessName) {
                        return 'selectedAnswer';
                    }
                    return '';
                },
                Result: (guessName) => {
                    if (buttonName === question.name) {
                        return 'correctAnswer';
                    } else if (buttonName === guessName) {
                        return 'wrongAnswer';
                    } else {
                        return '';
                    }
                },
                _: () => '',
            });
        }

        if (question && alternatives) {
            return (
                <div>
                    <div>What is the capital of {question.name}?</div>
                    <div>
                        {alternatives.map((alternative) => (
                            <button
                                class={buttonClass(alternative.name)}
                                onclick={() => makeGuess(
                                    alternative.name,
                                    state.questionIndex
                                )}
                            >{alternative.capital || alternative.name}</button>
                        ))}
                    </div>
                </div>
            );
        }
        return;
    },
};

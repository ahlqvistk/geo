import m from 'mithril';
import {makeGuess} from '../commands/make-guess';
import alternativeClass from '../helpers/alternative-class';
import store from '../store';

export default {
    view(vnode) {
        const state = store.getState();
        const question = state.questions[state.questionIndex];

        return (
            <button
                class={alternativeClass(
                    vnode.attrs.name,
                    question.name,
                    state.status
                ) + ` ${vnode.attrs.extraclass}`}
                onclick={() => {
                    state.status.case({
                        Guessing: () => makeGuess(
                            vnode.attrs.name,
                            state.questionIndex
                        ),
                        _: () => false,
                    });
                }}
            >{vnode.children}</button>
        );
    },
};

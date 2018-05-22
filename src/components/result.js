import m from 'mithril';
import store from '../store';

export default {
    view() {
        const state = store.getState();
        const noOfQuestions = state.noOfQuestions;
        const points = state.points;

        return (
            <div>You got {points}/{noOfQuestions} points</div>
        );
    },
};

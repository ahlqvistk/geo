/* globals setTimeout */
import * as events from '../events';
import {
    selectAlternatives,
    selectQuestions,
} from '../commands';
import store from '../store';

export function endGame() {
    store.dispatch({
        type: events.QUESTION_INDEX_RESET,
        payload: 0,
    });

    store.dispatch({
        type: events.VIEW_CHANGED,
        payload: 'Result',
    });

    selectQuestions();
    selectAlternatives();

    setTimeout(() => {
        store.dispatch({
            type: events.VIEW_CHANGED,
            payload: 'Start',
        });

        store.dispatch({
            type: events.POINTS_RESET,
            payload: 0,
        });
    }, 3000);
}

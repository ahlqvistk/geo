/* global setTimeout */
import {selectAlternatives} from './';
import * as events from '../events';
import store from '../store';
import {Status} from '../types';

export function makeGuess(countryName, questionIndex) {
    store.dispatch({
        type: events.MADE_A_GUESS,
        payload: Status.Guessed(countryName),
    });

    setTimeout(() => {
        store.dispatch({
            type: events.SHOWED_RESULT,
            payload: Status.Result(countryName),
        });
    }, 3000);

    setTimeout(() => {
        store.dispatch({
            type: events.STATUS_RESET,
            payload: Status.Guessing,
        });

        if (questionIndex >= store.getState().questions.length - 1) {
            store.dispatch({
                type: events.QUESTION_INDEX_RESET,
                payload: 0,
            });

            store.dispatch({
                type: events.VIEW_CHANGED,
                payload: 'Start',
            });
        } else {
            store.dispatch({
                type: events.QUESTION_INDEX_INCREMENTED,
                payload: questionIndex + 1,
            });
        }

        selectAlternatives();
    }, 6000);
}

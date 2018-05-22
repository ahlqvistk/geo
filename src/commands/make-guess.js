/* global setTimeout */
import {
    endGame,
    selectAlternatives,
} from './';
import * as events from '../events';
import store from '../store';
import {Status} from '../types';

export function makeGuess(countryName, questionIndex) {
    const state = store.getState();

    if (countryName === state.questions[state.questionIndex].name) {
        store.dispatch({
            type: events.POINT_ADDED,
            payload: state.points + 1,
        });
    }

    store.dispatch({
        type: events.MADE_A_GUESS,
        payload: Status.Guessed(countryName),
    });

    setTimeout(() => {
        store.dispatch({
            type: events.SHOWED_RESULT,
            payload: Status.Result(countryName),
        });
    }, 1000);

    setTimeout(() => {
        store.dispatch({
            type: events.STATUS_RESET,
            payload: Status.Guessing,
        });

        if (questionIndex >= state.noOfQuestions - 1) {
            endGame();
        } else {
            store.dispatch({
                type: events.QUESTION_INDEX_INCREMENTED,
                payload: questionIndex + 1,
            });
        }

        selectAlternatives();
    }, 4000);
}

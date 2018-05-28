import {combineReducers} from 'redux';
import {
    Countries,
    Status,
} from './types';

export default combineReducers({
    view,
    countries,
    questions,
    alternatives,
    noOfQuestions,
    questionIndex,
    status,
    points,
    userPosition,
    offline,
});

/*
 * view
 */
export const VIEW_CHANGED = 'VIEW_CHANGED';

function view(state = 'Start', action) {
    switch (action.type) {
    case VIEW_CHANGED:
        return action.payload;
    default:
        return state;
    }
}

/*
 * countries
 */
export const FETCHING_COUNTRIES = 'FETCHING_COUNTRIES';
export const COUNTRIES_FETCHED = 'COUNTRIES_FETCHED';
export const FETCHING_COUNTRIES_FAILED = 'FETCHING_COUNTRIES_FAILED';

function countries(state = Countries.Unfetched, action) {
    switch (action.type) {
    case FETCHING_COUNTRIES:
        return action.payload;
    case COUNTRIES_FETCHED:
        return action.payload;
    case FETCHING_COUNTRIES_FAILED:
        return action.payload;
    default:
        return state;
    }
}

/*
 * questions
 */
export const QUESTIONS_SELECTED = 'QUESTIONS_SELECTED';

function questions(state = [], action) {
    switch (action.type) {
    case QUESTIONS_SELECTED:
        return action.payload;
    default:
        return state;
    }
}

/*
 * alternatives
 */
export const ALTERNATIVES_SELECTED = 'ALTERNATIVES_SELECTED';
export const ALTERNATIVES_CLEARED = 'ALTERNATIVES_CLEARED';

function alternatives(state = [], action) {
    switch (action.type) {
    case ALTERNATIVES_SELECTED:
        return action.payload;
    case ALTERNATIVES_CLEARED:
        return action.payload;
    default:
        return state;
    }
}

/*
 * noOfQuestions
 */
function noOfQuestions(state = 5) {
    return state;
}

/*
 * questionIndex
 */
export const QUESTION_INDEX_INCREMENTED = 'QUESTION_INDEX_INCREMENTED';
export const QUESTION_INDEX_RESET = 'QUESTION_INDEX_RESET';

function questionIndex(state = 0, action) {
    switch (action.type) {
    case QUESTION_INDEX_INCREMENTED:
        return action.payload;
    case QUESTION_INDEX_RESET:
        return action.payload;
    default:
        return state;
    }
}

/*
 * status
 */
export const MADE_A_GUESS = 'MADE_A_GUESS';
export const SHOWED_RESULT = 'SHOWED_RESULT';
export const STATUS_RESET = 'STATUS_RESET';

function status(state = Status.Guessing, action) {
    switch (action.type) {
    case MADE_A_GUESS:
        return action.payload;
    case SHOWED_RESULT:
        return action.payload;
    case STATUS_RESET:
        return action.payload;
    default:
        return state;
    }
}

/*
 * points
 */
export const POINT_ADDED = 'POINT_ADDED';
export const POINTS_RESET = 'POINTS_RESET';

function points(state = 0, action) {
    switch (action.type) {
    case POINT_ADDED:
        return action.payload;
    case POINTS_RESET:
        return action.payload;
    default:
        return state;
    }
}

/*
 * userPosition
 */
export const USER_POSITION_SET = 'USER_POSITION_SET';

function userPosition(state = [], action) {
    switch (action.type) {
    case USER_POSITION_SET:
        return action.payload;
    default:
        return state;
    }
}

/*
 * offline
 */
export const APP_IS_OFFLINE = 'APP_IS_OFFLINE';

function offline(state = false, action) {
    switch (action.type) {
    case APP_IS_OFFLINE:
        return action.payload;
    default:
        return state;
    }
}

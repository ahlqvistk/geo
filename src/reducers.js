import {combineReducers} from 'redux';
import {Countries} from './types';

export default combineReducers({
    view,
    countries,
    questions,
    alternatives,
    currentQuestionIndex,
});

function view(state = 'Start', action) {
    switch (action.type) {
    case 'VIEW_CHANGED':
        return action.payload;
    default:
        return state;
    }
}

function countries(state = Countries.Unfetched, action) {
    switch (action.type) {
    case 'FETCHING_COUNTRIES':
        return Countries.Fetching;
    case 'COUNTRIES_FETCHED':
        return Countries.Fetched(action.payload);
    case 'FETCHING_COUNTRIES_FAILED':
        return Countries.Failed(action.payload);
    default:
        return state;
    }
}

function questions(state = [], action) {
    switch (action.type) {
    case 'QUESTIONS_SELECTED':
        return action.payload;
    default:
        return state;
    }
}

function alternatives(state = [], action) {
    switch (action.type) {
    case 'ALTERNATIVES_SELECTED':
        return action.payload;
    case 'ALTERNATIVES_CLEARED':
        return [];
    default:
        return state;
    }
}

function currentQuestionIndex(state = 0, action) {
    switch (action.type) {
    case 'CURRENT_QUESTION_INDEX_INCREMENTED':
        return action.payload + 1;
    case 'CURRENT_QUESTION_INDEX_RESET':
        return 0;
    default:
        return state;
    }
}

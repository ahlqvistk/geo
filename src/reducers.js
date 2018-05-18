import {combineReducers} from 'redux';
import {Countries} from './types';

export default combineReducers({
    countries,
    countryAlternatives,
    countryQuestions,
});

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

function countryAlternatives(state = [], action) {
    switch (action.type) {
    case 'COUNTRY_ALTERNATIVES_SELECTED':
        return action.payload;
    default:
        return state;
    }
}

function countryQuestions(state = [], action) {
    switch (action.type) {
    case 'COUNTRY_QUESTIONS_SELECTED':
        return action.payload;
    default:
        return state;
    }
}

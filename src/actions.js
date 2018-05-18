export const fetchingCountries = () => ({
    type: 'FETCHING_COUNTRIES',
});

export const countriesFetched = (countries) => ({
    type: 'COUNTRIES_FETCHED',
    payload: countries,
});

export const fetchingCountriesFailed = (err) => ({
    type: 'FETCHING_COUNTRIES_FAILED',
    payload: err,
});

export const countryQuestionsSelected = (questions) => ({
    type: 'COUNTRY_QUESTIONS_SELECTED',
    payload: questions,
});

export const countryAlternativesSelected = (alternatives) => ({
    type: 'COUNTRY_ALTERNATIVES_SELECTED',
    payload: alternatives,
});

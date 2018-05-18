/*
 *  view
 */
export const viewChanged = (view) => ({
    type: 'VIEW_CHANGED',
    payload: view,
});

/*
 * countries
 */
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

/*
 * questions
 */
export const questionsSelected = (questions) => ({
    type: 'QUESTIONS_SELECTED',
    payload: questions,
});

/*
 * alternatives
 */
export const alternativesSelected = (alternatives) => ({
    type: 'ALTERNATIVES_SELECTED',
    payload: alternatives,
});

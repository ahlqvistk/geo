import m from 'mithril';
import * as events from '../events';
import store from '../store';
import {Countries} from '../types';

export function getCountries() {
    store.dispatch({
        type: events.FETCHING_COUNTRIES,
        payload: Countries.Fetching,
    });

    m.request({
        method: 'GET',
        url: 'https://restcountries.eu/rest/v2/all',
    }).then((res) => {
        store.dispatch({
            type: events.COUNTRIES_FETCHED,
            payload: Countries.Fetched(res),
        });
    }).catch((err) => {
        store.dispatch({
            type: events.FETCHING_COUNTRIES_FAILED,
            payload: Countries.Failed(err),
        });
    });
}

import m from 'mithril';
import store from '../store';
import {
    fetchingCountries,
    countriesFetched,
    fetchingCountriesFailed,
} from './actions';

export default function() {
    store.dispatch(fetchingCountries());

    m.request({
        method: 'GET',
        url: 'https://restcountries.eu/rest/v2/all',
    }).then((res) => {
        store.dispatch(countriesFetched(res));
    }).catch((err) => {
        store.dispatch(fetchingCountriesFailed(err));
    });
}

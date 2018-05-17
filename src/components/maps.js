import m from 'mithril';

import {Countries} from '../types';
import store from '../store';

export default {
    view: () => Countries.case({
        Unfetched: () => {
            return <h1>Unfetched</h1>;
        },
        Fetching: () => {
            return <h1>Fetching</h1>;
        },
        Fetched: () => {
            return <h1>Fetched</h1>;
        },
        Failed: () => {
            return <h1>Failed</h1>;
        },
    }, store.getState().countries),
};

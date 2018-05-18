import m from 'mithril';
import {Countries} from '../types';
import store from '../store';
import {
    viewChanged,
} from '../actions';

export default {
    view: () => Countries.case({
        Unfetched: () => {
            return <h1>Unfetched</h1>;
        },
        Fetching: () => {
            return <h1>Fetching</h1>;
        },
        Fetched: () => {
            return (
                <nav>
                    <button
                        onclick={() => store.dispatch(viewChanged('Maps'))}
                    >Maps</button>
                    <button>Flags</button>
                    <button
                        onclick={() => store.dispatch(viewChanged('Capitals'))}
                    >Capitals</button>
                    <button>Full game</button>
                </nav>
            );
        },
        Failed: () => {
            return <h1>Failed</h1>;
        },
    }, store.getState().countries),
};

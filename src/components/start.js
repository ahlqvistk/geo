import m from 'mithril';
import store from '../store';
import {Countries} from '../types';

export default {
    view() {
        const state = store.getState();

        return Countries.case({
            Unfetched: () => {
                return <h1>Unfetched</h1>;
            },
            Fetching: () => {
                return <h1>Fetching</h1>;
            },
            Fetched: () => {
                return (
                    <nav>
                        <button>Maps</button>
                        <button>Flags</button>
                        <button>Capitals</button>
                        <button>Full game</button>
                    </nav>
                );
            },
            Failed: () => {
                return <h1>Failed</h1>;
            },
        }, state.countries);
    },
};

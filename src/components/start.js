import m from 'mithril';
import {changeView} from '../commands';
import store from '../store';

export default {
    view() {
        const state = store.getState();

        return state.countries.case({
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
                            onclick={() => changeView('Maps')}
                        >Maps</button>
                        <button
                            onclick={() => changeView('Flags')}
                        >Flags</button>
                        <button
                            onclick={() => changeView('Capitals')}
                        >Capitals</button>
                    </nav>
                );
            },
            Failed: () => {
                return <h1>Failed</h1>;
            },
        });
    },
};

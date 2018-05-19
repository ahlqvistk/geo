import m from 'mithril';
import {changeView} from '../commands';
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
                        <button
                            onclick={() => changeView('Maps')}
                        >Maps</button>
                        <button
                            onclick={() => changeView('Flags')}
                        >Flags</button>
                        <button
                            onclick={() => changeView('Capitals')}
                        >Capitals</button>
                        <button
                            onclick={() => changeView('FullGame')}
                        >Full game</button>
                    </nav>
                );
            },
            Failed: () => {
                return <h1>Failed</h1>;
            },
        }, state.countries);
    },
};

import m from 'mithril';
import {changeView} from '../commands';
import store from '../store';

export default {
    view() {
        const state = store.getState();

        return state.countries.case({
            Unfetched: () => {
                return;
            },
            Fetching: () => {
                return <h1>Fetching Data...</h1>;
            },
            Fetched: () => {
                if (state.offline) {
                    return (
                        <div class="start">
                            <button
                                onclick={() => changeView('Capitals')}
                            >Capitals</button>
                            <div>
                                Offline mode: only Capitals game available
                            </div>
                        </div>
                    );
                }

                return (
                    <div class="start">
                        <button
                            onclick={() => changeView('Maps')}
                        >Maps</button>
                        <button
                            onclick={() => changeView('Flags')}
                        >Flags</button>
                        <button
                            onclick={() => changeView('Capitals')}
                        >Capitals</button>
                    </div>
                );
            },
            Failed: () => {
                return <h1>Fetching Data Failed</h1>;
            },
        });
    },
};

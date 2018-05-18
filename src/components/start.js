import m from 'mithril';
import {Countries} from '../types';
import {
    viewChanged,
} from '../actions';

export default {
    view({attrs}) {
        const {state, dispatch} = attrs;

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
                            onclick={() => dispatch(viewChanged('Maps'))}
                        >Maps</button>
                        <button>Flags</button>
                        <button
                            onclick={() => dispatch(viewChanged('Capitals'))}
                        >Capitals</button>
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

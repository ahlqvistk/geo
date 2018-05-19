import * as events from '../events';
import store from '../store';

export function changeView(view) {
    store.dispatch({
        type: events.VIEW_CHANGED,
        payload: view,
    });
}

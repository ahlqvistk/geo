/* global navigator */
import * as events from '../events';
import store from '../store';

export function getUserPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                store.dispatch({
                    type: events.USER_POSITION_SET,
                    payload: [pos.coords.latitude, pos.coords.longitude],
                });
            }
        );
    }
}

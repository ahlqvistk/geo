/* global document google */
import m from 'mithril';
import Alternative from './alternative';
import store from '../store';
import styles from '../styles/google-maps.json';

export default {
    currentCountry: '',
    map: null,
    mapCreated: false,
    marker: null,
    userPositionMarker: null,
    oncreate() {
        const state = store.getState();
        const question = state.questions[state.questionIndex];
        const position = {lat: question.latlng[0], lng: question.latlng[1]};

        if (this.currentCountry !== question.name && !this.mapCreated) {
            const center = new google.maps.LatLng(position.lat, position.lng);

            this.map = new google.maps.Map(document.getElementById('map'), {
                position,
                zoom: 4,
                styles,
            });

            this.marker = new google.maps.Marker({
                position,
                map: this.map,
            });

            this.userPositionMarker = new google.maps.Marker({
                clickable: false,
                icon: new google.maps.MarkerImage(
                    'https://maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                    new google.maps.Size(22, 22),
                    new google.maps.Point(0, 18),
                    new google.maps.Point(11, 11)
                ),
                shadow: null,
                zIndex: 999,
                map: this.map,
            });

            this.map.panTo(center);
            this.currentCountry = question.name;
            this.mapCreated = true;
        }
    },
    view() {
        const state = store.getState();
        const question = state.questions[state.questionIndex];
        const alternatives = state.alternatives;
        const position = {lat: question.latlng[0], lng: question.latlng[1]};

        if (this.currentCountry !== question.name && this.mapCreated) {
            const center = new google.maps.LatLng(position.lat, position.lng);

            this.marker.setMap(null);
            this.marker = new google.maps.Marker({
                position,
                map: this.map,
            });

            this.map.panTo(center);
            this.currentCountry = question.name;
        }

        if (state.userPosition && this.mapCreated) {
            const userPosition = new google.maps.LatLng(
                state.userPosition[0],
                state.userPosition[1]
            );

            this.userPositionMarker.setPosition(userPosition);
        }

        if (question && alternatives) {
            return (
                <div>
                    <div>What is the country on the map?</div>
                    <div class="map" id="map"></div>
                    <div class="alterinatives">
                        {alternatives.map((alternative) => (
                            <Alternative name={alternative.name}>
                                {alternative.name}
                            </Alternative>
                        ))}
                    </div>
                </div>
            );
        }
        return;
    },
};

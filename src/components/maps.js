/* global document google */
import m from 'mithril';
import Alternative from './alternative';
import store from '../store';

export default {
    currentCountry: '',
    map: null,
    mapCreated: false,
    marker: null,
    oncreate() {
        const state = store.getState();
        const question = state.questions[state.questionIndex];
        const position = {lat: question.latlng[0], lng: question.latlng[1]};

        if (this.currentCountry !== question.name && !this.mapCreated) {
            const center = new google.maps.LatLng(position.lat, position.lng);

            this.map = new google.maps.Map(document.getElementById('map'), {
                position,
                zoom: 4,
            });

            this.marker = new google.maps.Marker({
                position,
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

        if (question && alternatives) {
            return (
                <div>
                    <div>What is the country on the map?</div>
                    <div class="map" id="map"></div>
                    <div>
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

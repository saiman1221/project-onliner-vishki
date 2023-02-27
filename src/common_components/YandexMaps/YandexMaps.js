import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

export const YandexMaps = (props) => (
    <YMaps>
        <Map defaultState={{ center: props.address.point, zoom: props.address.zoom}} width={"100%"} height={'350px'}>
            <Placemark geometry={props.address.point} />
        </Map>
    </YMaps>
);
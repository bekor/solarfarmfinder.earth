'use client'

import {ReactNode} from "react";
import {Libraries, useJsApiLoader} from "@react-google-maps/api";
import {
    APIProvider,
    Map,
    useMap,
    AdvancedMarker,
    MapCameraChangedEvent,
    Pin
} from '@vis.gl/react-google-maps';

import styles from './GoogleMapLoader.module.css';
export default function GoogleMapLoader() {
    return (
        <div className={styles.googleMap}>
        <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                     onLoad={() => console.log('Maps API has loaded.')}
            >
            <Map
                defaultZoom={13}
                defaultCenter={{lat: -33.860664, lng: 151.208138}}

                // mapId='da37f3254c6a6d1c'
            >
            </Map>
        </APIProvider>
        </div>);
}
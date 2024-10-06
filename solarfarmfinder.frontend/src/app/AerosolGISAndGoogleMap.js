'use client'

import React, {useCallback, useRef} from "react";
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";

import styles from './GoogleMapLoader.module.css';
import {error} from "next/dist/build/output/log";

let center = {
    lat: 47.5044531,
    lng:  19.0583022,
};
const containerStyle = {
    width: '100vw',
    height: '100vh',
};

export default function GoogleMapLoader() {
    const mapRef = useRef(null);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Replace with your Google Maps API key
    });

    const onLoad = useCallback((map) => {
        mapRef.current = map;

        // Define the NASA GIBS tile layer
        const gibsTileLayer = new window.google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                const baseURL = 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_Aerosol/default/';
                const date = new Date('2013-12-02').toISOString().split('T')[0]; // Use today's date
                const tileMatrixSet = 'GoogleMapsCompatible_Level6';
                const testUrl = `${baseURL}${date}/${tileMatrixSet}/${zoom}/${coord.y}/${coord.x}.jpg`
                console.log(testUrl);
                return `${baseURL}${date}/${tileMatrixSet}/${zoom}/${coord.y}/${coord.x}.jpg`;
            },
            tileSize: new window.google.maps.Size(256, 256),
            maxZoom: 8,
            name: 'NASA GIBS',
        });
        map.overlayMapTypes.insertAt(0, gibsTileLayer);
    }, []);
    const onUnmount = useCallback(() => {
        mapRef.current = null;
    }, []);

    return isLoaded ? (
        <div className={styles.googleMap}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                onLoad={onLoad}
                onUnmount={onUnmount}
                mapTypeId={'satellite'}
                tilt={0}
            />
        </div>
    ) : (
        <div>Loading...</div>
    );
}
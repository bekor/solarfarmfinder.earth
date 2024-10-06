'use client'
import styles from './GoogleMapLoader.module.css';

import React, { useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Styling for the map container
const containerStyle = {
  width: '100vw',
  height: '100vh',
};

// Default center and zoom of the map
const center = {
  lat: 0,
  lng: 0,
};

function MyMapComponent() {
//        var mapOptions = {
//            center: new google.maps.LatLng(21, 78),
//            zoom: 5,
//            maxZoom: 6
//          };
//
//          var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//
//          var getTileUrl = function (tile, zoom) {
//            return '//gibs.earthdata.nasa.gov/wmts/epsg3857/best/' +
//              'MODIS_Terra_Aerosol/default/2013-12-02/' +
//              'GoogleMapsCompatible_Level6/' +
//              zoom + '/' + tile.y + '/' +
//              tile.x + '.png';
//          };
//
//          var layerOptions = {
//            alt: 'MODIS_Terra_Aerosol',
//            getTileUrl: getTileUrl,
//            maxZoom: 6,
//            minZoom: 1,
//            name: 'MODIS_Terra_Aerosol',
//            tileSize: new google.maps.Size(256, 256),
//            opacity: 0.5
//          };
//
//          var imageMapType = new google.maps.ImageMapType(layerOptions);
//          map.overlayMapTypes.insertAt(0, imageMapType);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API key
  });

  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;

    // Define the NASA GIBS tile layer
    const gibsTileLayer = new window.google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        const baseURL = 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_SNPP_Clear_Sky_Confidence_Day/default/';
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

    // Overlay the NASA GIBS layer on the map
    map.overlayMapTypes.insertAt(0, gibsTileLayer);
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <div>Loading...</div>
  );

//    return map.overlayMapTypes.insertAt(0, imageMapType);
}

export default React.memo(MyMapComponent);
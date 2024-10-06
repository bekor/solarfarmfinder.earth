window.onload = function () {
    var mapOptions = {
        center: new google.maps.LatLng(21, 78),
        zoom: 5,
        maxZoom: 6
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var getTileUrl = function (tile, zoom) {
        return '//gibs.earthdata.nasa.gov/wmts/epsg3857/best/' +
            'OMI_Aerosol_Index/default/2013-12-02/' +
            'GoogleMapsCompatible_Level6/' +
            zoom + '/' + tile.y + '/' +
            tile.x + '.png';
    };

    var layerOptions = {
        alt: 'OMI_Aerosol_Index',
        getTileUrl: getTileUrl,
        maxZoom: 20,
        minZoom: 2,
        name: 'OMI_Aerosol_Index',
        tileSize: new google.maps.Size(256, 256),
        opacity: 0.7
    };

    var imageMapType = new google.maps.ImageMapType(layerOptions);
    map.overlayMapTypes.insertAt(0, imageMapType);
};
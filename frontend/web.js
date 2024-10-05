
window.onload = function () {
    var mapOptions = {
        center: new google.maps.LatLng(45, 45),
        zoom: 5,
        maxZoom: 10,
        mapTypeId: 'satellite'
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);


    var imageMapType = new google.maps.ImageMapType(layerOptions);
    map.overlayMapTypes.insertAt(0, imageMapType);
};
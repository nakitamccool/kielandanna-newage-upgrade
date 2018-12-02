/**
 * Created by nakita on 05/05/2017.
 */

function initMap() {
    //Location coordinates
    var church = {lat: 51.910518, lng: -8.170365};
    var reception = {lat: 51.911443, lng: -8.063080};
    var bnb = {lat: 51.872086, lng: -7.967201 };
    var mapOptions = {
        zoom: 11,
        center: reception,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        /*
       * gesture handling mode set to 'cooperative',
       * which means that on a mobile device, the user must swipe with one
       * finger to scroll the page and two fingers to pan the map.
       */
        gestureHandling: 'cooperative',
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },

        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        },

        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        },
        streetViewControl: false,
        overviewMapControl: false,

        styles: [{
            "stylers": [{
                "saturation": -100
            }, {
                "gamma": 1
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": 50
            }, {
                "gamma": 0
            }, {
                "hue": "#50a5d1"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#333333"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [{
                "weight": 0.5
            }, {
                "color": "#333333"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [{
                "gamma": 1
            }, {
                "saturation": 50
            }]
        }]
    };

    var map = new google.maps.Map(document.getElementById('map'),mapOptions);

    //Church marker and pop up box
    var churchPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Wedding Ceremony</h3>' +
        '<div id="bodyContent">' +
        '<p><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">The Holy Rosary Church, Midleton, Co. Cork, P25 WF65</span></p>' +
        '<p><a href="http://midletonparish.ie/" target=_blank>' + '<i class="mapicon fa fa-globe"><span class="mapdetail">www.midletonparish.ie</span></i></a></p>' +
        '<p><a href="tel:0214219000"><i class="mapicon fa fa-phone"><span class="mapdetail">(021) 421 9000</span></i></a></p>' +
        '</div>' +
        '</div>';

    var churchinfowindow = new google.maps.InfoWindow({
        content: churchPopUp
    });
    var churchmarker = new google.maps.Marker({
        position: church,
        title: 'Wedding ceremony',
        map: map,
        icon: "assets/img/mapmarkers/church.png"
    });
    churchmarker.addListener('click', function () {
        churchinfowindow.open(map, churchmarker);
        receptioninfowindow.close(map, receptionmarker);
        bnbinfowindow.close(map, bnbmarker);
    });

    //Reception marker and pop up box
    var receptionPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Wedding Reception & Hotel Accommodation</h3>' +
        '<div id="bodyContent">' +
        '<p><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">Castlemartyr Resort, Castlemartyr, Co. Cork, P25 X300</span></p>' +
        '<p><a href="http://www.castlemartyrresort.ie" target=_blank>' + '<i class="mapicon fa fa-globe"><span class="mapdetail">www.castlemartyrresort.ie</span></i></a></p>' +
        '<p><a href="tel:0214636508"><i class="mapicon fa fa-phone"><span class="mapdetail">(021) 463 6508</span></i></a></p>' +
        '</div>' +
        '</div>';

    var receptioninfowindow = new google.maps.InfoWindow({
        content: receptionPopUp
    });
    var receptionmarker = new google.maps.Marker({
        position: reception,
        title: 'Wedding reception',
        map: map,
        icon: "assets/img/mapmarkers/hotel.png"
    });
    receptionmarker.addListener('click', function () {
        receptioninfowindow.open(map, receptionmarker);
        churchinfowindow.close(map, churchmarker);
        bnbinfowindow.close(map, bnbmarker);
    });

    //BnB marker and pop up box
    var bnbPopUp = '<div id="content">' +
        '<div id="siteNot ice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">B&B Accommodation</h3>' +
        '<div id="bodyContent">' +
        '<p><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">Castle Farm B&B, Ballycrenane, Co. Cork, P25 ET65</span></p>' +
        '<p><a href="http://www.castlefarmbb.com" target=_blank>' + '<i class="mapicon fa fa-globe"><span class="mapdetail">www.castlefarmbb.com</span></i></a></p>' +
        '<p><a href="tel:02498165"><i class="mapicon fa fa-phone"><span class="mapdetail">(024) 98165</span></i></a></p>' +
        '</div>' +
        '</div>';
    var bnbinfowindow = new google.maps.InfoWindow({
        content: bnbPopUp
    });
    var bnbmarker = new google.maps.Marker({
        position: bnb,
        title: 'BnB accommodation',
        map: map,
        icon: "assets/img/mapmarkers/bnb.png"
    });
    bnbmarker.addListener('click', function () {
        bnbinfowindow.open(map, bnbmarker);
        churchinfowindow.close(map, churchmarker);
        receptioninfowindow.close(map, receptionmarker);
    });

}
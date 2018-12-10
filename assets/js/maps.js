function initMap() {
    //Location coordinates
    var church = {lat: 52.914711, lng: -7.345970};
    var reception = {lat: 52.846400, lng: -7.401000}; 
    var mapOptions = {
        zoom: 10,
        center: {lat: 52.948967, lng: -7.304582},
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
        '<h3 class="pinktitle">Wedding Ceremony</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/dR3QRJuArBN2" target="_blank"><i class="mapicon fas fa-map-marker"></i><span class="mapdetail">The Church of the Most Holy Rosary, Knocknamoe Abbeyleix, Co. Laois</a></p>' +
        '<p><a href="https://goo.gl/maps/dR3QRJuArBN2" target="_blank"><i class="mapicon fas fa-directions"></i><span class="mapdetail">Click here for directions</span></a></p>' +
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
    });

    //Reception marker and pop up box
    var receptionPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 class="pinktitle">Wedding Reception</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/V3b5TGwGp6F2" target="_blank"><i class="mapicon fas fa-map-marker"></i><span class="mapdetail">Castle Durrow, Castleview, Durrow, Co. Laois, R32 EA02</span></a></p>' +
        '<p><a href="https://goo.gl/maps/V3b5TGwGp6F2" target="_blank"><i class="mapicon fas fa-directions"></i><span class="mapdetail">Click here for directions</span></a></p>' +
        '<p><a href="https://www.castledurrow.com/" "target=_blank">' + '<i class="mapicon fas fa-globe"></i><span class="mapdetail">www.castledurrow.com</span></a></p>' +
        '<p><a href="tel:0578736555"><i class="mapicon fas fa-phone"></i><span class="mapdetail">(057) 873 6555</span></a></p>' +
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
    });
}
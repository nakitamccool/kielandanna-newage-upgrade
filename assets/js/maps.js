/**
 * Created by nakita on 05/05/2017.
 */

function initMap() {
    //Location coordinates
    var church = {lat: 52.987434, lng: -7.142769};
    var sandymountbb = {lat: 52.908363, lng: -7.381234};  
    var castletownbb = {lat: 52.870125, lng: -7.588713};  
    var acornbb = {lat: 52.838132, lng: -7.437459};
    var castlearms = {lat: 52.845507, lng: -7.395564 }; 
    var ashbrookarms = {lat: 52.846518, lng: -7.394223 }; 
    var reception = {lat: 52.846476, lng: -7.400311}; 
    var mapOptions = {
        zoom: 14,
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
        '<h3 id="firstHeading" class="firstHeading">The Church of the Most Holy Rosary</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/dR3QRJuArBN2" target="_blank"><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">Knocknamoe, Abbeyleix, Co. Laois</span></a></p>' +
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
        castlearmsinfowindow.close(map, castlearmsmarker);
        sandymountbbinfowindow.close(map, sandymountbbmarker);
        ashbrookarmsinfowindow.close(map, ashbrookarmsmarker);
        castletownbbinfowindow.close(map, castletownbbmarker);
        acornbbinfowindow.close(map, acornbbmarker);
    });


    //castlearms marker and pop up box
    var castlearmsPopUp = '<div id="content">' +
        '<div id="siteNot ice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Castle Arms Hotel</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/tbzMSiUA1c32" target="_blank"><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">The Square, Durrow Townparks, Co. Laois</span></a></p>' +
        '<p><a href="http://www.castlearmshotel.ie/" "target=_blank">' + '<i class="mapicon fa fa-globe"><span class="mapdetail">www.castlearmshotel.ie</span></i></a></p>' +
        '<p><a href="tel:0578736117"><i class="mapicon fa fa-phone"><span class="mapdetail">(057) 873 6117</span></i></a></p>' +
        '</div>' +
        '</div>';
    var castlearmsinfowindow = new google.maps.InfoWindow({
        content: castlearmsPopUp
    });
    var castlearmsmarker = new google.maps.Marker({
        position: castlearms,
        title: 'Castle Arms Hotel',
        map: map,
        icon: "assets/img/mapmarkers/bnb.png"
    });
    castlearmsmarker.addListener('click', function () {
        castlearmsinfowindow.open(map, castlearmsmarker);
        ashbrookarmsinfowindow.close(map, ashbrookarmsmarker);
        churchinfowindow.close(map, churchmarker);
        receptioninfowindow.close(map, receptionmarker);
        sandymountbbinfowindow.close(map, sandymountbbmarker);
        castletownbbinfowindow.close(map, castletownbbmarker);
        acornbbinfowindow.close(map, acornbbmarker);
    });
    
    //ashbrookarms marker and pop up box
    var ashbrookarmsPopUp = '<div id="content">' +
        '<div id="siteNot ice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Ashbrook Arms Hotel</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/F3NjbAYJUK32" target="_blank"><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">The Square, Course, Durrow, Co. Laois</span></a></p>' +
        '<p><a href="http://www.ashbrookarms.com/" "target=_blank">' + '<i class="mapicon fa fa-globe"><span class="mapdetail">www.ashbrookarmshotel.com</span></i></a></p>' +
        '<p><a href="tel:02498165"><i class="mapicon fa fa-phone"><span class="mapdetail">(024) 98165</span></i></a></p>' +
        '</div>' +
        '</div>';
    var ashbrookarmsinfowindow = new google.maps.InfoWindow({
        content: ashbrookarmsPopUp
    });
    var ashbrookarmsmarker = new google.maps.Marker({
        position: ashbrookarms,
        title: 'Ashbrook Arms Hotel',
        map: map,
        icon: "assets/img/mapmarkers/bnb.png"
    });
    ashbrookarmsmarker.addListener('click', function () {
        ashbrookarmsinfowindow.open(map, ashbrookarmsmarker);
        churchinfowindow.close(map, churchmarker);
        receptioninfowindow.close(map, receptionmarker);
        castlearmsinfowindow.close(map, castlearmsmarker);
        sandymountbbinfowindow.close(map, sandymountbbmarker);
        castletownbbinfowindow.close(map, castletownbbmarker);
        acornbbinfowindow.close(map, acornbbmarker);
    });

    //sandymount b&b marker and pop up box
    var sandymountbbPopUp = '<div id="content">' +
        '<div id="siteNot ice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Sandymount House B&B</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/wioRM6bE9ds" target="_blank"><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">Tullyroe, Cork Road, Co. Laois</span></a></p>' +
        '<p><a href="https://www.booking.com/hotel/ie/sandymount-house.en-gb.html" "target=_blank">' + '<i class="mapicon fa fa-globe"><span class="mapdetail">www.booking.com/hotel/ie/sandymount-house.en-gb.html</span></i></a></p>' +
        '<p><a href="tel:0578731063"><i class="mapicon fa fa-phone"><span class="mapdetail">(057) 873 1063</span></i></a></p>' +
        '</div>' +
        '</div>';
    var sandymountbbinfowindow = new google.maps.InfoWindow({
        content: sandymountbbPopUp
    });
    var sandymountbbmarker = new google.maps.Marker({
        position: sandymountbb,
        title: 'Sandymount House B&B',
        map: map,
        icon: "assets/img/mapmarkers/bnb.png"
    });
    sandymountbbmarker.addListener('click', function () {
        sandymountbbinfowindow.open(map, sandymountbbmarker);
        castlearms.infowindow.close(map, castlearmsmarker);
        ashbrookarmsinfowindow.close(map, ashbrookarmsmarker);
        churchinfowindow.close(map, churchmarker);
        receptioninfowindow.close(map, receptionmarker);
        castletownbbinfowindow.close(map, castletownbbmarker);
        acornbbinfowindow.close(map, acornbbmarker);
    });

    //castletown b&b marker and pop up box
    var castletownbbPopUp = '<div id="content">' +
        '<div id="siteNot ice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Casletown House B&B</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/LgKmGHaQc9p" target="_blank"><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">Castletown, Donaghmore, Co. Laois</span></a></p>' +
        '<p><a href="http://www.castletownguesthouse.com/" "target=_blank">' + '<i class="mapicon fa fa-globe"><span class="mapdetail">www.castletownguesthouse.com/</span></i></a></p>' +
        '<p><a href="tel:050546415"><i class="mapicon fa fa-phone"><span class="mapdetail">(0505) 46415</span></i></a></p>' +
        '</div>' +
        '</div>';
    var castletownbbinfowindow = new google.maps.InfoWindow({
        content: castletownbbPopUp
    });
    var castletownbbmarker = new google.maps.Marker({
        position: castletownbb,
        title: 'Sandymount House B&B',
        map: map,
        icon: "assets/img/mapmarkers/bnb.png"
    });
    castletownbbmarker.addListener('click', function () {
        castletownbbinfowindow.open(map, castletownbbmarker);
        castlearms.infowindow.close(map, castlearmsmarker);
        ashbrookarmsinfowindow.close(map, ashbrookarmsmarker);
        churchinfowindow.close(map, churchmarker);
        receptioninfowindow.close(map, receptionmarker);
        sandymountbbinfowindow.close(map, sandymountbbmarker);
        acornbbinfowindow.close(map, acornbbmarker);
    });

    //acorn b&b marker and pop up box
    var acornbbPopUp = '<div id="content">' +
        '<div id="siteNot ice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Acorn Lodge</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/jfXnPaTyok62" target="_blank"><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">Derreen, Durrow, Co. Laois</span></a></p>' +
        '<p><a href="http://www.acornlodge-ireland.com/" "target=_blank">' + '<i class="mapicon fa fa-globe"><span class="mapdetail">www.acornlodge-ireland.com</span></i></a></p>' +
        '<p><a href="tel:0578736262"><i class="mapicon fa fa-phone"><span class="mapdetail">(057) 87 36262</span></i></a></p>' +
        '</div>' +
        '</div>';
    var acornbbinfowindow = new google.maps.InfoWindow({
        content: acornbbPopUp
    });
    var acornbbmarker = new google.maps.Marker({
        position: acornbb,
        title: 'Acorn Lodge',
        map: map,
        icon: "assets/img/mapmarkers/bnb.png"
    });
    acornbbmarker.addListener('click', function () {
        acornbbinfowindow.open(map, acornbbmarker);
        castlearms.infowindow.close(map, castlearmsmarker);
        ashbrookarmsinfowindow.close(map, ashbrookarmsmarker);
        churchinfowindow.close(map, churchmarker);
        receptioninfowindow.close(map, receptionmarker);
        sandymountbbinfowindow.close(map, sandymountbbmarker);
        acornbbinfowindow.close(map, acornbbmarker);
    });

    //Reception marker and pop up box
    var receptionPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Castle Durrow</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/zESCS5MFaeF2" target="_blank"><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">Castleview, Durrow, Co. Laois, R32 EA02</span></a></p>' +
        '<p><a href="https://www.castledurrow.com/" "target=_blank">' + '<i class="mapicon fa fa-globe"><span class="mapdetail">www.castledurrow.com</span></i></a></p>' +
        '<p><a href="tel:0578736555"><i class="mapicon fa fa-phone"><span class="mapdetail">(057) 873 6555</span></i></a></p>' +
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
        castlearmsinfowindow.close(map, castlearmsmarker);
        sandymountbbinfowindow.close(map, sandymountbbmarker);
        ashbrookarmsinfowindow.close(map, ashbrookarmsmarker);
        castletownbbinfowindow.close(map, castletownbbmarker);
        acornbbinfowindow.close(map, acornbbmarker);
    });
}
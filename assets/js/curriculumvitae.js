// Global Variables
var jsfileversion="0009";

function showMenuComponent(sect) {
var elements = document.getElementsByClassName('MenuComponent');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }

/* var w = document.getElementById('imgbground'); */
/* w.style.display = 'none'; */

/* var w = document.getElementById('imgbground-blur');*/
/* w.style.display = 'none';*/

var x = document.getElementById(sect);
x.style.display = 'block';

/* var elements2 = document.getElementsByClassName(sect + '-display');*/

    for (var i = 0; i < elements2.length; i++){
        elements2[i].style.display = 'block';
    }



/* document.getElementById('JSSerNo').textContent='.'+jsfileversion;*/

/* document.getElementById('navbarNavDropdown').className='navbar-collapse show';*/
/* window.history.pushState('','Warksar Home','#'+sect+'-Top');*/

var container = document.getElementsByClass("logo");
    var content = container.innerHTML;
    container.innerHTML= content; 
}

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 5,
                center: {
                    lat: 52.286526,
                    lng: -1.5421994
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 52.286526,
                    lng: -1.5421994
},{
                lat: 52.337910,
                lng: -1.5262584
            }, {
                lat: 41.084045,
                lng: -73.874256
            }, {
                lat: 40.754932,
                lng: -73.984016
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }


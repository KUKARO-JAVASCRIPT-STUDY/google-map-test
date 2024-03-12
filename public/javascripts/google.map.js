import {Loader} from "/node_modules/@googlemaps/js-api-loader/dist/index.mjs"

let map;

const loader = new Loader({
    apiKey: GOOGLE_API_KEY,
    version: "weekly",
});

loader.load()
    .then(initMap)
    .then((marker) => {
        console.log("Marker loaded", marker);
    });


async function initMap() {
    // The location of Uluru
    const position = {lat: -25.344, lng: 131.031};
    // Request needed libraries.
    //@ts-ignore
    const {Map} = await google.maps.importLibrary("maps");
    console.log(google);
    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: "Uluru",
    });

    return marker;
}
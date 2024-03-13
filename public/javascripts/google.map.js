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
    const position = {lat: 26.2188, lng: 127.6729};
    // Request needed libraries.
    //@ts-ignore
    const {Map} = await google.maps.importLibrary("maps");
    const {Marker} = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 18,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new Marker({
        map: map,
        position: position,
        title: "Uluru",
    });

    return marker;
}
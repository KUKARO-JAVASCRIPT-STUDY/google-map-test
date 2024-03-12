import {Loader} from "/node_modules/@googlemaps/js-api-loader/dist/index.mjs"

let map;

const loader = new Loader({
    apiKey: GOOGLE_API_KEY,
    version: "weekly",
});

loader.load().then(async () => {
    const {Map} = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
    });
});
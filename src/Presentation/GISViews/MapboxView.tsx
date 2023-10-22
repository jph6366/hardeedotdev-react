import * as mapboxgl from "mapbox-gl";
import * as React from "react";

const mapbox: any = mapboxgl;

mapbox.accessToken = 'pk.eyJ1IjoianBoYXJkZWUiLCJhIjoiY2xtNWNlMjdoMWJ6ZjNqcGVnN2owNWJ5eSJ9.trEHgsN494JdazudhLyL_w';



export function MapboxView () {
    const mapContainer: any = React.useRef(null);
    const map: any = React.useRef(null);
    const [lng, setLng] = React.useState(-70.9);
    const [lat, setLat] = React.useState(42.35);
    const [zoom, setZoom] = React.useState(9);

    React.useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
        });


  return (
    <div>
        <div ref={mapContainer} className="map-container" style={{height: '200px'}}/>
    </div>
  );
}

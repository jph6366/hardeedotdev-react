import * as React from "react";
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from "@deck.gl/layers";
import { NHCGISRepository } from "src/Domain/Repository/NHCGISRepository";
import { useGISModelController } from "../hook/useGISModelController";
import { FirestationGeoJson } from "./DeckGL/FirestationGeoJson";
import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';


type GISViewProps = {
  GISRepository: NHCGISRepository;
};

  const INITIAL_VIEW_STATE = {
        latitude: 34.236514890912883,
        longitude: -77.93876594626205,
        zoom: 8,
        bearing: 0,
        pitch: 30
      };

export function DeckGLView ({ GISRepository }: GISViewProps) {
        const ref = React.useRef();
        const [map, setMap] = React.useState(null);
        const overlay = React.useMemo(
          () =>
            new DeckOverlay({
              layers: [
                new GeoJsonLayer({
                  id: 'airports',
                  data: AIR_PORTS,
                  // Styles
                  filled: true,
                  pointRadiusMinPixels: 2,
                  pointRadiusScale: 2000,
                  getPointRadius: f => 11 - f.properties.scalerank,
                  getFillColor: [200, 0, 80, 180],
                  // Interactive props
                  pickable: true,
                  autoHighlight: true,
                  onClick: info =>
                    info.object &&
                    // eslint-disable-next-line
                    alert(`${info.object.properties.name} (${info.object.properties.abbrev})`)
                }),
                new ArcLayer({
                  id: 'arcs',
                  data: AIR_PORTS,
                  dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),
                  // Styles
                  getSourcePosition: f => [-0.4531566, 51.4709959], // London
                  getTargetPosition: f => f.geometry.coordinates,
                  getSourceColor: [0, 128, 200],
                  getTargetColor: [200, 0, 80],
                  getWidth: 1
                })
              ]
            }),
          []
        );
      
        useEffect(() => {
          if (map) {
            map.setCenter(center);
            map.setZoom(zoom);
            overlay.setMap(map);
          }
        }, [map, center, zoom, overlay]);
      
        useEffect(() => {
          const mapInstance = new window.google.maps.Map(ref.current, {
            mapId: GOOGLE_MAP_ID
          });
          setMap(mapInstance);
        }, []);
        return (
          <>
            <div ref={ref} id="map" style={{height: '100vh', width: '100wh'}} />
          </>
        );
}

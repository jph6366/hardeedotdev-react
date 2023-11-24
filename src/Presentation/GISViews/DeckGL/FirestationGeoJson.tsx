import * as React from "react";
import { GeoJsonLayer } from "@deck.gl/layers";



export function FirestationGeoJson (firestationData: any) {


  return (
            <GeoJsonLayer
              id="firestations"
              data={firestationData}
              filled={true}
              pointRadiusMinPixels={2}
              pointRadiusScale={2000}
              getPointRadius={f => 11 - f.properties.scalerank}
              getFillColor={[200, 0, 80, 180]}
              pickable={true}
              autoHighlight={true}
              onClick={onclick}
        />
  );
}

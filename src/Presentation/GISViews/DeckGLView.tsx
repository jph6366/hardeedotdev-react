import * as React from "react";
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from "@deck.gl/layers";
import { LineLayer } from "@deck.gl/layers";
import { ArcLayer } from "@deck.gl/layers";
import { NHCGISRepository } from "src/Domain/Repository/NHCGISRepository";
import { useGISModelController } from "../hook/useGISModelController";
import { FirestationGeoJson } from "./DeckGL/FirestationGeoJson";

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

  const {
    currentMapData 
  } =
    useGISModelController(GISRepository);


const FIRESTATIONS = 
  'https://gis.nhcgov.com/server/rest/services/Layers/FireStations/MapServer/0/query?where=&text=&objectIds=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=geojson'
// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const COUNTRIES =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line


const MUNINCIPALITIES = 
  'https://gis.nhcgov.com/server/rest/services/Layers/MuniLimits/MapServer/0/query?where=&text=&objectIds=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C21%2C22%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C33%2C34%2C435%2C437%2C835%2C1235%2C1236&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=geojson'
    


      const onclick = info => {
        if (info.object.properties.NAME) {
          alert(`${info.object.properties.NAME}`);
        }
        if (info.object.properties.CITY) {
          alert(`${info.object.properties.CITY}`);
        }
      };

      const geojsonLayer = new GeoJsonLayer({
        data: currentMapData,
        filled: true,
        getFillColor: [200, 0, 80, 180],
        pointRadiusMinPixelsP: 2,
        pointRadiusScale: 2000,
        pickable: true,
        autoHighlight: true,
        onClick: onclick
      });

      console.log(currentMapData)

  return (
    <div className="deckGL-view" style={{width: '100vw', height: '200px', }}>
        <p style={{zIndex: 10000, position: 'absolute',fontSize: '47px', fontFamily: 'Helvetica'}}>deck.gl</p>
        <DeckGL 
        style={{width: '90vw', height: '300px', border: 'dashed'}} 
        controller={true} 
        initialViewState={INITIAL_VIEW_STATE}
        >
        <GeoJsonLayer
            id="base-map"
            data={COUNTRIES}
            stroked={true}
            filled={true}
            lineWidthMinPixels={2}
            opacity={0.4}
            getLineColor={[60, 60, 60]}
            getFillColor={[200, 200, 200]}
        />

                <GeoJsonLayer
              id="firestations"
              data={FIRESTATIONS}
              filled={true}
              pointRadiusMinPixels={2}
              pointRadiusScale={2000}
              getPointRadius={f => 11 - f.properties.scalerank}
              getFillColor={[200, 0, 80, 180]}
              pickable={true}
              autoHighlight={true}
              onClick={onclick}
        />
                <GeoJsonLayer
              id="muni"
              data={MUNINCIPALITIES}
              getFillColor={[100, 30, 80, 180]}
              pickable={true}
              autoHighlight={true}
              onClick={onclick}
        />
        </DeckGL>
    </div>
  );
}

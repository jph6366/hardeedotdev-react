import * as React from "react";
import { DeckGLView } from "./GISViews/DeckGLView";
import { LeafletView } from "./GISViews/LeafletView";
import { CesiumView } from "./GISViews/CesiumView";
import { PlaceHolderView } from "./GISViews/PlaceHolderView";
import { PlaceHolderPotreeView } from "./GISViews/PlaceHolderPotreeView";
import { DesktopGISView } from "./GISViews/DesktopGISView";
import { MapboxView } from "./GISViews/MapboxView";
import cesiumImg from "../assets/images/cesium.png";
import potreeImg from "../assets/images/potree.png";
import { NHCGISRepository } from "../Domain/Repository/NHCGISRepository"
import { useGISModelController } from "./hook/useGISModelController";
import { NewHanoverCountyDataSourceImpl } from "src/Data/DataSource/NewHanoverCountyDataSourceImpl";
import { NHCGISRepositoryImpl } from "src/Data/Repository/NHCGISRepositoryImpl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica, faHouse } from "@fortawesome/free-solid-svg-icons";


// Dependency injection
const dataSource = new NewHanoverCountyDataSourceImpl();
const repository = new NHCGISRepositoryImpl(dataSource)



export function GISView () {



  return (
    <div>
        <div className="gis-view" style={{
          fontSize: '32px',
          color: 'rgb(244, 232, 221)'
        }}>
            <DeckGLView GISRepository={repository}/>
            <h2>New Hanover County, NC, USA </h2>
            {/* <LeafletView/> */}
            <br/>
            <br/>
             
            <h2><FontAwesomeIcon icon={faEarthAmerica} size="4x"/>
            GIS Services, Softwares, and Platforms</h2>
            ESRI
            <ul>
              <li>ArcGIS REST API</li>
              <li>ArcGIS Pro</li>
              <li>ArcPy</li>
              <li>ArcMap</li>
              <li>ArcToolbox</li>
            </ul>
            QGIS
            <ul>
              <li>PyQGIS</li>
              <li>Widgets</li>
              <li>PyQT</li>
            </ul>
            Leaflet
            <ul>
              <li>Geoman</li>
              <li>React</li>
              <li>Vue</li>
            </ul>
            Mapbox
            <ul>
              <li>Mapbox GL</li>
              <li>Mapbox Tiles</li>
            </ul>
            CesiumJs
            <ul>
              <li>React</li>
              <li>Vue</li>
            </ul>

            <br/>
            GeoDjango
            <br/>

            <br/>
            GeoPandas
            <br/>

            <br/>
            PostGIS
            <ul>
            <li>3D/2D Data Storage </li>
            <li>Spatial Indexing</li>
            <li>Geospatial processing</li>
              <li>Topology</li>
              <li>Routing</li>
              <li>Tile Server</li>
            </ul>
          Point Cloud Visualization
            <ul>
              <li>CloudCompare</li>
              <li>LiDAR360</li>
              <li>Potree</li>
            </ul>
            Point Cloud Processing
            <ul>
              <li>PDAL/GDAL</li>
              <li>PCL</li>
              <li>SLAM</li>
            </ul>
            Mobile Mapping System
            <ul>
              <li>Trimble</li>
              <li>Applanix</li>
              <li>GNSS-Aided INS</li>
              <li>Base Stations</li>
            </ul>
            USGS Landsat Imagery
            <br/>
            State/County GIS Data




            {/* <MapboxView/>
            <PlaceHolderView imageSrc={cesiumImg}/>
            <PlaceHolderPotreeView imageSrc={potreeImg}/>
            <DesktopGISView/> */}

        </div>
    </div>
  );
}

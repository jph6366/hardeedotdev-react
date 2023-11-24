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


// Dependency injection
const dataSource = new NewHanoverCountyDataSourceImpl();
const repository = new NHCGISRepositoryImpl(dataSource)



export function GISView () {



  return (
    <div>
        <div className="gis-view">
            <DeckGLView GISRepository={repository}/>
            {/* <LeafletView/>
            <MapboxView/>
            <PlaceHolderView imageSrc={cesiumImg}/>
            <PlaceHolderPotreeView imageSrc={potreeImg}/>
            <DesktopGISView/> */}

        </div>
    </div>
  );
}

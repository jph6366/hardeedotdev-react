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






export function GISView () {

  return (
    <div>
      <p style={{zIndex: 10000, top: '3%',position: 'absolute',fontSize: '23px', fontFamily: 'Helvetica'}}>A List of my frontend mapping tools</p>
        <div className="gis-view">
            <DeckGLView/>
            <LeafletView/>
            <MapboxView/>
            <PlaceHolderView imageSrc={cesiumImg}/>
            <PlaceHolderPotreeView imageSrc={potreeImg}/>
            <DesktopGISView/>

        </div>
    </div>
  );
}

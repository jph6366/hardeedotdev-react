import * as React from "react";
import { DeckGLView } from "./GISViews/DeckGLView";
import { LeafletView } from "./GISViews/LeafletView";
import { CesiumView } from "./GISViews/CesiumView";



export function GISView () {

  return (
    <div>
      <p>New Maps will be added here</p>
        <div className="gis-view">
            <DeckGLView/>
            <LeafletView/>
            {/* <CesiumView/> */}
        </div>
    </div>
  );
}

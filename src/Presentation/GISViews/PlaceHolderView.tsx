import * as React from "react";
import cesiumImg from "../../assets/images/cesium.png";



export function PlaceHolderView (imageSrc: any) {
  return (
    <div style={{width: '100vw', height: '200px'}}>
        <img src={cesiumImg} alt="" style={{border: 'dashed',width: '100vw', height: '200px'}}/>
        <p style={{zIndex: 10000, top: '470px', position: 'absolute',fontSize: '47px', fontFamily: 'Helvetica'}}>mapbox</p>
        <p style={{color: 'white',zIndex: 10000, top: '670px', position: 'absolute',fontSize: '47px', fontFamily: 'Helvetica'}}>cesium</p>

    </div>
  );
}

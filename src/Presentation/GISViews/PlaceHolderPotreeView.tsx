import * as React from "react";
import potreeImg from "../../assets/images/potree.png"



export function PlaceHolderPotreeView (imageSrc: any) {
  return (
    <div style={{width: '100vw', height: '200px'}}>
        <img src={potreeImg} alt="" style={{width: '100vw', height: '200px'}}/>
        <p style={{color: 'white',zIndex: 10000, top: '870px', position: 'absolute',fontSize: '47px', fontFamily: 'Helvetica'}}>potree</p>
    </div>
  );
}

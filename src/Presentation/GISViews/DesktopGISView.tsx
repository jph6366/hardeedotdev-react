import * as React from "react";
import qgisImg from "../../assets/images/qgis.png";
import esriImg from "../../assets/images/Esri.png";
import lidar360Img from "../../assets/images/Lidar360.jpg";
import trimbleApplanixImg from "../../assets/images/trimble-applanix.png";
import cloudCompareImg from "../../assets/images/cloudcompare.png";



export function DesktopGISView (imageSrc: any) {
  return (
    <div style={{width: '100vw', height: '200px'}}>
        <p style={{zIndex: 10000, top: '1000px', position: 'absolute',fontSize: '47px', fontFamily: 'Helvetica'}}>desktop GIS/CAD/GNSS/INS</p>
        <img src={qgisImg} alt="" style={{width: '20vw', height: '20vh'}} />
        <img src={esriImg} alt="" style={{width: '15vw', height: '20vh'}} />
        <img src={cloudCompareImg} alt="" style={{width: '10vw', height: '20vh'}} />
        <img src={lidar360Img} alt="" style={{width: '10vw', height: '20vh'}} />
        <img src={trimbleApplanixImg} alt="" style={{width: '20vw', height: '20vh'}} />
    </div>
  );
}

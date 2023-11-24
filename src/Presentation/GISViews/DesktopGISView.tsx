import * as React from "react";
import qgisImg from "../../assets/images/qgis.png";
import esriImg from "../../assets/images/Esri.png";
import lidar360Img from "../../assets/images/Lidar360.jpg";
import trimbleApplanixImg from "../../assets/images/trimble-applanix.png";
import cloudCompareImg from "../../assets/images/cloudcompare.png";



export function DesktopGISView (imageSrc: any) {
  return (
    <div style={{display: 'flex',flexDirection: 'row',width: '100%', height: '200px'}}>
        <div style={{width: '20%', height: '100%'}}>
          <a href="https://www.qgis.org/en/site/" target="_blank" rel="noreferrer"><img src={qgisImg} alt="" style={{width: '100%', height: '100%'}} /></a>
        </div>
        <div style={{width: '20%', height: '100%'}}>
        <a href="https://www.esri.com/en-us/home" target="_blank" rel="noreferrer"><img src={esriImg} alt="" style={{width: '100%', height: '100%'}} /></a>
        </div>
        <div style={{width: '20%', height: '100%'}}>
        <a href="https://www.danielgm.net/cc/" target="_blank" rel="noreferrer"><img src={cloudCompareImg} alt="" style={{width: '100%', height: '100%'}} /></a>
        </div>
        <div style={{width: '20%', height: '100%'}}>
        <a href="https://greenvalleyintl.com/LiDAR360/" target="_blank" rel="noreferrer"><img src={lidar360Img} alt="" style={{width: '100%', height: '100%'}} /></a>
        </div>
        <div style={{width: '20%', height: '100%'}}>
        <a href="https://www.applanix.com/" target="_blank" rel="noreferrer"><img src={trimbleApplanixImg} alt="" style={{width: '100%', height: '100%'}} /></a>
        </div>
    </div>
  );
}

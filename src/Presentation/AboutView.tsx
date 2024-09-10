import * as React from "react";
import family from "../assets/images/family.jpg";
import odin1 from "../assets/images/odin1-resize.jpg";
import unc from "../assets/images/unc.png";
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faGraduationCap ,faBoxesStacked, faHouse, faFeather, faC, faHashtag, faV, faB, faLeaf, faBolt, faHorse, faHorseHead, faXmark, faCloud, faAnchor, faShip, faBox, faBookAtlas, faGlobe, faCompass, faCompassDrafting, faMapLocationDot, faEarthOceania, faEarthAfrica, faEarthAmerica, faEarthAsia, faEarthEurope, faLocationArrow, faStreetView, faRoad, faHandPeace, faCodeMerge, faDharmachakra, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faAws, faCloudflare, faDocker, faEvernote, faGithub, faGitlab, faJira, faLinux, faMicrosoft, faNodeJs, faPython, faReact, faVuejs, faWindows } from '@fortawesome/free-brands-svg-icons';


export function AboutView () {

  const notify = () => toast('This is my family!');

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
        <img onClick={notify} style={{
           maxWidth: '50%',
           maxHeight: '50%'
        }} src={family} alt=""></img>
        <p style={{
          fontSize: '32px',
          color: 'rgb(244, 232, 221)',
          width: '80%'
          }}>


            
<FontAwesomeIcon icon={faTerminal} size="2x"/> Full Stack & Mapping Software Engineer

<br/>

<br/>
<br/>


       <FontAwesomeIcon icon={faHouse} size="2x"/> Wilmington, NC, USA 
       <br/>
<br/>
       
       <FontAwesomeIcon icon={faGraduationCap} size="2x"/> University of North Carolina at Chapel Hill 
       <br/>
       <FontAwesomeIcon icon={faGraduationCap} size="2x"/> University of North Carolina at Wilmington
       <br/>
       <br/>
       <FontAwesomeIcon icon={faScroll} size="2x"/> Bachelor's in Computer Science        <br/>
Geographic Information Systems Minor
       <br/>
<br/>
I am a software engineer with a strong geospatial foundation. I write APIs, ETL Pipelines, frontend applications, performant backend code, and rendering 2D and 3D graphics. I spent 2 years studying GIS analysis & programming and 2+ years ensuring client success and practicing professional software engineering.
<br/>
<h4>More about me</h4>
I grew up on the North Carolina coast and was involved in the all of the fun in sun, like surfing, fishing, boating, etc.
<br/>

<img onClick={notify} style={{
           maxWidth: '50%',
           maxHeight: '50%'
        }} src={odin1} alt=""></img>I have Pug dog named Odin whom is highlighted across this page.
        <br/>


         He usually bolsters my motivation while I work and in our spare time we get outside often.
         <br/>


         <img onClick={notify} style={{
           maxWidth: '50%',
           maxHeight: '50%'
        }} src={unc} alt=""></img>I am a Chapel Hill sports fan when it comes to collegiate athletics. In summary, I'm a passionate and collaborative engineer and I am always looking for new opportunities to learn and grow.
</p>

  
    </div>
  );
}

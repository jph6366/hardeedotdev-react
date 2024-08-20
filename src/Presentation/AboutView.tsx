import * as React from "react";
import family from "../assets/images/family.jpg";
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
I am a full stack engineer with a strong geospatial foundation. I write APIs, frontend applications, performant backend code, and rendering 2D and 3D graphics. I spent 2 years studying GIS analysis & programming and 2 years professionally practicing mapping & full stack software engineering.
</p>

    </div>
  );
}

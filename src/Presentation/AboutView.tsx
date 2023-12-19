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
           maxWidth: '100%',
           maxHeight: '100%'
        }} src={family} alt=""></img>
        <p style={{
          fontSize: '32px',
          color: 'rgb(244, 232, 221)',
          width: '80%'
          }}>


            
<FontAwesomeIcon icon={faTerminal} size="3x"/>
<br/>
I have primarily worked in proprietary and open source platforms providing software expertise in 
geospatial analysis & processing, greenfielding, driven development, architecture, scaling, optimization, and customer success. 
I'm an experienced GIS, Full Stack, and Web developer that can handle backend, frontend, and deployment
work and regularly practice agile methodologies. I am seeking experience in industries
like Emergency Management Services, Robotics, and Open Source.

<br/>
<br/>


       <FontAwesomeIcon icon={faHouse} size="4x"/> Wilmington, NC, USA 
       <br/>
<br/>
       <FontAwesomeIcon icon={faGraduationCap} size="4x"/> University of North Carolina at Chapel Hill 
       <br/>
<br/>
       <FontAwesomeIcon icon={faScroll} size="4x"/> Bachelor's in Computer Science and Minor in Geographic Information Systems 
       <br/>
<br/>
<h2> <FontAwesomeIcon icon={faBoxesStacked} size="4x"/> Tech Stacks</h2>
       <br/>
       <br/>
       <br/>

       <FontAwesomeIcon icon={faLinux} size="3x"/>
       &nbsp;&nbsp;
       <FontAwesomeIcon icon={faMicrosoft} size="3x"/>
       &nbsp;&nbsp;
       <FontAwesomeIcon icon={faFeather}  size="3x"/>
       &nbsp;&nbsp;
       <FontAwesomeIcon icon={faEvernote} size="3x"/>
       &nbsp;&nbsp;
       <FontAwesomeIcon icon={faPython} size="3x"/>
       <br/>

      <h3>Linux/Windows + Apache + PostgreSQL + Python</h3>
      <br/>

      <FontAwesomeIcon icon={faHorseHead} size="3x"/>
       <FontAwesomeIcon icon={faEvernote}  size="3x"/>
       <FontAwesomeIcon icon={faVuejs} size="3x"/>
       &nbsp;&nbsp;
       <FontAwesomeIcon icon={faXmark} size="3x"/>
       <FontAwesomeIcon icon={faHorse} size="3x"/>

       <br/>

      <h3>Django + PostgreSQL + Vue.js + Nginx/Gunicorn</h3>
      <br/>

      <FontAwesomeIcon icon={faLeaf} size="3x"/>
       <FontAwesomeIcon icon={faBolt}  size="3x"/>
       <FontAwesomeIcon icon={faAngular} size="3x"/>
       &nbsp;&nbsp;&nbsp;
       <FontAwesomeIcon icon={faReact} size="3x"/>
       &nbsp;&nbsp;
       <FontAwesomeIcon icon={faNodeJs} size="3x"/>
       <br/>
       

      <h3>MongoDB + Express.js + Angular \ React + Node.js</h3>
      <br/>

      <FontAwesomeIcon icon={faC} size="3x"/>
      <FontAwesomeIcon icon={faHashtag} size="3x"/>
      &nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faV} size="3x"/>
      <FontAwesomeIcon icon={faB} size="3x"/>
      &nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faWindows} size="3x"/>
      &nbsp;&nbsp;
       <FontAwesomeIcon icon={faEvernote}  size="3x"/>
       &nbsp;&nbsp;
       <br/>

      <h3>C# \ Visual Basic, .NET Core + PostgreSQL</h3>

      <br/>

      <h2> <FontAwesomeIcon icon={faBox}  size="4x"/> Containerization & Orchestration</h2>
      <FontAwesomeIcon icon={faDocker} size="3x"/>
      &nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faShip} size="3x"/>
      &nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faDharmachakra} size="3x"/>


      <br/>

      
<h3>Docker + Helm + Kubernetes</h3>

<br/>


      <h2> <FontAwesomeIcon icon={faCloud}  size="4x"/> Cloud Providers</h2>
      <FontAwesomeIcon icon={faAws} size="3x"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faMicrosoft} size="3x"/>

      <br/>
      

<h3>AWS, Microsoft Azure</h3>

<br/>
<h2> <FontAwesomeIcon icon={faCodeMerge}  size="4x"/> DevOps Platforms</h2>
      <FontAwesomeIcon icon={faGitlab} size="3x"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faGithub} size="3x"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faCloudflare} size="3x"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faJira} size="3x"/>


      <br/>
      

<h3>GitLab, GitHub, Cloudflare, Jira</h3>

        </p>
    </div>
  );
}

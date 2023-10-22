import { CarouselItem, CreateCarouselItem } from "../Domain/Model/Carousel"
import odin4 from "../assets/images/odin4.jpg";
import odin3 from "../assets/images/odin3.jpg";
import odin2 from "../assets/images/odin2.jpg";
import odin5 from "../assets/images/odin5.jpg";
import odin1 from "../assets/images/odin1.jpg";
import resume from "../assets/documents/resume.png";
import family from "../assets/images/family.jpg";
import * as React from "react";
import { PDFView } from "../Presentation/PDFView";
import { ContactView } from "src/Presentation/ContactView";
import { DeckGLView } from "src/Presentation/GISViews/DeckGLView";
import { ProjectsView } from "src/Presentation/ProjectsView";
import { GISView } from "src/Presentation/GISView";



//  const titleContainer = React.createElement('div');
//  titleContainer.props.className = "carousel-title";

//  resumeContainer.props.className = "content-write";
//  resumeContainer.style.display = 'none';


 const resumeCopy = React.createElement('img',
 {
  src: resume,
  style: {
    zIndex: 0,
  }
 }
 );

 const familyImg = React.createElement('img',
 {
  src: family,
  style: {
    zIndex: 0,
    width: '400px',
    height: '400px'
  }
 }
 );

 const aboutParagraph = `Born and raised in Wilmington, NC, USA.`
 const aboutParagraph2 = `I studied towards a baccalaureate degree in Computer Science at University of North Carolina at Wilmington with Python being the primary programming language. After two years at UNCW I transferred to the University of North Carolina at Chapel Hill studying towards the same degree in Computer Science.`
 const aboutParagraph3 = `I took courses in accessible software in subjects like Web Development, Files & Databases, Mobile Sensing & Inference Systems, Programming Languages, and Software Engineering.`
 const aboutParagraph4 = `I added a minor in Geographic Information Systems. I geared towards the technical GIS courses in Advanced GIS programming experience in building apps using ESRI software, FOSS, web mapping, spatial analysis, image processing, data wrangling, and querying and managing geodatabases. I find the majority of my college software engineering education has led me to excel at mobile & web development, structuring & integrating geospatial data & databases, and interpreting high-level languages. `;
 const aboutParagraph5 = `At the start of my professional career, I was employed as a Customer Success Intern at nCino in Wilmington, NC. at nCino, a SaaS company built on Salesforce.`;
 
  const aboutParagraph6 = `In my last full-time job, I worked as a Mapping Software Engineer at DEKA Research & Development in Manchester, NH. I joined a fast-paced start-up project for developing and deploying an autonomous mobile robot in diverse terrains and environments.`;

   const aboutParagraph7 =`I have primarily worked in Full-Stack systems resolving mostly frontend, data mgmt & integration, system design, and testing goals. Now I am seeking more experience as a Developer working with Large Scale Systems with high volumes of transactions, Information Management Systems that rely on critical response, and designing awesome user experiences for making professional decisions in and outside of the field. `;

 const breakCopy = React.createElement('br');

 const aboutCopy = React.createElement('p',
 {
  style: {
    fontSize: '22px',
    left: '0px',
    color: 'rgb(244, 232, 221)'

  }
 },
 familyImg,
 breakCopy,
 aboutParagraph,
 breakCopy,
 breakCopy,
 aboutParagraph2,
 breakCopy,
 breakCopy,
 aboutParagraph3,
 breakCopy,
 breakCopy,
 aboutParagraph4,
 breakCopy,
 breakCopy,
 aboutParagraph5,
 breakCopy,
 breakCopy,
 aboutParagraph6,
 breakCopy,
 breakCopy,
 aboutParagraph7
 );

 const resumeContainer = React.createElement('div',{}, resumeCopy);

 const aboutContainer = React.createElement('div', {}, aboutCopy);

 const contactContainer = React.createElement('div', {}, aboutCopy);



console.log(DeckGLView());
export const carouselList:CarouselItem[] =
[
  new CreateCarouselItem(aboutContainer,'about', odin2),
  new CreateCarouselItem(PDFView(),'resume', odin5),
  new CreateCarouselItem(GISView(),'gis', odin4),
  new CreateCarouselItem(ProjectsView(),'projects', odin3),
  new CreateCarouselItem(ContactView(),'contact', odin2),
  new CreateCarouselItem('','more', odin5),


]

export const pageContentString =
`
<h1 className="hazard-background">UNDER MAINTENANCE
  <p>See mywebsite-4pj.pages.dev for static site</p>
</h1>

<h1>Welcome to My Website!</h1>
<p>To navigate the site, hover over the vertical carousel on the left side of the screen,
  <br /> then use your scroll wheel to rotate the selection</p>
`

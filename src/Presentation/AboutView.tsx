import * as React from "react";
import family from "../assets/images/family.jpg";


export function AboutView () {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
        <img style={{
           maxWidth: '100%',
           maxHeight: '100%'
        }} src={family} alt=""></img>
        <p style={{
          fontSize: '22px',
          color: 'rgb(244, 232, 221)',
          width: '80%'
          }}>
        I am Born and raised in Wilmington, NC, USA. I performed well in most subjects in school and ended up in the top 30 of high school graduating class. I was confident that I was going to study Computer Science in college. I had found success in computers, software, and graphic design in high school. I initiated my software engineering experience using Adobe products like Adobe Photoshop and Adobe Dreamweaver creating simple Graphics, HTML/CSS, and vanilla JS. I took my skills and applied myself in my father's real estate office (and part-time at a pizzeria) managing their prospective client database (10,000-30,000 entries) and providing graphic design and technical intern services (printing, mailing, organizing, OS troubleshooting). In the office I picked up Python scripting to automate filtering and wrangling excel data entries using csv or xlsx files. I also managed to enroll in dual enrollment at the local community college (Cape Fear Community College) in my last two years of high school collecting college credit.

<br/>
<br/>
<br/>
I studied towards a baccalaureate degree in Computer Science at University of North Carolina at Wilmington with Python being the primary programming language. After two years at UNCW I transferred to the University of North Carolina at Chapel Hill studying towards the same degree in Computer Science.
<br/>
<br/>
<br/>

I took courses in accessible software in subjects like Web Development, Files & Databases, Mobile Sensing & Inference Systems, Programming Languages, and Software Engineering
<br/>
<br/>
<br/>

At the start of my professional software engineering career, I was employed as a Customer Success Intern at nCino in Wilmington, NC. Here at nCino I was tasked with becoming an expert in Salesforce and the nCino domain writing code in Apex and queries in SOQL/SOSL. I performed really well in debugging problems among the customer success team, while also maintaining routine work of automating forms, testing logic, and building UI. 
<br/>
<br/>
<br/>

In my last full-time job, I worked as a Mapping Software Engineer at DEKA Research & Development in Manchester, NH. I joined the mapping team and initially worked as a Python developer writing DAG scripts for ETL pipelines processing large collections (billions of points) of 3D point clouds. In my time on the mapping team I incorporated Multiprocessing, Geospatial Concepts, and Distribution as well as contributing to other mapping products. I was moved to the Full Stack Web Development team where we were tasked to develop a client-facing web app that has a list of capabilities including microservices, routing, AVLs, alert system, web maps, real time communication, video & audio streaming, and comprehensive testing. In my career so far, I have gained expertise in Python, Java, Typescript & Javascript, Full-Stack development, Web Development, RDBMS, Enterprise SaaS, Production & DevOps, and more requested features for enhanced feasibility and consistent stability.
<br/>
<br/>
<br/>

I have primarily worked on Web and Desktop Applications, Enterprise SaaS, and Geospatial Design, resolving mostly frontend, data mgmt & integration, system design, and testing goals. Now I am seeking more experience as a Software Developer/Engineer working with Large-Scale Real-Time Information Management Systems that rely on critical response, and creating human-machine interfaces for professional, governmental, strategic, tactical, and public systems of geospatial data.


        </p>
    </div>
  );
}

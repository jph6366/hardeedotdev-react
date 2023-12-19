import * as React from "react";

export function ServicesView () {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'rgb(244, 232, 221)', 
      fontFamily: 'Helvetica'
    }}>
      <div>
        <h3>Email me at jphardee@gmail.com for direct consultation with the Subject:  HARDEEDOTDEV</h3>
        <ul>
            <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}>Creating, Configuring, and Hosting Custom Websites</li>
            <br/>
            <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}>Creating Digital Maps for Analysis or Print</li>
            <br/>
            <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}>Consulting GIS and Accessible Software Solutions</li>
            <br/>
            <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}>Desktop, Web, Mobile, Cloud, Database, AI/ML, Whatever you want.</li>
        </ul>
    </div>
    </div>
    
  );
}

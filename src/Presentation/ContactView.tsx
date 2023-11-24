import * as React from "react";
import contact from "../assets/images/contact.jpg";


export function ContactView () {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
    <div style={{
      width: '50%',
      height: '50%',
      borderRadius: '50%' ,
      overflow: 'hidden'
    }}>
        <img style={{
           maxWidth: '100%',
           maxHeight: '100%'
        }} src={contact} alt=""></img>
        </div>
      <div>
        <ul>
            <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}><a href="https://www.linkedin.com/in/jackson-hardee/">LinkedIn</a></li>
            <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}><a href="https://github.com/jph6366">GitHub</a></li>
            <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}><a href="https://ko-fi.com/jphardee">Ko-fi</a></li>
            <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}><a href="https://www.buymeacoffee.com/jphardee">Buy Me a Coffee</a></li>
        </ul>
    </div>
    </div>
    
  );
}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import ResponsiveApp from './ResponsiveApp'
import { App } from './Main/App';
import reportWebVitals from './reportWebVitals';
import 'mapbox-gl/dist/mapbox-gl.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>    
      <link rel="stylesheet" href="/Widgets/widgets.css" />
    </head>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

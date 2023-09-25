/* eslint-disable jsx-a11y/alt-text */
import './ResponsiveApp.css';
import family from './assets/images/family.jpg';
import odin1 from './assets/images/odin1.jpg';
import odin2 from './assets/images/odin2.jpg';
import odin3 from './assets/images/odin3.jpg';
import odin4 from './assets/images/odin4.jpg';
import odin5 from './assets/images/odin5.jpg';
import resume from './assets/documents/resume.PNG';

function ResponsiveApp() {
  return (
<div class="app-cointainer">
    <div className="carousel-container">
        <ul className="carousel-list">
            <li className="carousel-item">
                <img src={odin5} />
            </li>
            <li className="carousel-item">
                <img src={odin4} />
            </li>
            <li className="carousel-item">
                <img src={odin3} />
            </li>
            <li className="carousel-item">
                <img src={odin2} />
            </li>
        </ul>
    </div>

    <div className="content-container">


            <h1 className="hazard-background">UNDER MAINTENANCE
              <p>See mywebsite-4pj.pages.dev for static site</p>
            </h1>

            <h1>Welcome to My Website!</h1>
            <p>To navigate the site, hover over the vertical carousel on the left side of the screen,
              <br /> then use your scroll wheel to rotate the selection</p>

    </div>


  </div>

  );
}

export default ResponsiveApp;

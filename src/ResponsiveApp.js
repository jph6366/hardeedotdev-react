/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from 'react';
import './ResponsiveApp.css';
import family from './assets/images/family.jpg';
import odin2 from './assets/images/odin2.jpg';
import odin3 from './assets/images/odin3.jpg';
import odin4 from './assets/images/odin4.jpg';
import odin5 from './assets/images/odin5.jpg';

function ResponsiveApp() {

  useEffect ( () => {

    const carouselList = document.querySelector('.carousel-list');
    const carouselItems = document.querySelectorAll('.carousel-item');
  
    let selectedIndex = 0;
  
    function rotateCarousel(event) {
      if (event.deltaY < 0) {
        selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : carouselItems.length - 1;
      } else if (event.deltaY > 0) {
        selectedIndex = selectedIndex < carouselItems.length - 1 ? selectedIndex + 1 : 0;
      }
      carouselItems.forEach(item => item.classList.remove('selected'));
      carouselItems[selectedIndex].classList.add('selected');
    }

    if (carouselList) {
      carouselList.addEventListener('wheel', rotateCarousel);
    }

  });


  return (
  <div className="app-cointainer">
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

        <img src={family} />
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

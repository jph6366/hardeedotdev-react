/* eslint-disable no-octal-escape */
/* eslint-disable jsx-a11y/alt-text */

import { useEffect } from 'react';
import family from './assets/images/family.jpg';
import odin1 from './assets/images/odin1.jpg';
import odin2 from './assets/images/odin2.jpg';
import odin3 from './assets/images/odin3.jpg';
import odin4 from './assets/images/odin4.jpg';
import odin5 from './assets/images/odin5.jpg';
import resume from './assets/documents/resume.PNG';



import './App.css';

function App() {

  useEffect( () => {
    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxImage = document.querySelector('.parallax-image img');
    const parallaxImgContainer = document.querySelector('.parallax-image');
    const parallaxText = document.querySelector('.parallax-text');

    parallaxContainer.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const imageMoveX = -mouseX / 40;
      const imageMoveY = -mouseY / 40;
      const textMoveX = -mouseX / 10;
      const textMoveY = -mouseY / 10;

      parallaxImage.style.transform = `translate3d(${imageMoveX}px, ${imageMoveY}px, 0)`;
      parallaxText.style.transform = `translate3d(${textMoveX}px, ${textMoveY}px, 0)`;
    });

    parallaxContainer.addEventListener('mouseleave', () => {
      parallaxImage.classList.remove('mouse-parallax');
      parallaxText.classList.remove('mouse-parallax');
    });

    parallaxContainer.addEventListener('mouseenter', () => {
      parallaxImage.classList.add('mouse-parallax');
      parallaxText.classList.add('mouse-parallax');
    });


    const carouselList = document.querySelector('.carousel-list');
    const carouselItems = document.querySelectorAll('.carousel-item');
    // const contentContainer = document.querySelector('.content-container');
    // const carouselContainers = document.querySelectorAll('.carousel-container');
    // const parallaxContainers = document.querySelectorAll('.parallax-container');


    window.addEventListener('mousemove', function(event) {
      var mouseX = event.clientX;
      var mouseY = event.clientY;
      var parallaxImage = document.querySelector('.parallax-image');
      var containerRect = parallaxImage.parentNode.getBoundingClientRect();
      var offsetX = (mouseX - containerRect.left - containerRect.width / 2) / 10;
      var offsetY = (mouseY - containerRect.top - containerRect.height / 2) / 10;
      parallaxImage.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
    });


    let selectedIndex = 0;

    function resizeCarousel() {
      const windowHeight = window.innerHeight;
      const carouselContainer = document.querySelector('.carousel-container');
      const carouselHeight = windowHeight * 0.8;
      carouselContainer.style.height = `${carouselHeight}px`;
    }

    function rotateCarousel(event) {
      if (event.deltaY < 0) {
        selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : carouselItems.length - 1;
      } else if (event.deltaY > 0) {
        selectedIndex = selectedIndex < carouselItems.length - 1 ? selectedIndex + 1 : 0;
      }
      carouselItems.forEach(item => item.classList.remove('selected'));
      carouselItems[selectedIndex].classList.add('selected');
      
      parallaxImgContainer.innerHTML = carouselItems[selectedIndex].children[0].children[0].outerHTML;
      parallaxText.innerHTML = carouselItems[selectedIndex].children[0].children[2].outerHTML;
      parallaxText.children[0].style.display = ""
    }

    resizeCarousel();
    window.addEventListener('resize', resizeCarousel);
    carouselList.addEventListener('wheel', rotateCarousel);

    carouselList.addEventListener('click', (event) => {
      carouselItems.forEach(item => item.classList.remove('selected'));
      let srcElement = event.target;
      while(srcElement.className !== 'carousel-item') {
        srcElement = srcElement.parentElement;
      }
      srcElement.classList.add('selected');
      parallaxImgContainer.innerHTML = srcElement.children[0].children[0].outerHTML;
      parallaxText.innerHTML = srcElement.children[0].children[2].outerHTML;
      parallaxText.children[0].style.display = ""
    })
  });
  
  return (
  <div className="App">
      <div className="carousel-container">
        <ul className="carousel-list">
          <li className="carousel-item">
            <div className="carousel-content" style={{position: 'relative', display: 'inline-block'}}>
              <img src={odin5} />
              <div style={{ position: 'absolute', bottom: '50%', left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', fontFamily: 'Helvetica, sans-serif', color: 'white', fontSize: '80px'}}>
              home
            </div>
            <div className="content-write" style={{display: 'none'}}>
              <img src={family} />
              <h1>Hi I'm Jackson Hardee</h1>
              <p>
                I am Software Engineer by trade
              </p>
            </div>
          </div>
        </li>
        <li className="carousel-item">
          <div className="carousel-content" style={{position: 'relative', display: 'inline-block'}}>
            <img src={odin4} />
            <div style={{position: 'absolute', bottom: '50%', left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', fontFamily: 'Helvetica, sans-serif', color: 'white', fontSize: '80px'}}>
              projects
            </div>
            <div className="content-write" style={{display: 'none'}}>
              <h1>Projects</h1>
              <p>This website is one of my personal projects.
                <br />Purpose is to showcase my web development capabilities and <br />function as a platform for other engineering feats and fun
              </p>
              <a href="https://github.com/jph6366/MyWebsite">See Code</a>
            </div>
          </div>
        </li>
        <li className="carousel-item">
          <div className="carousel-content" style={{position: 'relative', display: 'inline-block'}}>
            <img src={odin3} />
            <div style={{position: 'absolute', bottom: '50%', left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', fontFamily: 'Helvetica, sans-serif', color: 'white', fontSize: '80px'}}>
              resume
            </div>
            <div className="content-write" style={{display: 'none'}}>
              <img src={resume} />
            </div>
          </div>
        </li>
        <li className="carousel-item">
          <div className="carousel-content" style={{position: 'relative', display: 'inline-block'}}>
            <img src={odin2} />
            <div style={{position: 'absolute', bottom: '50%', left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', fontFamily: 'Helvetica, sans-serif', color: 'white', fontSize: '80px'}}>
              design
            </div>
            <div className="content-write" style={{display: 'none'}}><h1>deSiGN!</h1></div>
          </div>
        </li>
        <li className="carousel-item">
          <div className="carousel-content" style={{position: 'relative', display: 'inline-block'}}>
            <img src={odin1} />
            <div style={{position: 'absolute', bottom: '50%', left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', fontFamily: 'Helvetica, sans-serif', color: 'white', fontSize: '80px'}}>
              contact
            </div>
            <div className="content-write" style={{display: 'none'}}>
              <ul style={{listStyleType:'circle'}}>
                <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}><a href="https://www.linkedin.com/in/jackson-hardee/">LinkedIn</a></li>
                <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}><a href="https://github.com/jph6366">GitHub</a></li>
                <li style={{fontSize: '47px', fontFamily: 'Helvetica'}}>...</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div><div className="content-container">
        <div className="parallax-container">
          <div className="parallax-image">
            <img src={odin1} />
            <pre className="ferris-wheel">
            o   o
             )-(
            (   )
          .-""""-.
          '        `'
            </pre>
          </div>
          <div className="parallax-text">

            <h1 className="hazard-background">UNDER MAINTENANCE
              <p>See mywebsite-4pj.pages.dev for static site</p>
            </h1>

            <h1>Welcome to My Website!</h1>
            <p>To navigate the site, hover over the vertical carousel on the left side of the screen,
              <br /> then use your scroll wheel to rotate the selection</p>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;

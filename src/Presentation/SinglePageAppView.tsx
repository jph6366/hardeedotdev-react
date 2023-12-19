import * as React from "react";
import { PageAppRepository } from "../Domain/Repository/PageAppRepository";
import { useSinglePageAppModelController } from "./hook/useSinglePageAppModelController";
import { ContentView } from "./ContentView";
import { TutorialView } from "./TutorialView";
import { GSAPView } from "./GSAPView";
import { NavigatorView } from "./NavigatorView";
import toast from "react-hot-toast";



type SinglePageAppViewProps = {
  pageRepository: PageAppRepository;
};

export function SinglePageAppView ({ pageRepository }: SinglePageAppViewProps) {
  const { 
    currentPageApp,
    currentCarouselItem, 
    setupCarousel,
    handleOnWheelRotateCarousel,
    handleOnClickHideCarousel,
    handleOnMouseUpCarousel,
    handleOnMouseDownCarousel,
    handleOnTouchStartCarousel,
    handleOnTouchMoveCarousel,
    handleMouseMoveParallaxEffect,
    handleMouseLeaveParallaxEffect,
    handleMouseEnterParallaxEffect,
    handleOnClickNavigator } =
  useSinglePageAppModelController(pageRepository);

  var navContext = [];

    setTimeout(() => {
      setupCarousel();
    });


  return (
    <div style={{
      display: 'flex'
    }}>
    <NavigatorView onClick={handleOnClickNavigator} context={currentPageApp} selection={currentCarouselItem} />
    <div   className="carousel-container"
          onMouseDown={handleOnMouseDownCarousel}
          onMouseUp={handleOnMouseUpCarousel} 
          onTouchStart={handleOnTouchStartCarousel}
          onTouchMove={handleOnTouchMoveCarousel}>
        <ul className="carousel-list">
          <nav onWheel={handleOnWheelRotateCarousel} 
          
              >
            <figure >
              {currentPageApp?.carousel.itemList.map((item, index) => {
                  return  <li  key={index} className="carousel-item">
                              <img alt={item.title} src={item.image} />
                              <p>{item.title}</p>
                          </li>
              })} 
              </figure>
          </nav>
        </ul>
    </div>
    {/* <GSAPView/> */}
    <br/>
    <br/>
    <br/>
    {/* <button onClick={handleOnClickHideCarousel} id="hideBtn" >Hide</button> */}

    <TutorialView />

    <div className="content-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <div>
        {currentCarouselItem &&
      <div>
        <div  className="carousel-title">
          <p>
            {currentCarouselItem.title}
          </p>
          </div>
          <ContentView  contentItem={currentCarouselItem}/>
        </div>
        }
      </div>
    </div>
    </div>

  );
}

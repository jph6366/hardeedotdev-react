import * as React from "react";
import { PageAppRepository } from "../Domain/Repository/PageAppRepository";
import { useSinglePageAppModelController } from "./hook/useSinglePageAppModelController";
import { ContentView } from "./ContentView";

type SinglePageAppViewProps = {
  pageRepository: PageAppRepository;
};

export function SinglePageAppView ({ pageRepository }: SinglePageAppViewProps) {
  const { 
    currentPageApp,
    currentCarouselItem, 
    setupCarousel,
    handleOnWheelRotateCarousel,
    handleOnMouseUpCarousel,
    handleOnMouseDownCarousel,
    handleOnTouchStartCarousel,
    handleOnTouchMoveCarousel,
    handleMouseMoveParallaxEffect,
    handleMouseLeaveParallaxEffect,
    handleMouseEnterParallaxEffect } =
  useSinglePageAppModelController(pageRepository);

    setTimeout(() => {
      setupCarousel();
    });

  return (
    <div>
    <div className="carousel-container"
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
    <p>Use the scroll wheel to rotate content or swipe left on mobile</p>
    <div className="content-container">
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

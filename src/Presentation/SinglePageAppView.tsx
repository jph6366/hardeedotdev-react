import * as React from "react";
import { PageAppRepository } from "../Domain/Repository/PageAppRepository";
import { useSinglePageAppModelController } from "./hook/useSinglePageAppModelController";

type SinglePageAppViewProps = {
  pageRepository: PageAppRepository;
};

export function SinglePageAppView ({ pageRepository }: SinglePageAppViewProps) {
  const { 
    currentPageApp,
    currentCarouselItem, 
    handleOnWheelRotateCarousel,
    handleMouseMoveParallaxEffect,
    handleMouseLeaveParallaxEffect,
    handleMouseEnterParallaxEffect } =
  useSinglePageAppModelController(pageRepository);


  return (
    <div>
    <div className="carousel-container">
        <ul className="carousel-list" >
          <nav onWheel={handleOnWheelRotateCarousel}>
            <figure>
              {currentPageApp?.carousel.itemList.map((item, index) => {
                  return  <li key={index} className="carousel-item">
                              <img alt={item.title} src={item.image} />
                          </li>
              })} 
              </figure>
          </nav>
        </ul>
    </div>

    <div className="content-container">
      <div  className="carousel-title">
      </div>
    </div>
    </div>

  );
}

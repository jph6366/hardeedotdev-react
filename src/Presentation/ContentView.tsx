import * as React from "react";
import { CarouselItem } from "../Domain/Model/Carousel";


export function ContentView (contentItem : CarouselItem) {

  return (

    <div className="content-container">
      <div  className="carousel-title">
        <p>{contentItem.title}</p>
      </div>
    </div>

  );
}

import * as React from "react";
import { CarouselItem } from "../Domain/Model/Carousel";

type CarouselItemProps = {
  contentItem: CarouselItem;
};

export function ContentView ({contentItem} : CarouselItemProps) {

  return (
    <div>
        {contentItem.content as React.ReactNode}
    </div>
  );
}

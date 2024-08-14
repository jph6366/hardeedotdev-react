import * as React from "react";
import { PageAppRepository } from "../Domain/Repository/PageAppRepository";
import { useSinglePageAppModelController } from "./hook/useSinglePageAppModelController";
import { ContentView } from "./ContentView";
import { TutorialView } from "./TutorialView";
import { GSAPView } from "./GSAPView";
import { MorvilView } from "./MorvilView";
import { Morvil2View } from "./Morvil2View";
import { MorvilMobileView } from "./MorvilMobileView";
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

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })


  var navContext = [];

    setTimeout(() => {
      // setupCarousel();
    });


  return (
    <div style={{
      display: 'flex'
    }}>
    {/* <NavigatorView onClick={handleOnClickNavigator} context={currentPageApp} selection={currentCarouselItem} /> */}
    {/* <MorvilView pageRepository={pageRepository}></MorvilView> */}
    {windowWidth >= 420 ? (
    <Morvil2View pageRepository={pageRepository}></Morvil2View>
    ) : (
      <MorvilMobileView pageRepository={pageRepository}></MorvilMobileView>
    )
    }

    {/* <div   className="carousel-container"
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
    </div> */}
    {/* <GSAPView/> */}
    <br/>
    <br/>
    <br/>
    {/* <button onClick={handleOnClickHideCarousel} id="hideBtn" >Hide</button> */}


    <div className="content-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <div>
        {/* {currentCarouselItem &&
      <div>
        <div  className="carousel-title">
          <p>
            {currentCarouselItem.title}
          </p>
          </div>
          <ContentView  contentItem={currentCarouselItem}/>
        </div>
        } */}
      </div>
    </div>
    </div>

  );
}

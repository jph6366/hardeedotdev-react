
import * as React from "react";
import { PageAppRepository } from "../Domain/Repository/PageAppRepository";
import { useMorvilModelController } from "./hook/useMorvilModelController";
import { URL } from "url";
import { Tooltip } from 'react-tooltip';
import { ContentView } from "./ContentView";


type SinglePageAppViewProps = {
    pageRepository: PageAppRepository;
  };

export function Morvil2View ({ pageRepository }: SinglePageAppViewProps) {

    const { 
        currentCarouselItem,
        currentPageApp,
        animate,
        addEventListeners,
        handleOnClickNavigator
    } = useMorvilModelController(pageRepository);

    // const renderIndexes = [[1,1],[1,2],[1,3],[1,4],[1,5],
    //                         [2,1],[2,3],[2,5],
    //                         [3,1],[3,3],[3,5],[3,6]]
    const grid = React.useRef(null);
    const content = React.useRef(null);


    React.useEffect(() => {
        addEventListeners();
        animate()
        grid.current.scrollIntoView()
      },[]);

    return (     
        <div>
        <div ref={grid} className="grid-container">
            <Tooltip
                key={'top'}
                anchorSelect="#my-tooltip-anchor"
                place={'top'}
                style={{zIndex: '0', backgroundColor: "rgb(0, 255, 30)", color: "#222" }}
            />
            <div   
            className="grid-item"
            data-row={0}
            data-col={0}
            style={{
                visibility: 'hidden'
            }}
             >
            </div>
            <div
            className="grid-item"
            data-row={0}
            data-col={1}
            style={{
                visibility: 'hidden'
            }}
            >
            </div>
            <div
            className="grid-item"
            data-row={0}
            data-col={2}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>

            <div   
            className="grid-item"
            data-row={0}
            data-col={3}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>
            <div
            className="grid-item"
            data-row={0}
            data-col={4}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>
            <div
            className="grid-item"
            data-row={1}
            data-col={0}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>
            <div
            className="grid-item"
            data-row={1}
            data-col={0}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>
            <div
            className="grid-item"
            data-row={1}
            data-col={0}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>
            <div
            className="grid-item"
            data-row={1}
            data-col={0}
            style={{
                visibility: 'hidden'
            }}>
            </div>
            

            <a onClick={handleOnClickNavigator} id="my-tooltip-anchor" data-tooltip-content={currentPageApp?.carousel.itemList[0].title}>
            <div className="grid-item"
            data-row={1}
            data-col={1}
            style={{
                position: 'relative',
              backgroundColor: 'black',
              overflow: 'hidden',

            }}>
            <img  onClick={() => content.current.scrollIntoView({ behavior: "smooth"})}  src={currentPageApp?.carousel.itemList[0].image}></img>
            </div>
            </a>

            <a onClick={handleOnClickNavigator}  id="my-tooltip-anchor" data-tooltip-content={currentPageApp?.carousel.itemList[3].title}>
            <div className="grid-item"
            data-row={1}
            data-col={2}
            style={{
                backgroundColor: 'black',
              }}
            >
            <img onClick={() => content.current.scrollIntoView({ behavior: "smooth"})}  src={currentPageApp?.carousel.itemList[3].image}></img>
            </div>
            </a>

            <a onClick={handleOnClickNavigator}  id="my-tooltip-anchor" data-tooltip-content={currentPageApp?.carousel.itemList[4].title}>
            <div className="grid-item"
            data-row={1}
            data-col={3}
            style={{
                backgroundColor: 'black',
              }}
            >
            <img onClick={() => content.current.scrollIntoView({ behavior: "smooth"})}  src={currentPageApp?.carousel.itemList[2].image}></img>
            </div>
            </a>

            {/* <a onClick={handleOnClickNavigator}  id="my-tooltip-anchor" data-tooltip-content={currentPageApp?.carousel.itemList[2].title}> */}
            <div
            className="grid-item"
            data-row={1}
            data-col={4}
            style={{
                visibility: 'hidden',
            }}>

            </div>
            {/* </a> */}

            <a onClick={handleOnClickNavigator} id="my-tooltip-anchor" data-tooltip-content={currentPageApp?.carousel.itemList[1].title}>
            <div
            className="grid-item"
            data-row={1}
            data-col={5}
            style={{

             }}
            >
            <img  onClick={() => content.current.scrollIntoView({ behavior: "smooth"})} src={currentPageApp?.carousel.itemList[1].image}></img>
            </div>
            </a>

            <div
            className="grid-item"
            data-row={1}
            data-col={6}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>
            <div
            className="grid-item"
            data-row={1}
            data-col={7}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>


        <div
            className="grid-item"
            data-row={2}
            data-col={0}
            style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%)',
                clipPath: 'inset(55% 0 0 0)',
             }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
            </div>

            <div
            className="grid-item"
            data-row={2}
            data-col={1}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>            

            <div
            className="grid-item"
            data-row={2}
            data-col={2}
            style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%)',
             }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
            </div>     

            <div
            className="grid-item"
            data-row={2}
            data-col={3}
            style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%)',
                clipPath: 'inset(0 0 0 17%)',
                }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
            </div>     

            <div
            className="grid-item"
            data-row={2}
            data-col={4}
            style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%)',
             }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}

            </div>     


            <div
            className="grid-item"
            data-row={2}
            data-col={5}
            style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%)',
             }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
                </div>

            <div
            className="grid-item"
            data-row={2}
            data-col={6}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>     


            <div
            className="grid-item"
            data-row={2}
            data-col={7}
            style={{
                visibility: 'hidden'
             }}
            >
                </div>


            <div
            className="grid-item"
            data-row={3}
            data-col={0}
            style={{
                background: 'linear-gradient(35deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 82%, rgba(255,255,255,1) 100%)',
                clipPath: 'ellipse(98% 94% at 98% 5%)',
             }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
            </div>

            <div
            className="grid-item"
            data-row={3}
            data-col={1}
            style={{
                background: 'linear-gradient(349deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(255,255,255,1) 100%)',
             }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
            </div>            

            <div
            className="grid-item"
            data-row={3}
            data-col={2}
            style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%)',
                clipPath: 'ellipse(100% 100% at 0% 0%)',
             }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
            </div>     

            <div
            className="grid-item"
            data-row={3}
            data-col={3}
            style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%)',
                clipPath: 'inset(0 0 0 17%)',
             }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
            </div>     

            <div
            className="grid-item"
            data-row={3}
            data-col={4}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>     


            <div
            className="grid-item"
            data-row={3}
            data-col={5}
            style={{
                clipPath: 'ellipse(98% 94% at 98% 5%)',
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%)',
            }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
                </div>
            <div
            className="grid-item"
            data-row={3}
            data-col={6}
            style={{
                clipPath: ' polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                background: 'linear-gradient(69deg, rgba(255,255,255,1) 21%, rgba(0,0,0,1) 100%)',
            }}
            >
            {/* <img  src={currentPageApp?.carousel.itemList[1].image}></img> */}
            </div>     


            <div
            className="grid-item"
            data-row={3}
            data-col={7}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>     
        </div>
        <div ref={content}>
               {currentCarouselItem &&
                <div >
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

        


        
    )


}
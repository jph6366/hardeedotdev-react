
import * as React from "react";
import { PageAppRepository } from "../Domain/Repository/PageAppRepository";
import { useMorvilModelController } from "./hook/useMorvilModelController";
import { URL } from "url";
import { Tooltip } from 'react-tooltip';
import { ContentView } from "./ContentView";


type SinglePageAppViewProps = {
    pageRepository: PageAppRepository;
  };

export function MorvilMobileView ({ pageRepository }: SinglePageAppViewProps) {

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
    const grid : any = React.useRef(null);
    const content: any = React.useRef(null);


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
              clipPath: 'ellipse(110% 93% at 110% 100%)',
              backgroundColor: 'black',
              overflow: 'hidden',
              height:'100%',
              width:'100%'
            }}>
            <img  onClick={() => content.current.scrollIntoView({ behavior: "smooth"})} height={'100%'}  width={'100%'}  src={currentPageApp?.carousel.itemList[0].image}></img>
            </div>
            </a>

            <a onClick={handleOnClickNavigator}  id="my-tooltip-anchor" data-tooltip-content={currentPageApp?.carousel.itemList[3].title}>
            <div className="grid-item"
            data-row={1}
            data-col={2}
            style={{
                backgroundColor: 'black',
                clipPath: 'ellipse(120% 60% at 45% 63%)',
                height:'100%',
                width:'100%'
              }}
            >
            <img onClick={() => content.current.scrollIntoView({ behavior: "smooth"})} height={'100%'}  width={'100%'}  src={currentPageApp?.carousel.itemList[3].image}></img>
            </div>
            </a>

            <a onClick={handleOnClickNavigator}  id="my-tooltip-anchor" data-tooltip-content={currentPageApp?.carousel.itemList[4].title}>
            <div className="edge-item"  onClick={() => content.current.scrollIntoView({ behavior: "smooth"})}
            data-row={1}
            data-col={3}
            style={{
                position: 'relative',
                backgroundColor: 'rgba(0,0,0,0)',
                height:'100%',
                width:'100%'
              }}>
            <div className="edgeCase-item">
            <img  height={'100%'}  width={'100%'}  src={currentPageApp?.carousel.itemList[4].image}
            style={{
              clipPath: 'ellipse(68% 83% at -3% 95%)',
              position: 'absolute',
              left: '0',
              top: '-0.25dvh'
            }}></img>
            <img height={'100%'}  width={'100%'}  src={currentPageApp?.carousel.itemList[4].image}
            style={{
              clipPath: 'ellipse(69% 96% at 110% 105%)',
              position: 'absolute',
              left: '0',
              top: '-0.25dvh',
            }}></img>
            </div>
            </div>
            </a>

            <a onClick={handleOnClickNavigator}  id="my-tooltip-anchor" data-tooltip-content={currentPageApp?.carousel.itemList[2].title}>
            <div
            className="grid-item"
            data-row={1}
            data-col={4}
            style={{
                backgroundColor: 'black',
                clipPath: 'ellipse(160% 78% at 80% 77%)',
                height:'100%',
                width:'100%'
            }}>
            <img  onClick={() => content.current.scrollIntoView({ behavior: "smooth"})} height={'100%'}  width={'100%'}  src={currentPageApp?.carousel.itemList[2].image}
            style={{
            }}></img>
            </div>
            </a>

            <a onClick={handleOnClickNavigator} id="my-tooltip-anchor" data-tooltip-content={currentPageApp?.carousel.itemList[1].title}>
            <div
            className="grid-item"
            data-row={1}
            data-col={5}
            
            style={{
                backgroundColor: 'black',
                height:'100%',
                width:'100%'
             }}
            >
            <img  onClick={() => content.current.scrollIntoView({ behavior: "smooth"})} height={'100%'}  width={'100%'} src={currentPageApp?.carousel.itemList[1].image}></img>
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
                visibility: 'hidden'
             }}
            >
            </div>

            <div
            className="grid-item"
            data-row={2}
            data-col={1}
            style={{
                backgroundColor: 'black',
             }}
            >
            <img height={'100%'}  width={'100%'} src={currentPageApp?.carousel.itemList[1].image}></img>
            </div>            

            <div
            className="grid-item"
            data-row={2}
            data-col={2}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>     

            <div
            className="grid-item"
            data-row={2}
            data-col={3}
            style={{
                backgroundColor: 'black',
             }}
            >
            <img height={'100%'}  width={'100%'} src={currentPageApp?.carousel.itemList[1].image}></img>
            </div>     

            <div
            className="grid-item"
            data-row={2}
            data-col={4}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>     


            <div
            className="grid-item"
            data-row={2}
            data-col={5}
            style={{
                backgroundColor: 'black',
             }}
            >
            <img height={'100%'}  width={'100%'} src={currentPageApp?.carousel.itemList[1].image}></img>
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
                visibility: 'hidden'
             }}
            >
            </div>

            <div
            className="grid-item"
            data-row={3}
            data-col={1}
            style={{
                backgroundColor: 'black',
             }}
            >
            <img height={'100%'}  width={'100%'} src={currentPageApp?.carousel.itemList[1].image}></img>
            </div>            

            <div
            className="grid-item"
            data-row={3}
            data-col={2}
            style={{
                visibility: 'hidden'
             }}
            >
            </div>     

            <div
            className="grid-item"
            data-row={3}
            data-col={3}
            style={{
                backgroundColor: 'black',
             }}
            >
            <img height={'100%'}  width={'100%'} src={currentPageApp?.carousel.itemList[1].image}></img>
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
                backgroundColor: 'black',
            }}
            >
            <img height={'100%'}  width={'100%'} src={currentPageApp?.carousel.itemList[1].image}></img>
                </div>
            <div
            className="grid-item"
            data-row={3}
            data-col={6}
            style={{
                clipPath: ' polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                backgroundColor: 'black',
            }}
            >
            <img height={'100%'}  width={'100%'} src={currentPageApp?.carousel.itemList[1].image}></img>
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
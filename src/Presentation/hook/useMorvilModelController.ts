import { useEffect, useState } from "react";
import { CarouselItem } from "../../Domain/Model/Carousel";
import { SinglePageApp } from "../../Domain/Model/SinglePageApp";
import { PageAppRepository } from "../../Domain/Repository/PageAppRepository";
import gsap from 'gsap';



export function useMorvilModelController(pageRepository: PageAppRepository) {
    const [ currentPageApp, setCurrentPageApp ] = useState<SinglePageApp>();
    const [ currentCarouselItem, setCurrentCarouselItem ] = useState<CarouselItem>();

    
    useEffect( () => {
        async function init() {
            setCurrentPageApp(await pageRepository.getPageContent());
            // setCurrentCarouselItem((await pageRepository.getPageContent()).carousel.itemList[0])

        

        }
        init();
    });

    const addEventListeners = async () => {
            // Ensure you have included the GSAP library in your HTML file

            // Define the elements
            let gridItems: Array<Element> = gsap.utils.toArray('.grid-container .grid-item');
            const edgeCaseItem: Array<Element> = gsap.utils.toArray('.grid-container .edge-item')


            gridItems = gridItems.concat(edgeCaseItem)
            // let edgeCaseTL;


            // edgeCaseItem.forEach(element => {
            //     element.addEventListener('mouseenter', () => {
            //         // Create GSAP animation timeline for resolveClips
            //         edgeCaseTL = gsap.timeline({ paused: true })
            //         edgeCaseTL.fromTo(element,{scale: 1.0, opacity: 1, duration: 0.5, ease: "ease"},{scale: 1.2, opacity: 0.8, duration: 0.3, ease: "ease"});
            //         edgeCaseTL.play();
            //     });
            //     element.addEventListener('mouseleave', () => {
            //         if(edgeCaseTL) {
            //             edgeCaseTL.reverse();
            //         }
            //         });
            // });

            // Create GSAP animation timeline for gridItems
            let gridItemsTL;
            // Add event listeners for hover effect
            gridItems.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    // Create GSAP animation timeline for resolveClips
                    gridItemsTL = gsap.timeline({ paused: true })
                    gridItemsTL.fromTo(element,{scale: 1.0, opacity: 1, duration: 0.5, ease: "ease"},{scale: 1.2, opacity: 0.8, duration: 0.3, ease: "ease"});
                    gridItemsTL.play();
                });
                element.addEventListener('mouseleave', () => {
                    if(gridItemsTL) {
                        gridItemsTL.reverse();
                    }
                    });

            });
    }

    const animate = () =>
    {
        let boxes = gsap.utils.toArray('.grid-container .grid-item');
        let edgeCaseItem: Array<Element> = gsap.utils.toArray('.grid-container .edge-item')
        let num = Math.floor(Math.random() * 5) + 1;
        Array.from(boxes.concat(edgeCaseItem)).forEach((column: any, index) => {
            switch(num) { 
                case 1:
                      gsap
                      .timeline()
                      .fromTo(
                        column, { 
                          x: '150%', ease:'power' + (index+1).toString() + '.inOut' ,
                      },
                      {
                          x: '0%', ease: 'power' + (index+1).toString() + '.inOut' 
                      }
                      );  
      
                break; 
      
                case 2:
                    gsap
                    .timeline()
                    .fromTo(
                      column, { 
                        x: '-150%', ease:'power' + (index+1).toString() + '.inOut' ,
                    },
                    {
                        x: '0%', ease: 'power' + (index+1).toString() + '.inOut' 
                    }
                    );  
                break; 
                case 3:
                    gsap
                    .timeline()
                    .fromTo(
                      column, { 
                        y: '150%', ease:'power' + (index+1).toString() + '.inOut' ,
                    },
                    {
                        y: '0%', ease: 'power' + (index+1).toString() + '.inOut' 
                    }
                    );  
                break; 
                case 4:
                    gsap
                    .timeline()
                    .fromTo(
                      column, { 
                        y: '150%', ease:'power' + (index+1).toString() + '.inOut' ,
                    },
                    {
                        y: '0%', ease: 'power' + (index+1).toString() + '.inOut' 
                    }
                    );  
                break; 
                default:
                    gsap
                    .timeline()
                    .fromTo(
                      column, { 
                        y: '-150%', ease:'none' ,
                    },
                    {
                        y: '0%', ease: 'none' 
                    }
                    );  
                break; 
              }
        })


    }

    const handleOnClickNavigator = async (event: React.MouseEvent<HTMLElement>) => {
        var navClick = event.currentTarget as HTMLElement
        if(navClick.hasAttribute('data-tooltip-content')) setCurrentCarouselItem(currentPageApp.carousel.itemList.find(i => i.title === navClick.getAttribute('data-tooltip-content')))
    };




    return {
        currentCarouselItem,
        currentPageApp,
        animate,
        addEventListeners,
        handleOnClickNavigator
    }


}
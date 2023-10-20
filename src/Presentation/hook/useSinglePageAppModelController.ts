import { useEffect, useState } from "react";
import { PageAppRepository } from "../../Domain/Repository/PageAppRepository";
import { SinglePageApp } from "../../Domain/Model/SinglePageApp";
import { CarouselItem, CreateCarouselItem } from "src/Domain/Model/Carousel";
import odin4 from "../../assets/images/odin4.jpg";

export function useSinglePageAppModelController(pageRepository: PageAppRepository) {
    const [ currentPageApp, setCurrentPageApp ] = useState<SinglePageApp>();
    const [ currentCarouselItem, setCurrentCarouselItem ] = useState<CarouselItem>();
    const [ currentTouchAngle, setTouchAngle] = useState<number>();
    const [ lastTouchX, setLastTouchX ] = useState<number>();
    let selectedIndex= 0;
    let wheelRotation = 0;
    let rotationIndex= 0;
    let
    distX, distY, 
    startX,startY,
    startTime, elapsedTime,
    swipeDir;

    let 
    initialTouchX, currentTouchX, 
    rotationAngle 
    = 0;


    useEffect( () => {
        async function init() {

            setCurrentPageApp(await pageRepository.getPageContent());
            setTouchAngle(0);
            
        }
        init();
    }, []);

    const setupCarousel = () => {
        const carouselItems = document.querySelectorAll('.carousel-item');
        var
        carousel = document.querySelector('.carousel-list'),
        figure = carousel.querySelector('figure'),
        numImages = figure.childElementCount,
        theta =  2 * Math.PI / numImages
        ;
        var apothem =  (200 / (2 * Math.tan(Math.PI / numImages)));

        figure.style.transformOrigin = `50% 50% ${- apothem}px`;

        carouselItems.forEach( (elem: HTMLElement, key: number) => {
            elem.style.transformOrigin = `50% 50% ${- apothem}px`;
            elem.style.transform = `rotateY(${(key+1) * theta}rad)`;
            elem.style.transform = `rotateY(${(key+1)}rad)`;

        })
    }

    const handleMouseMoveParallaxEffect = (event: React.MouseEvent<HTMLElement>) => {
        var parallaxImage = document.querySelector('.parallax-image img') as HTMLElement;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const imageMoveX = -mouseX / 40;
        const imageMoveY = -mouseY / 40;

        parallaxImage.style.transform = `translate3d(${imageMoveX}px, ${imageMoveY}px, 0)`;
        var containerRect = (parallaxImage.parentNode as Element ).getBoundingClientRect();
        var offsetX = (mouseX - containerRect.left - containerRect.width / 2) / 10;
        var offsetY = (mouseY - containerRect.top - containerRect.height / 2) / 10;
        parallaxImage.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
    }

    const handleMouseLeaveParallaxEffect = (event: React.MouseEvent<HTMLElement>) => {
        const parallaxImage = document.querySelector('.parallax-image img');
        parallaxImage.classList.remove('mouse-parallax');
    }

    const handleMouseEnterParallaxEffect = (event: React.MouseEvent<HTMLElement>) => {
        const parallaxImage = document.querySelector('.parallax-image img');
        parallaxImage.classList.add('mouse-parallax');
    }

    // const handleOnClickCarousel = (event: React.MouseEvent<HTMLElement>) => {

    //     const carouselItems = document.querySelectorAll('.carousel-item');
    //     carouselItems.forEach(item => item.classList.remove('selected'));
    //     let srcElement = event.target as HTMLElement;
    //     // srcElement.style.visibility = 'hidden';
    //     // let childElement = srcElement.children[0] as HTMLElement;
    //     // childElement.style.visibility = 'visible'

    //     // let clickEvent = new MouseEvent('click', 
    //     // {
    //     //     clientX: event.clientX,
    //     //     clientY: event.clientY
    //     // });
    //     // document.dispatchEvent(clickEvent)
    //     srcElement.classList.add('selected');
    //     // srcElement.style.display = '';
    //     console.log(srcElement);

    // }

    const handleOnWheelRotateCarousel = async (event: React.WheelEvent<HTMLUListElement>) => {

        const carouselItems = document.querySelectorAll('.carousel-item');



        var
        carousel = document.querySelector('.carousel-list'),
        figure = carousel.querySelector('figure'),
        numImages = figure.childElementCount,
        theta =  2 * Math.PI / numImages
        ;
        var apothem =  (200 / (2 * Math.tan(Math.PI / numImages)));




        if (event.deltaY < 0) {
            currentPageApp.contentIndex++;
        } else if (event.deltaY > 0) {
            currentPageApp.contentIndex--;
        }


        carouselItems.forEach(item => item.classList.remove('selected'));



        if(Math.abs(currentPageApp.contentIndex) >= carouselItems.length) {
            if (Math.abs(currentPageApp.contentIndex) > carouselItems.length) {
                if(currentPageApp.contentIndex > 0){
                    selectedIndex = Math.abs(currentPageApp.contentIndex % carouselItems.length);
                } else {
                    if(Math.abs(currentPageApp.contentIndex % carouselItems.length) === 0) {
                        selectedIndex = 0;
                    } else {
                    selectedIndex = carouselItems.length - Math.abs(currentPageApp.contentIndex % carouselItems.length);
                    }
                }
            } else if (Math.abs(currentPageApp.contentIndex) === carouselItems.length) {
                selectedIndex = 0;
            } else if(currentPageApp.contentIndex > 0) {
                selectedIndex = currentPageApp.contentIndex-1;
            } else {
                selectedIndex = carouselItems.length-1;
            }
        } else {
            if(currentPageApp.contentIndex >= 0) {
                selectedIndex = currentPageApp.contentIndex;
            } else {
                selectedIndex = carouselItems.length + currentPageApp.contentIndex;
            }        }
        carouselItems[selectedIndex].classList.add('selected');


        console.log(currentPageApp.contentIndex)

        console.log(selectedIndex)






        setCurrentCarouselItem(currentPageApp.carousel.itemList.at(selectedIndex))

        wheelRotation =  wheelRotation + (currentPageApp.contentIndex * -theta);

        // let ele =  carouselItems[selectedIndex] as HTMLElement;

        figure.style.transform = `rotateY(${ (currentPageApp.contentIndex*1) * -theta}rad)`;
                    // add on effects based on user interaction

        // ele.style.transform = `rotateX(${currentPageApp.contentIndex*.01}deg)`;
        // sticky carousel
        // nav.style.transform = `rotateX(${currentPageApp.contentIndex*.01}deg)`;
        // warp carousel
    };
    
    const handleOnMouseDownCarousel = async (event: React.MouseEvent<HTMLElement>) => {

        swipeDir= 'none';
        startX = event.clientX;
        startY = event.clientY;
        startTime = new Date().getTime();
    };
    
    const handleOnMouseUpCarousel = async (event: React.MouseEvent<HTMLElement>) => {


        var carousel = document.querySelector('.carousel-list'),

        distX = event.clientX - startX;
        distY = event.clientY - startY;
        elapsedTime = new Date().getTime() - startTime;



        if(elapsedTime <= 500) {
            if(Math.abs(distX) >= 10) {
                swipeDir = (distX < 0)? 'left' : 'right'
            }
        }

        if(swipeDir === 'left') {
            currentPageApp.contentIndex++;
        } else if (swipeDir === 'right') {
            currentPageApp.contentIndex--;
        }



        if(swipeDir !== 'none') {
            var figure = carousel.querySelector('figure'),
            numImages = figure.childElementCount,
            theta =  2 * Math.PI / numImages;
            figure.style.transform = `rotateY(${ currentPageApp.contentIndex * -theta}rad)`;        
    
        }

    };

    const handleOnTouchStartCarousel = async (event: React.TouchEvent<HTMLElement>) => {
        setLastTouchX(event.touches[0].clientX);
    };
    
    const handleOnTouchMoveCarousel = async (event: React.TouchEvent<HTMLElement>) => {

        const carouselItems = document.querySelectorAll('.carousel-item');

        console.log("touchAngle " + currentTouchAngle);
        if(currentTouchAngle === 0) {
            carouselItems[0].classList.add('selected');
            setCurrentCarouselItem(currentPageApp.carousel.itemList.at(0))
        }
        rotationAngle = currentTouchAngle;
        var carousel = document.querySelector('.carousel-list');
        var figure = carousel.querySelector('figure');

        currentTouchX = event.touches[0].pageX;

        console.log("currentTouch " + currentTouchX);
        console.log("minus " + lastTouchX);
        const rotationDelta = (currentTouchX - lastTouchX);
        console.log("delta " + rotationDelta);
        rotationAngle+=rotationDelta;

        setTouchAngle(rotationAngle);

        console.log("index " + rotationIndex);
        if(rotationAngle < 0) {
            if(rotationIndex < Math.floor(Math.abs(rotationAngle) / 60)) {
                carouselItems.forEach(item => item.classList.remove('selected'));
                currentPageApp.contentIndex = Math.floor(Math.abs(rotationAngle) / 60);
    
            if(Math.abs(currentPageApp.contentIndex) >= carouselItems.length) {
                if (Math.abs(currentPageApp.contentIndex) > carouselItems.length) {
                    if(currentPageApp.contentIndex > 0){
                        selectedIndex = Math.abs(currentPageApp.contentIndex % carouselItems.length);
                    } else {
                        if(Math.abs(currentPageApp.contentIndex % carouselItems.length) === 0) {
                            selectedIndex = 0;
                        } else {
                        selectedIndex = carouselItems.length - Math.abs(currentPageApp.contentIndex % carouselItems.length);
                        }
                    }
                } else if (Math.abs(currentPageApp.contentIndex) === carouselItems.length) {
                    selectedIndex = 0;
                } else if(currentPageApp.contentIndex > 0) {
                    selectedIndex = currentPageApp.contentIndex-1;
                } else {
                    selectedIndex = carouselItems.length-1;
                }
            } else {
                if(currentPageApp.contentIndex >= 0) {
                    selectedIndex = currentPageApp.contentIndex;
                } else {
                    selectedIndex = carouselItems.length + currentPageApp.contentIndex;
                }        
            }
            carouselItems[selectedIndex].classList.add('selected');
            setCurrentCarouselItem(currentPageApp.carousel.itemList.at(selectedIndex))
            }
            rotationIndex = Math.floor(Math.abs(rotationAngle) / 60);
            console.log("floor neg " + Math.floor(Math.abs(rotationAngle) / 60));
        }
        if(rotationAngle > 0 ) {
            if(rotationIndex < Math.floor(Math.abs(rotationAngle) / -60)) {
                carouselItems.forEach(item => item.classList.remove('selected'));
                currentPageApp.contentIndex = Math.floor(Math.abs(rotationAngle) / -60);
    
            if(Math.abs(currentPageApp.contentIndex) >= carouselItems.length) {
                if (Math.abs(currentPageApp.contentIndex) > carouselItems.length) {
                    if(currentPageApp.contentIndex > 0){
                        selectedIndex = Math.abs(currentPageApp.contentIndex % carouselItems.length);
                    } else {
                        if(Math.abs(currentPageApp.contentIndex % carouselItems.length) === 0) {
                            selectedIndex = 0;
                        } else {
                        selectedIndex = carouselItems.length - Math.abs(currentPageApp.contentIndex % carouselItems.length);
                        }
                    }
                } else if (Math.abs(currentPageApp.contentIndex) === carouselItems.length) {
                    selectedIndex = 0;
                } else if(currentPageApp.contentIndex > 0) {
                    selectedIndex = currentPageApp.contentIndex-1;
                } else {
                    selectedIndex = carouselItems.length-1;
                }
            } else {
                if(currentPageApp.contentIndex >= 0) {
                    selectedIndex = currentPageApp.contentIndex;
                } else {
                    selectedIndex = carouselItems.length + currentPageApp.contentIndex;
                }        
            }
            console.log("s " + selectedIndex);
            carouselItems[selectedIndex].classList.add('selected');
            setCurrentCarouselItem(currentPageApp.carousel.itemList.at(selectedIndex))
            }
            rotationIndex = Math.floor(Math.abs(rotationAngle) / -60);
            console.log("floor pos " + Math.floor(Math.abs(rotationAngle) / -60));

        }



        figure.style.transform = `rotateY(${rotationAngle}deg)`;
        setLastTouchX(currentTouchX);


    };

    return {
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
        handleMouseEnterParallaxEffect
    }


}
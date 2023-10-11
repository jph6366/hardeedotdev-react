import { useEffect, useState } from "react";
import { PageAppRepository } from "../../Domain/Repository/PageAppRepository";
import { SinglePageApp } from "../../Domain/Model/SinglePageApp";
import { resumeImg } from "src/Data/constants";
import { CarouselItem, CreateCarouselItem } from "src/Domain/Model/Carousel";
import odin4 from "../../assets/images/odin4.jpg";

export function useSinglePageAppModelController(pageRepository: PageAppRepository) {
    const [currentPageApp, setCurrentPageApp] = useState<SinglePageApp>();
    const [currentCarouselItem, setCurrentCarouselItem] = useState<CarouselItem>();
    let selectedIndex= 6;
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
            const cci = await new CreateCarouselItem(resumeImg,'resume', odin4)
            setCurrentCarouselItem(cci);
        }
        init();
    }, []);

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

    const handleOnWheelRotateCarousel = async (event: React.WheelEvent<HTMLUListElement>) => {

        const carouselItems = document.querySelectorAll('.carousel-item');


        var
        carousel = document.querySelector('.carousel-list'),
        figure = carousel.querySelector('figure'),
        nav = carousel.querySelector('nav'),
        numImages = figure.childElementCount,
        theta =  2 * Math.PI / numImages
        ;

        console.log(event.deltaY);
        console.log(carouselItems.length);



        if (event.deltaY < 0) {
            currentPageApp.contentIndex++;
        } else if (event.deltaY > 0) {
            currentPageApp.contentIndex--;
        }


        carouselItems.forEach(item => item.classList.remove('selected'));

        console.log("currimg"+ currentPageApp.contentIndex)


        if(Math.abs(currentPageApp.contentIndex) >= carouselItems.length) {
            if (Math.abs(currentPageApp.contentIndex) > carouselItems.length) {
                selectedIndex = Math.abs(currentPageApp.contentIndex % carouselItems.length);
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
        console.log("selected"+selectedIndex)
        carouselItems[selectedIndex].classList.add('selected');

        console.log("currimg"+ currentPageApp.contentIndex)

        setCurrentCarouselItem(currentPageApp.carousel.itemList.at(selectedIndex))

        

        figure.style.transform = `rotateY(${ currentPageApp.contentIndex+10 * -theta}rad)`;
        nav.style.transform = `rotateX(${currentPageApp.contentIndex*.01}rad)`;

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
            console.log("x" + Math.abs(distX))
            if(Math.abs(distX) >= 10) {
                swipeDir = (distX < 0)? 'left' : 'right'
            }
        }

        if(swipeDir === 'left') {
            currentPageApp.contentIndex++;
        } else if (swipeDir === 'right') {
            currentPageApp.contentIndex--;
        }

        console.log(swipeDir)


        if(swipeDir !== 'none') {
            var figure = carousel.querySelector('figure'),
            numImages = figure.childElementCount,
            theta =  2 * Math.PI / numImages;
            figure.style.transform = `rotateY(${ currentPageApp.contentIndex * -theta}rad)`;        
    
        }

    };

    const handleOnTouchStartCarousel = async (event: React.TouchEvent<HTMLElement>) => {
        initialTouchX = event.touches[0].clientX;
    };
    
    const handleOnTouchMoveCarousel = async (event: React.TouchEvent<HTMLElement>) => {

        var carousel = document.querySelector('.carousel-list');
        var figure = carousel.querySelector('figure');

        currentTouchX = event.touches[0].pageX;
        const rotationDelta = currentTouchX - initialTouchX;
        rotationAngle += rotationDelta;

        figure.style.transform = `rotateY(${rotationAngle}deg)`;
        initialTouchX = currentTouchX;


    };

    return {
        currentPageApp,
        currentCarouselItem,
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
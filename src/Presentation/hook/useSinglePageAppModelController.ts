import { useEffect, useState } from "react";
import { PageAppRepository } from "../../Domain/Repository/PageAppRepository";
import { SinglePageApp } from "../../Domain/Model/SinglePageApp";
import { resumeImg } from "src/Data/constants";
import { CarouselItem, CreateCarouselItem } from "src/Domain/Model/Carousel";
import odin4 from "../../assets/images/odin4.jpg";

export function useSinglePageAppModelController(pageRepository: PageAppRepository) {
    const [currentPageApp, setCurrentPageApp] = useState<SinglePageApp>();
    const [currentCarouselItem, setCurrentCarouselItem] = useState<CarouselItem>();
    let selectedIndex;
    let currImage = 0;

    useEffect( () => {
        async function init() {
            setCurrentPageApp(await pageRepository.getPageContent());
            setCurrentCarouselItem(await new CreateCarouselItem(resumeImg,'resume', odin4));
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
        const contentContainer = document.querySelector('.content-container');


        var
        carousel = document.querySelector('.carousel-list'),
        figure = carousel.querySelector('figure'),
        numImages = figure.childElementCount,
        theta =  2 * Math.PI / numImages
        ;
        console.log(numImages)


        if (event.deltaY < 0) {
            currImage++;
            selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : carouselItems.length - 1;
        } else if (event.deltaY > 0) {
            currImage--;
            selectedIndex = selectedIndex < carouselItems.length - 1 ? selectedIndex + 1 : 0;
        }

        carouselItems.forEach(item => item.classList.remove('selected'));
        carouselItems[selectedIndex].classList.add('selected');
        // setCurrentCarouselItem(currentPageApp.carousel.itemList.at(selectedIndex))
        // contentContainer.innerHTML = '';
        // contentContainer.append(currentCarouselItem.content)

        

        figure.style.transform = `rotateY(${currImage * -theta}rad)`;
    };

    return {
        currentPageApp,
        currentCarouselItem,
        handleOnWheelRotateCarousel,
        handleMouseMoveParallaxEffect,
        handleMouseLeaveParallaxEffect,
        handleMouseEnterParallaxEffect
    }


}
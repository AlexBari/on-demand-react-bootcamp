import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SliderContent from '../Slider/SliderContent';
import Slide from '../Slider/Slide';
import Dots from './Dot';

const CarouselCSS = styled.div`
  position: relative;
  height: 50vw;
  width: 95vw;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
`;

const Carousel = ({ slides, autoPlay }) => {
    const getWidth = () => window.innerWidth;
    const [carouselState, setCarouselState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });
    const { activeIndex, translate, transition } = carouselState;
    const resizeRef = useRef();
    const autoPlayRef = useRef();

    useEffect(() => {
        const nextSlide = () => {
            if (activeIndex === slides.length - 1) {
                return setCarouselState((prev) => ({
                    ...prev,
                    translate: 0,
                    activeIndex: 0
                }))
            }
    
            setCarouselState((prev) => ({
                ...prev,
                activeIndex: activeIndex + 1,
                translate: (activeIndex + 1) * getWidth()
            }))
        };

        const handleResize = () => {
            setCarouselState((prev) => ({ ...prev, translate: getWidth(), transition: 0 }))
        };

        const resize = () => {
            resizeRef.current()
        }
        const play = () => {
            autoPlayRef.current()
        }


        const interval = setInterval(play, autoPlay * 1000)
        const onResize = window.addEventListener('resize', resize);
    
        resizeRef.current = handleResize;
        autoPlayRef.current = nextSlide;
        return () => {
            window.removeEventListener('resize', onResize);
            clearInterval(interval);
            setCarouselState({
                activeIndex: 0,
                translate: 0,
                transition: 0.45
            });
        }
    }, [slides.length, activeIndex, autoPlay]);

    useEffect(() => {
        if (transition === 0) setCarouselState((prev) => ({ ...prev, transition: 0.45 }))
    }, [transition]);

    return (
        <CarouselCSS>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * slides.length}
            >
                {
                    slides.map((slide, i) => <Slide key={`${slide.id}-slide-${i}`} data={slide.data} isCarousel={true} />)
                }
            </SliderContent>
            <Dots slides={slides} activeIndex={activeIndex} />
        </CarouselCSS>
    );
}

Carousel.defaultProps = {
    slides: [],
}

export default Carousel;
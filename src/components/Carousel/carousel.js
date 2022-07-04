import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SliderContent from '../Slider/sliderContent';
import Slide from '../Slider/slide';
import Dots from './dot';
import Arrow from '../Slider/arrow';

const CarouselCSS = styled.div`
  position: relative;
  height: 50vw;
  width: 95vw;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
`;

const Carousel = ({ slides, autoPlay }) => {
    const navigate = useNavigate();   
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
        }
    }, [slides.length, activeIndex, autoPlay]);

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
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setCarouselState((prev) => ({
                ...prev,
                translate: (slides.length - 1) * getWidth(),
                activeIndex: slides.length - 1
            }))
        }

        setCarouselState((prev) => ({
            ...prev,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        }));
    }
    useEffect(() => {
        if (transition === 0) setCarouselState((prev) => ({ ...prev, transition: 0.45 }))
    }, [transition]);

    const clickHandler = (category) => {
        console.log(category);
        navigate({
            pathname: '/product',
            search: `?category=${category}`,
          });
    };
    
    return (
        <CarouselCSS>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * slides.length}
            >
                {
                    slides.map((slide, i) => <Slide key={`${slide.id}-slide-${i}`} data={slide.data} isContain={true} onClickHandler={() => clickHandler(slide.data.name)}/>)
                }
            </SliderContent>
            <Dots slides={slides} activeIndex={activeIndex} />
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </CarouselCSS>
    );
}

Carousel.propType = {
    slides: PropTypes.array,
    autoPlay: PropTypes.number
};

Carousel.defaultProps = {
    slides: [],
}

export default Carousel;
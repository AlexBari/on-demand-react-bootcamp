import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SliderContent from './sliderContent';
import Slide from './slide';
import Arrow from './arrow';

const SliderCSS = styled.div`
  position: relative;
  height: 60vh;
  width: 95vw;
  margin: 0 auto;
  overflow: hidden;
`;

const Slider = ({ slides = [], autoPlay }) => {
    const getWidth = () => window.innerWidth;
    const [sliderState, setSliderState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });
    const { activeIndex, translate, transition } = sliderState;
    const resizeRef = useRef();

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        const resize = () => {
            resizeRef.current()
        }

        const onResize = window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [autoPlay]);

    useEffect(() => {
        if (transition === 0) setSliderState((prev) => ({ ...prev, transition: 0.45 }))
    }, [transition]);

    const nextSlide = () => {
        if (activeIndex === slides.length - 1) {
            return setSliderState((prev) => ({
                ...prev,
                translate: 0,
                activeIndex: 0
            }))
        }

        setSliderState((prev) => ({
            ...prev,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        }))
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setSliderState((prev) => ({
                ...prev,
                translate: (slides.length - 1) * getWidth(),
                activeIndex: slides.length - 1
            }))
        }

        setSliderState((prev) => ({
            ...prev,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        }));
    }
    const handleResize = () => {
        setSliderState((prev) => ({ ...prev, translate: getWidth(), transition: 0 }))
    }

    return (
        <SliderCSS>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * slides.length}
            >
                {
                    slides.map((slide, i) => <Slide key={`${slide.id}-slide-${i}`} data={slide.data} />)
                }
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </SliderCSS>
    )
}

Slider.defaultProps = {
    slides: [],
}

export default Slider;
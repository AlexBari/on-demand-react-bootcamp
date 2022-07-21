/* eslint-disable consistent-return */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import SliderCSS from './styled';
import SliderContent from './sliderContent';
import Slide from './slide';
import Arrow from './arrow';
import Dots from '../Carousel/dot';

function Slider({ slides = [], autoPlay, isContain, sliderWidth }) {
    const getWidth = () => window.innerWidth;
    const [sliderState, setSliderState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });
    const { activeIndex, translate, transition } = sliderState;
    const resizeRef = useRef();

    const nextSlide = () => {
        if (activeIndex === slides.length - 1) {
            return setSliderState((prev) => ({
                ...prev,
                translate: 0,
                activeIndex: 0
            }));
        }

        setSliderState((prev) => ({
            ...prev,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        }));
    };

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setSliderState((prev) => ({
                ...prev,
                translate: (slides.length - 1) * getWidth(),
                activeIndex: slides.length - 1
            }));
        }

        setSliderState((prev) => ({
            ...prev,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        }));
    };

    const handleResize = () => {
        setSliderState((prev) => ({
            ...prev,
            translate: getWidth(),
            transition: 0
        }));
    };

    useEffect(() => {
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        const resize = () => {
            resizeRef.current();
        };

        const onResize = window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [autoPlay]);

    useEffect(() => {
        if (transition === 0)
            setSliderState((prev) => ({ ...prev, transition: 0.45 }));
    }, [transition]);

    return (
        <SliderCSS data-testid="sliders" sliderWidth={sliderWidth}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * slides.length}
            >
                {slides.map((slide) => (
                    <Slide
                        key={`${slide.data.main_image.url}-slide`}
                        data={slide.data}
                        isContain={isContain}
                    />
                ))}
            </SliderContent>
            <Dots slides={slides} activeIndex={activeIndex} />
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </SliderCSS>
    );
}

Slider.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    slides: PropTypes.array,
    autoPlay: PropTypes.bool,
    isContain: PropTypes.bool,
    sliderWidth: PropTypes.string
};

export default Slider;

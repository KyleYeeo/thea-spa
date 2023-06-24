import React from 'react';
import { gsap } from 'gsap';
import dataSlides from './dataSlides';
import cls from './Slider.module.css';
const { useLayoutEffect, useRef } = React;


const Slider = () => {
    const app = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        tl.current = gsap
            .timeline({ repeat: -1 })
            .to('.slide1', { opacity: 1, duration: 6, ease: 'expo.out' })
            .to('.slide1', { duration: 6, ease: 'none', scale: 1.1 }, '-=6')
            .fromTo('.slide1p', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 5, ease: 'expo.out' }, '-=5')
            .fromTo('.slide1pp', { opacity: 0, y: 120 }, { opacity: 1, y: 70, duration: 5, ease: 'expo.out' }, '-=4.5')
            .to('.slide2', { opacity: 1, duration: 6, ease: 'expo.out', scale: 1.1 })
            .to('.slide2', { duration: 6, ease: 'none', scale: 1.1 }, '-=6')
            .fromTo('.slide2p', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 5, ease: 'expo.out' }, '-=5')
            .fromTo('.slide2pp', { opacity: 0, y: 120 }, { opacity: 1, y: 70, duration: 5, ease: 'expo.out' }, '-=4.5')
            .to('.slide3', { opacity: 1, duration: 6, ease: 'expo.out', scale: 1.1 })
            .to('.slide3', { duration: 6, ease: 'none', scale: 1.1 }, '-=6')
            .fromTo('.slide3p', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 5, ease: 'expo.out' }, '-=5')
            .fromTo('.slide3pp', { opacity: 0, y: 120 }, { opacity: 1, y: 70, duration: 5, ease: 'expo.out' }, '-=4.5')
            .to('.slide4', { opacity: 1, duration: 6, ease: 'expo.out', scale: 1.1 })
            .to('.slide4', { duration: 6, ease: 'none', scale: 1.1 }, '-=6')
            .fromTo('.slide4p', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 5, ease: 'expo.out' }, '-=5')
            .fromTo('.slide4pp', { opacity: 0, y: 120 }, { opacity: 1, y: 70, duration: 5, ease: 'expo.out' }, '-=4.5')
        }, app);
        return () => ctx.revert();
    }, []);

    return (
        <div className={ cls.slider } ref={ app }>
            {dataSlides.map((slide, i) => (
                <div className={ cls.slides } key={ i }>
                    <img className={`${slide.img}`} src={ `./images/${ slide.img }.jpg` } alt='Spa' />
                    <p className={`${slide.img}p`}>{ slide.titleTop.toLocaleUpperCase() }</p>
                    <p className={`${slide.img}pp`}>{ slide.titleBottom.toLocaleUpperCase() }</p>
                </div>
            ))}
        </div>
    );
}
export default Slider;

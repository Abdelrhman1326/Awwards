import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "./Button";
import {TiLocationArrow} from "react-icons/ti";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const totalVideos = 3;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [previewIndex, setPreviewIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const backgroundVideoRef = useRef(null);
    const miniVideoRef = useRef(null);
    const nextVideoRef = useRef(null);
    const miniContainerRef = useRef(null);

    const getVideoSrc = (index) => `videos/hero-${index + 1}.mp4`;

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        setCurrentIndex((prev) => (prev + 1) % totalVideos);
    };

    useEffect(() => {
        setPreviewIndex((currentIndex + 1) % totalVideos);
    }, [currentIndex]);

    useEffect(() => {
        if (loadedVideos >= 2) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    useGSAP(() => {
        if (hasClicked && nextVideoRef.current) {
            gsap.set(miniContainerRef.current, { pointerEvents: 'none' });
            gsap.set(nextVideoRef.current, { visibility: 'visible', opacity: 1 });

            gsap.to(nextVideoRef.current, {
                transformOrigin: 'center center',
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => {
                    nextVideoRef.current?.play().catch(() => {});
                },
                onComplete: () => {
                    gsap.set(nextVideoRef.current, { visibility: 'hidden' });
                    gsap.set(miniContainerRef.current, { pointerEvents: 'all' });
                }
            });
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 0 10%'
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                triggerOnce: '#video-frame',
                start: 'top top',
                end: '+=800 center',
                scrub: true,
            }
        })
    })

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">

            <style>{`
                .three-body {
                    --uib-size: 35px;
                    --uib-speed: 0.8s;
                    --uib-color: #5724FF;
                    position: relative;
                    display: inline-block;
                    height: var(--uib-size);
                    width: var(--uib-size);
                    animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
                }
                .three-body__dot {
                    position: absolute;
                    height: 100%;
                    width: 30%;
                }
                .three-body__dot::after {
                    content: '';
                    position: absolute;
                    height: 0%;
                    width: 100%;
                    padding-bottom: 100%;
                    background-color: var(--uib-color);
                    border-radius: 50%;
                }
                .three-body__dot:nth-child(1) {
                    bottom: 5%;
                    left: 0;
                    transform: rotate(60deg);
                    transform-origin: 50% 85%;
                }
                .three-body__dot:nth-child(1)::after {
                    bottom: 0;
                    left: 0;
                    animation: wobble1 var(--uib-speed) infinite ease-in-out;
                    animation-delay: calc(var(--uib-speed) * -0.3);
                }
                .three-body__dot:nth-child(2) {
                    bottom: 5%;
                    right: 0;
                    transform: rotate(-60deg);
                    transform-origin: 50% 85%;
                }
                .three-body__dot:nth-child(2)::after {
                    bottom: 0;
                    left: 0;
                    animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15) ease-in-out;
                }
                .three-body__dot:nth-child(3) {
                    bottom: -5%;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    transform-origin: 50% 85%;
                }
                .three-body__dot:nth-child(3)::after {
                    top: 0;
                    left: 0;
                    animation: wobble2 var(--uib-speed) infinite calc(var(--uib-speed) * -0.45) ease-in-out;
                }
                @keyframes spin78236 {
                    0%   { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes wobble1 {
                    0%, 100% { transform: translateY(0%) scale(1); opacity: 1; }
                    50%      { transform: translateY(-66%) scale(0.65); opacity: 0.8; }
                }
                @keyframes wobble2 {
                    0%, 100% { transform: translateY(0%) scale(1); opacity: 1; }
                    50%      { transform: translateY(66%) scale(0.65); opacity: 0.8; }
                }
            `}</style>

            {/* --- LOADING SCREEN --- */}
            {isLoading && (
                <div className="flex items-center justify-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}

            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <video
                    key={`bg-${currentIndex}`}
                    ref={backgroundVideoRef}
                    src={getVideoSrc(currentIndex)}
                    loop autoPlay muted playsInline
                    className="absolute inset-0 size-full object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />

                <div className="mask-clip-path absolute left-1/2 top-1/2 z-50 size-64 -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-lg">
                    <div
                        ref={miniContainerRef}
                        className="flex h-full items-center justify-center origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100"
                        onClick={handleMiniVideoClick}
                    >
                        <video
                            key={`mini-${previewIndex}`}
                            ref={miniVideoRef}
                            src={getVideoSrc(previewIndex)}
                            loop autoPlay muted playsInline
                            className="size-64 origin-center scale-150 object-cover object-center"
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>

                <video
                    key={`next-${currentIndex}`}
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex)}
                    loop autoPlay muted playsInline
                    id="next-video"
                    className="invisible absolute left-1/2 top-1/2 z-20 size-64 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />

                <h1 className="special-font font-zentry text-[48px] sm:text-[110px] lg:text-[200px] absolute bottom-[40px] right-[20px] z-40 text-blue-75 uppercase leading-[0.75]">
                    G<b>a</b>MING
                </h1>

                <div className="absolute left-[20px] lg:left-[40px] top-35 z-40 text-blue-75">
                    <h1 className="special-font font-zentry text-[48px] sm:text-[110px] lg:text-[205px] leading-[0.8] uppercase">
                        REDEFI<b>N</b>E
                    </h1>
                    <p className="mt-[10px] max-w-64 text-base sm:text-lg lg:text-xl font-robert-regular">
                        Enter the Metagame Layer <br /> Unleash the Play Economy
                    </p>
                    <div className="mt-6">
                        <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />} containerClass="bg-yellow-300 flex gap-1" />
                    </div>
                </div>
            </div>

            <h1 className="special-font font-zentry text-[48px] sm:text-[110px] lg:text-[200px] absolute bottom-[40px] right-[20px] z-0 text-black uppercase leading-[0.75]">
                G<b>a</b>MING
            </h1>

        </div>
    );
};

export default Hero;
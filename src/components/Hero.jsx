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
    const miniContainerRef = useRef(null); // Ref for the hover container

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

    // GSAP Expansion & Hover Reset Logic
    useGSAP(() => {
        if (hasClicked && nextVideoRef.current) {
            // 1. FORCED HOVER RESET: Disable pointer events so Tailwind "forgets" the hover state
            gsap.set(miniContainerRef.current, { pointerEvents: 'none' });

            // 2. Prepare the expanding video
            gsap.set(nextVideoRef.current, { visibility: 'visible', opacity: 1 });

            // 3. Animate the expansion
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
                    // Hide the animator video once expansion is done
                    gsap.set(nextVideoRef.current, { visibility: 'hidden' });

                    // 4. RE-ENABLE HOVER: User must move mouse away and back to hover again
                    gsap.set(miniContainerRef.current, { pointerEvents: 'all' });
                }
            });
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%'
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                triggerOnce: '#video-frame',
                start: 'top top',
                end: 'center center',
                scrub: true,
            }
        })
    })

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
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
                {/* 1. THE MAIN BACKGROUND */}
                <video
                    key={`bg-${currentIndex}`}
                    ref={backgroundVideoRef}
                    src={getVideoSrc(currentIndex)}
                    loop autoPlay muted playsInline
                    className="absolute inset-0 size-full object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />

                {/* 2. THE MINI PREVIEW (The Trigger) */}
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

                {/* 3. THE EXPANDING ANIMATOR */}
                <video
                    key={`next-${currentIndex}`}
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex)}
                    loop autoPlay muted playsInline
                    id="next-video"
                    className="invisible absolute left-1/2 top-1/2 z-20 size-64 -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />

                {/* TYPOGRAPHY */}
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

            {/* black version below the blue one */}
            <h1 className="special-font font-zentry text-[48px] sm:text-[110px] lg:text-[200px] absolute bottom-[40px] right-[20px] z-0 text-black uppercase leading-[0.75]">
                G<b>a</b>MING
            </h1>

        </div>
    );
};

export default Hero;

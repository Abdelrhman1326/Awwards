import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

    const getVideoSrc = (index) => `videos/hero-${index + 1}.mp4`;

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        // Step forward: Background catches up to the previewed video
        setCurrentIndex((prev) => (prev + 1) % totalVideos);
    };

    // Maintain the preview always one step ahead
    useEffect(() => {
        setPreviewIndex((currentIndex + 1) % totalVideos);
    }, [currentIndex]);

    // Show loading overlay until the initial batch is ready
    useEffect(() => {
        if (loadedVideos >= 2) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    // GSAP Expansion Logic
    useGSAP(() => {
        if (hasClicked && nextVideoRef.current) {
            // 1. Reset animator visibility
            gsap.set(nextVideoRef.current, { visibility: 'visible' });

            // 2. Animate animator from center to full-screen
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
                    // 3. Hide animator so the background (already updated) takes over
                    gsap.set(nextVideoRef.current, { visibility: 'hidden' });
                }
            });
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

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
                {/* 1. THE MAIN BACKGROUND (Matches Current) */}
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

                {/* 3. THE EXPANDING ANIMATOR (Matches Current) */}
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
                <h1 className="special-font font-zentry text-[200px] absolute bottom-[-50px] right-10 z-40 text-blue-75 uppercase leading-[0.75]">
                    G<b>a</b>MING
                </h1>

                <div className="absolute left-10 top-35 z-40 text-blue-75">
                    <h1 className="special-font font-zentry text-[205px] leading-[0.8] uppercase">
                        REDEFI<b>N</b>E
                    </h1>
                    <p className="mt-[20px] max-w-64 text-xl font-robert-regular">
                        Enter the Metagame Layer <br /> Unleash the Play Economy
                    </p>
                </div>
            </div>

            {/* Back-layer Text */}
            <h1 className="special-font font-zentry text-[200px] absolute right-10 bottom-6 z-0 text-black uppercase leading-0">
                G<b>a</b>MING
            </h1>
        </div>
    );
};

export default Hero;
import React, {useRef, useState} from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 3;
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">

                <div className="mask-clip-path absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div
                        className="flex items-center justify-center h-full origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100 "
                        onClick={() => handleMiniVdClick()}
                    >
                        <video
                            ref={nextVideoRef}
                            src={getVideoSrc(currentIndex + 1)}
                            loop
                            autoPlay
                            muted
                            playsInline
                            id="current-video"
                            className="size-64 origin-center scale-150 object-cover object-center"
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
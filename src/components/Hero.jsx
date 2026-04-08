import React from 'react'

const Hero = () => {
    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                {/* Fixed line below: swapped absolute-center for Tailwind centering utilities */}
                <div className="mask-clip-path absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 size-64 cursor-pointer overflow-hidden rounded-lg bg-white">
                    <div className="flex items-center justify-center h-full">
                        MiniVideoPlayer
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
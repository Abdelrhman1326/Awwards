
import React from 'react';
import BentoCard from './BentoCard';

const Features = () => {
    return (
        // Changed max-h-screen to h-screen so the background actually shows up
        <section className="min-h-screen bg-black relative overflow-hidden">
            <div className="text-blue-50 font-circular text-lg mt-[120px] ml-[13vw] mb-[13vh] max-w-[80vw]">
                {/* Wrapped title in a span or heading for better control */}
                <span className="block mb-2 font-bold uppercase tracking-tighter">
                    Into Metagame Layer
                </span>
                <p className="opacity-60">
                    Immerse yourself in a rich and ever-expanding universe
                    <br />
                    where a vibrant array of products converge into an
                    <br />
                    interconnected overlay experience on your world.
                </p>

            </div>
            <div className="bg-black min-w-screen h-auto flex justify-center">
                <div id="card1" className="h-96 md:h-[65vh] w-[75vw] overflow-hidden rounded-lg mb-7 border-[1px] border-white/25">
                    <BentoCard
                        src="/videos/feature-1.mp4"
                        title="radia<b>n</b>t"
                        description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    />
                </div>
            </div>
        </section>
    )
}

export default Features;

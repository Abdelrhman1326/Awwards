import BentoCard from './BentoCard';
import { MdNearMe } from "react-icons/md";
import React from "react";

const Features = () => {
    return (
        <section className="min-h-screen bg-black relative overflow-hidden">
            <div className="text-blue-50 font-circular text-lg mt-[120px] ml-[10vw] mb-[13vh] max-w-[80vw]">
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

            <div className="bg-black min-w-screen h-auto grid justify-items-center">
                <div id="card1" className="h-96 md:h-[65vh] w-[85vw] overflow-hidden mb-7">
                    <BentoCard
                        src="/videos/feature-1.mp4"
                        title="radia<b>n</b>t"
                        description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    />
                </div>

                <div className="bg-black grid grid-cols-2 grid-rows-5 gap-x-4 gap-y-6 justify-items-center">

                    <div className="md:col-start-1 col-start-1 col-end-3 md:col-end-2 md:row-start-1 md:row-end-3 md:w-[42vw] w-[85vw] md:h-full h-[35vh] overflow-hidden">
                        <BentoCard
                            src="/videos/feature-2.mp4"
                            title="zig<b>m</b>a"
                            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        />
                    </div>

                    <div className="justify-self-start md:col-start-2 col-start-1 col-end-3 row-start-2 row-end-3 md:col-end-3 md:row-start-1 md:row-end-2 md:w-[42vw] md:h-[42vh] overflow-hidden">
                        <BentoCard
                            src="/videos/feature-3.mp4"
                            title="n<b>e</b>xus"
                            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        />
                    </div>

                    <div className="justify-self-end md:col-start-2 col-start-1 col-end-3 row-start-3 row-end-4 md:col-end-3 md:row-start-2 md:row-end-3 md:w-[42vw] md:h-[42vh] overflow-hidden">
                        <BentoCard
                            src="/videos/feature-4.mp4"
                            title="az<b>u</b>l"
                            description="Cross-world AI Agent - elevating your gameplay to be more fun and productive."
                        />
                    </div>

                    {/* LAST ROW — TWO VIDEOS SIDE BY SIDE */}
                    <div className="col-start-1 col-end-2 min-w-full md:row-start-3 md:row-end-4 row-start-4 row-end-5 overflow-hidden
                                    bg-violet-300 rounded-lg
                                    [&_h2]:!text-black
                    ">
                        <div className="relative size-full overflow-hidden border-[1px] border-white/25 rounded-lg">
                            <div className="relative z-10 flex flex-col px-6 py-7 gap-5">
                                <h2 className="special-font font-zentry text-blue-50 text-5xl md:text-6xl uppercase">
                                    M<b>O</b>RE <br /> CO<b>M</b>ING <br /> S<b>O</b>ON!
                                </h2>
                            </div>
                            <MdNearMe className="absolute right-5 bottom-5" size={60} />
                        </div>
                    </div>

                    <div className="col-start-2 col-end-3 min-w-full md:row-start-3 md:row-end-4 row-start-4 row-end-5 overflow-hidden">
                        <BentoCard src="/videos/feature-5.mp4" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;


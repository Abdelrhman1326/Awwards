const StoryExtend = () => {
    return (
        <div className="h-auto w-dvw flex flex-col overflow-hidden">
            <div className="flex justify-center my-20 px-10">
                {/* overflow-x-clip allows vertical breakout but prevents horizontal scroll */}
                <div className="relative overflow-x-clip bg-black min-w-full h-[500px] p-25 flex flex-col items-center">
                    <p className="uppercase text-xs text-blue-50 text-center mb-[-70px] mt-15 md:mb-4 md:mt-0 z-40">Join Zentry</p>
                    <h1 className="text-blue-50 text-center special-font uppercase font-zentry text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mt-20 md:mt-0 mb-10 z-40">
                        Let's build the <br /> new era of g<b>a</b>ming t<b>o</b>gether.
                    </h1>
                    <button
                        className="font-robert-normal text-xs min-w-[120px] md:text-sm bg-blue-50 text-black/90 px-6 py-3 rounded-full cursor-pointer z-40">
                        contact us
                    </button>

                    <div>
                        <img
                            src="/img/swordman-partial.webp"
                            alt=""
                            className="absolute w-[300px] md:w-[400px] bottom-[200px] md:bottom-[-25px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[-20px] lg:right-0"
                        />
                        <img
                            src="/img/swordman.webp"
                            alt=""
                            className="absolute w-[300px] md:w-[400px] bottom-[200px] md:bottom-[-25px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[-20px] lg:right-0"
                            style={{ clipPath: "polygon(16% 0%, 90% 15%, 75% 95.3%, 0% 95.3%)" }}
                        />
                    </div>

                    <img
                        src="/img/contact-1.webp"
                        alt=""
                        className="absolute w-[355px] bottom-[258px] hidden md:block md:left-[-80px] lg:left-15"
                        style={{ clipPath: "polygon(22% 0, 75% 0, 70% 73%, 31% 81%)" }}
                    />
                    <img
                        alt=""
                        src="/img/contact-2.webp"
                        className="absolute w-[350px] bottom-[-156px] hidden md:block md:left-[-80px] lg:left-15"
                        style={{ clipPath: "polygon(28% 12%, 28% 12%, 90% 30%, 20% 30%)"}}
                    />
                </div>
            </div>
        </div>
    )
}

export default StoryExtend;

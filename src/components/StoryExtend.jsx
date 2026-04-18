const StoryExtend = () => {
    return (
        <div className="h-auto w-dvw flex flex-col">
            <div className="flex justify-center my-20 px-10">
                {/* Added flex flex-col items-center here */}
                <div className="bg-black min-w-full h-[500px] p-25 flex flex-col items-center">
                    <p className="uppercase text-xs text-blue-50 text-center mb-6 z-40">Join Zentry</p>
                    <h1 className="text-blue-50 text-center special-font uppercase font-zentry text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-10 z-40">
                        Let's build the <br /> new era of g<b>a</b>ming t<b>o</b>gether.
                    </h1>
                    <button
                        className="font-robert-normal text-xs min-w-[120px] md:text-sm bg-blue-50 text-black/90 px-6 py-3 rounded-full cursor-pointer z-40">
                        contact us
                    </button>
                    <img
                        src="/img/swordman.webp"
                        alt="swordman"
                        className="absolute w-[400px] right-10 bottom-28"
                        style={{ clipPath: "polygon(16% 0%, 90% 15%, 75% 95.3%, 0% 95.3%)" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default StoryExtend;

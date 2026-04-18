const StoryExtend = () => {
    return (
        <div className="h-auto w-dvw flex flex-col">
            <div className="flex justify-center my-20 px-10">
                {/* Added flex flex-col items-center here */}
                <div className="bg-black min-w-full h-[500px] p-25 flex flex-col items-center">
                    <p className="uppercase text-xs text-blue-50 text-center mb-6">Join Zentry</p>
                    <h1 className="text-blue-50 text-center special-font uppercase font-zentry text-8xl mb-10">
                        Let's build the <br /> new era of g<b>a</b>ming t<b>o</b>gether.
                    </h1>
                    <button className="font-robert-normal text-sm bg-blue-50 text-black/90 px-6 py-3 rounded-full">
                        contact us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StoryExtend;
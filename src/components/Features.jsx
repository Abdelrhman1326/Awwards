import React from 'react'

const Features = () => {
    return (
        // Changed max-h-screen to h-screen so the background actually shows up
        <section className="max-h-screen bg-black relative overflow-hidden">
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
            <div className="bg-black min-w-screen h-[1000px] border-t-1 border-white flex justify-center">
                <div id="card1" className="bg-white mb-7 h-96 md:h-[65vh] w-[75vw] overflow-hidden rounded-md"></div>
            </div>
        </section>
    )
}

export default Features;

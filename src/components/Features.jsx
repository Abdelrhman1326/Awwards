import React from 'react'

const Features = () => {
    return (
        // Changed max-h-screen to h-screen so the background actually shows up
        <section className="max-h-screen bg-black flex relative overflow-hidden">
            <div className="text-blue-50 font-circular text-lg mt-[120px] ml-[13vw] mb-[13vh] max-w-[80vw]">
                {/* Wrapped title in a span or heading for better control */}
                <span className="block mb-2 font-bold uppercase tracking-tighter">
                    Into Metagame Layer
                </span>
                <p>
                    Immerse yourself in a rich and ever-expanding universe
                    <br />
                    where a vibrant array of products converge into an
                    <br />
                    interconnected overlay experience on your world.
                </p>
            </div>
        </section>
    )
}

export default Features
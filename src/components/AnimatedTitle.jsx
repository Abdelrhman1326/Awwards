import React from 'react'

const AnimatedTitle = ({ title }) => {
    return (
        <div className="special-font text-center text-4xl uppercase leading-[0.8] md:text-[6rem] font-zentry">
            {title.split("<br />").map((line, lineIndex) => (
                <div
                    key={lineIndex}
                    className="flex justify-center flex-wrap max-w-full px-10 gap-x-3 gap-y-2"
                >
                    {line.trim().split(" ").map((word, wordIndex) => (
                        <span
                            key={wordIndex}
                            className="animated-word inline-block"
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default AnimatedTitle
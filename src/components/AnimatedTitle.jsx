import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef = useRef(null)

    useGSAP(() => {

        const words = containerRef.current.querySelectorAll(".animated-word")

        // initial state
        gsap.set(words, {
            opacity: 0,
            rotateY: 45,
            rotateX: -25,
            x: 150,
            y: 150,
            transformPerspective: 1000,
            transformOrigin: "center",
        })

        // animation
        gsap.to(words, {
            opacity: 1,
            rotateY: 0,
            rotateX: 0,
            x: 0,
            y: 0,
            ease: "power2.inOut",
            stagger: 0.02,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "center bottom",
                toggleActions: "play none none reverse",
            }
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
            {title.split(/<br\s*\/?>/i).map((line, lineIndex) => (
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

export default AnimatedTitle;

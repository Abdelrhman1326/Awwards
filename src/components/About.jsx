import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const clipRef = useRef(null);
    const maskRef = useRef(null);

    useGSAP(() => {
        gsap.set(maskRef.current, {
            position: "absolute",
            top: 0,
            left: "50%",
            xPercent: -50,
            yPercent: 0,
            width: "450px",
            height: "500px",
            borderRadius: "24px",
            overflow: "hidden",
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: clipRef.current,
                start: "top top",
                end: "+=800",
                scrub: true,
                pin: true,
                pinSpacing: true,
            }
        })
            .to(maskRef.current, {
                width: "100vw",
                height: "100vh",
                objectPosition: "50% 50%",
                objectFit: "cover",
                borderRadius: 0,
                ease: "none",
            });

    }, []);

    return (
        <div id="about" className="min-h-screen w-screen relative">

            {/* Top text */}
            <div className="relative mt-36 flex flex-col items-center gap-3 px-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]">
                    Welcome To Zentry
                </h2>

                <div className="special-font text-center text-4xl uppercase leading-[0.8] md:text-[6rem] font-zentry">
                    Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared <b>a</b>dventure
                </div>
            </div>

            {/* Expanding image section */}
            <div
                ref={clipRef}
                id="clip"
                className="relative w-screen h-dvh mt-10 z-50"
            >
                <div ref={maskRef} className="about-image">
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="w-full h-full object-cover object-center z-40"
                    />
                </div>
            </div>

            {/* Bottom text */}
            <div className="about-subtext px-6 absolute left-1/2 -translate-x-1/2 top-[780px] text-center">
                <p className="font-robert-medium text-lg">The Game of Games begins—your life, now an epic MMORPG</p>
                <p className="text-gray-500 font-robert-medium text-lg">
                    Zentry unites every player from countless games and platforms,
                    <br />
                    both digital and physical, into a unified Play Economy
                </p>
            </div>

        </div>
    );
};

export default About;

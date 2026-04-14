import Button from "./Button.jsx";
import { MdNearMe } from "react-icons/md";
import {useRef} from "react";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function NavBar() {
    const navBarRef = useRef(null);
    const navBarContentRef = useRef(null);

    useGSAP(() => {
        let lastY = window.scrollY;

        const tween = gsap.to(navBarRef.current, {
            y: -120,
            duration: 1,
            ease: "power3.inOut",
            paused: true,
        });

        ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: () => {
                const currentY = window.scrollY;
                const diff = currentY - lastY;

                if (Math.abs(diff) < 5) return;

                if (diff > 0) {
                    // scroll down → hide
                    tween.play();
                } else {
                    // scroll up → show
                    tween.reverse();
                }

                lastY = currentY;
            },
        });
    }, []);

    useGSAP(() => {
        const el = navBarContentRef.current;

        gsap.set(el, {
            backgroundColor: "transparent",
        });

        ScrollTrigger.create({
            start: "top top",
            end: "bottom top",

            onUpdate: () => {
                if (window.scrollY < 10) {
                    gsap.to(el, {
                        backgroundColor: "transparent",
                        duration: 0.5,
                        overwrite: "auto",
                    });
                } else {
                    gsap.to(el, {
                        backgroundColor: "#000",
                        duration: 0.5,
                        overwrite: "auto",
                    });
                }
            },
        });
    }, []);


    const navItems = ['nexus', 'valut', 'prologue', 'about', 'contact', '..'];

    return (
        <header ref={navBarRef} className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
            <nav ref={navBarContentRef} className="mx-auto max-w-full h-16 bg-black rounded-lg flex items-center px-8 gap-8">
                <img
                    src="img/logo.png"
                    alt="Logo"
                    className="w-10"
                />
                <Button
                    id="products"
                    title="Products"
                    rightIcon={<MdNearMe size={13} />}
                    containerClass="bg-blue-75 text-black flex items-center gap-1"
                />
                <ul className="flex flex-row items-center gap-10 ml-auto">
                    {navItems.map((item, index) => (
                        <li id={index} className="relative group cursor-pointer text-xs text-blue-50 uppercase">
                            {item}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-50 origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

import Button from "./Button.jsx";
import { MdNearMe } from "react-icons/md";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
    const navBarRef = useRef(null);
    const navBarContentRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // Hide/show on scroll
    useGSAP(() => {
        let lastY = window.scrollY;

        const tween = gsap.to(navBarRef.current, {
            y: -120,
            duration: 0.8,
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
                diff > 0 ? tween.play() : tween.reverse();
                lastY = currentY;
            },
        });
    }, []);

    // Background on scroll
    useGSAP(() => {
        const el = navBarContentRef.current;
        gsap.set(el, { backgroundColor: "transparent" });

        ScrollTrigger.create({
            start: "top top",
            end: "bottom top",
            onUpdate: () => {
                gsap.to(el, {
                    backgroundColor: window.scrollY < 10 ? "transparent" : "#000",
                    duration: 0.5,
                    overwrite: "auto",
                });
            },
        });
    }, []);

    // Animate mobile menu open/close
    useGSAP(() => {
        if (!mobileMenuRef.current) return;
        if (menuOpen) {
            gsap.fromTo(
                mobileMenuRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.35, ease: "power3.out" }
            );
        } else {
            gsap.to(mobileMenuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.25,
                ease: "power3.in",
            });
        }
    }, [menuOpen]);

    const navItems = ["nexus", "valut", "prologue", "about", "contact"];

    return (
        <header ref={navBarRef} className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
            <nav ref={navBarContentRef} className="mx-auto max-w-full bg-black rounded-lg px-8">
                {/* Main row */}
                <div className="flex items-center h-16 gap-8">
                    <img src="img/logo.png" alt="Logo" className="w-10 flex-shrink-0" />

                    <Button
                        id="products"
                        title="Products"
                        rightIcon={<MdNearMe size={13} />}
                        containerClass="bg-blue-75 text-black flex items-center gap-1"
                    />

                    {/* Desktop nav links */}
                    <ul className="hidden md:flex flex-row items-center gap-10 ml-auto">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="relative group cursor-pointer text-xs text-blue-50 uppercase"
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-50 origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
                            </li>
                        ))}
                        <li className="cursor-pointer text-xs text-blue-50 uppercase">..</li>
                    </ul>

                    {/* Hamburger — mobile only */}
                    <button
                        className="md:hidden ml-auto flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block h-[2px] w-6 bg-blue-50 transition-all duration-300 ${
                                menuOpen ? "rotate-45 translate-y-[7px]" : ""
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-6 bg-blue-50 transition-all duration-300 ${
                                menuOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-6 bg-blue-50 transition-all duration-300 ${
                                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                            }`}
                        />
                    </button>
                </div>

                {/* Mobile dropdown */}
                <div
                    ref={mobileMenuRef}
                    className="md:hidden overflow-hidden h-0 opacity-0"
                >
                    <ul className="flex flex-col items-start gap-5 pb-6 pt-2">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="relative group cursor-pointer text-xs text-blue-50 uppercase"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-50 origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
                            </li>
                        ))}
                        <li className="cursor-pointer text-xs text-blue-50 uppercase">..</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
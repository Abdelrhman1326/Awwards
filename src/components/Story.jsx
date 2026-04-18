import AnimatedTitle from "./AnimatedTitle.jsx";
import {useRef} from "react";

const Story = () => {

    const imgRef = useRef(null);
    const handleMouseMove = (e) => {
        const el = imgRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const w = rect.width;
        const h = rect.height;

        const rotXPerc = (x / w) - 0.5;
        const rotYPerc = (y / h) - 0.5;
        const maxRotate = 20;
        const rotateX = rotXPerc * maxRotate;
        const rotateY = -rotYPerc * maxRotate;

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.98)`;
    };

    const handleMouseLeave = () => {
        const el = imgRef.current;
        if (!el) return;
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    return (
        <section className="relative p-5 bg-black text-blue-50 flex flex-col gap-y-4 pb-22">
            <div className="z-40 flex flex-col items-center gap-y-2">
                <p className="uppercase text-center">the multiversal ip world</p>
                <AnimatedTitle
                    title="The st<b>o</b>ry of a hidden realm"
                    containerClass="special-font text-center text-4xl uppercase leading-[0.8] md:text-[6rem] text-white font-zentry drop-shadow-2xl"
                />
            </div>

            <div className="-translate-y-[100px] absolute-center w-full flex justify-center">
                <div
                    style={{ clipPath: "polygon(10% 0, 100% 20%, 100% 80%, 0% 105%)" }}
                    className="relative w-[90%] max-w-[60dvw]"
                >
                    <img
                        ref={imgRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        src="/img/entrance.webp"
                        alt="entrance"
                        className="w-full block scale-130 -rotate-5"
                    />
                </div>
            </div>

            {/* bottom text + button */}
            <div className="md:right-10 flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
                <p className="text-blue-50 font-circular text-center text-sm md:text-base max-w-[90vw] md:max-w-[40dvw] lg:max-w-[30dvw] md:mr-[3vw]">
                    Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.
                </p>
                <button className="uppercase font-robert-normal bg-blue-50 text-black/90 text-xs w-[200px] h-[42px] rounded-full mr-0 md:mr-[16vw]">
                    discover prologue
                </button>
            </div>
        </section>
    )
}
export default Story;

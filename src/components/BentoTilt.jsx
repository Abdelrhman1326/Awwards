import { useRef } from "react";

const BentoTilt = ({ children }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = cardRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const w = rect.width;
        const h = rect.height;

        // normalize (-0.5 → 0.5)
        const rotXPerc = (x / w) - 0.5;
        const rotYPerc = (y / h) - 0.5;

        const maxRotate = 20; // increasing this value will make the rotations degrees higher

        const rotateX = rotXPerc * maxRotate;
        const rotateY = -rotYPerc * maxRotate;

        el.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(0.98)
        `;
    };

    const handleMouseLeave = () => {
        const el = cardRef.current;
        if (!el) return;

        el.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="h-full w-full will-change-transform transition-transform duration-200 ease-out"
        >
            {children}
        </div>
    );
};

export default BentoTilt;

import { useState, useEffect, useRef } from "react";

export const useMousePosition = (start) => {
    const [mousePosition, setMousePosition] = useState([]);

    const updateMousePosition = ev => {
        const d1 = new Date();
        const position = { time: d1.getTime() - start, x: ev.clientX, y: ev.clientY }
        // console.log(position)
        setMousePosition(mousePosition => [...mousePosition, position]);
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};
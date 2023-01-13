import { useState, useCallback, useEffect, useLayoutEffect, useRef } from "react";

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

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export const useKeyPress = (keys, callback, node = null) => {
    // implement the callback ref pattern
    const callbackRef = useRef(callback);
    useLayoutEffect(() => {
      callbackRef.current = callback;
    });
  
    // handle what happens on key press
    const handleKeyPress = useCallback(
      (event) => {
        // check if one of the key is part of the ones we want
        if (keys.some((key) => event.key === key)) {
          callbackRef.current(event);
        }
      },
      [keys]
    );
  
    useEffect(() => {
      // target is either the provided node or the document
      const targetNode = node ?? document;
      // attach the event listener
      targetNode &&
        targetNode.addEventListener("keydown", handleKeyPress);
  
      // remove the event listener
      return () =>
        targetNode &&
          targetNode.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress, node]);
  };
  
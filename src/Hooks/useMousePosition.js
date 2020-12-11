import { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({x: null, y: null});

    const updateMousePosition = (event) => {
        setMousePosition({x: event.clientX, y: event.clientY});
    }

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {updateMousePosition(event)});

        return () => window.removeEventListener('mousemove',(event) => updateMousePosition(event));
    }, []);

    return mousePosition;
}

export default useMousePosition;
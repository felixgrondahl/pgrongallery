import { useState, useEffect } from 'react';

const useMouseMovement = () => {
    const [mouseMovement, setMouseMovement] = useState({x: null, y: null});

    const updateMouseMovement = (event) => {
        setMouseMovement({ x: event.movementX, y: event.movementY });
    }

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {updateMouseMovement(event)});

        return () => window.removeEventListener('mousemove',(event) => updateMouseMovement(event));
    }, []);

    return mouseMovement;
}

export default useMouseMovement;
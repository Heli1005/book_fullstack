import React, { useEffect, useState } from "react";

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
}
const useWindowDimens = () => {
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimens;

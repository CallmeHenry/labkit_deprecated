import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import chevronAnimation from './chevron-animation.json';

export default function Chevron({ text, rotation }) {
    const animationContainer = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: chevronAnimation,
        });

        return () => {
            anim.destroy();
        };
    }, [isHovered]);

    return (
        <div className='flex w-full h-full items-center justify-center'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered ? (
                <div ref={animationContainer} className={`${rotation} h-full`}></div>
            ) : (
                <p>{text}</p>
            )}
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; //npm install @fortawesome/fontawesome-free

import '../../scss/ScrollToTopButton.scss';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        const startY = window.scrollY;
        const stopY = 0;
        const distance = startY - stopY;
        let speed = Math.round(distance / 100); // speed calculation
        if (speed >= 20) speed = 20; // limit speed
        const step = Math.round(distance / 25); // step calculation
        let leapY = startY - step;
        let timer = 0;
        if (startY > stopY) {
            const scrollInterval = setInterval(() => {
                leapY = easeInOutCubic(timer, startY, -distance, speed);
                window.scrollTo(0, leapY);
                timer++;
                if (timer >= speed) {
                    clearInterval(scrollInterval);
                    window.scrollTo(0, stopY);
                }
            }, 20); // Adjust interval as needed for smoothness
        }
    };
    
    // Easing function (ease-in-out cubic)
    const easeInOutCubic = (t: number, b: number, c: number, d: number): number => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            handleScroll();
        };

        window.addEventListener('scroll', handleScrollEvent);

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, [isVisible]);

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
            <button onClick={scrollToTop} className="scroll-button">
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default ScrollToTopButton;

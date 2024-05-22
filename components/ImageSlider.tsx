"use client";

import { useEffect, useState } from 'react';

export default function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide >= 2 ? 1 : prevSlide + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-10 relative w-4/5 h-128 overflow-hidden mx-auto">
            <div className="slides flex transition-transform duration-500" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
                <div className="slide w-full flex-shrink-0">
                    <img src="/hf.jpg" alt="HF radio" className="w-[75%] md:w-[50%] h-[90%] object-cover mx-auto rounded-lg" />
                </div>
                <div className="slide w-full flex-shrink-0">
                    <img src="/youth.jpg" alt="Youth in ham radio" className="w-[75%] md:w-[50%] h-[90%] object-cover mx-auto rounded-lg" />
                </div>
                {/*              
                <div className="slide w-full flex-shrink-0">
                    <img src="/images/image3.jpg" alt="Image 3" className="w-full h-auto object-cover" />
                </div>
                <div className="slide w-full flex-shrink-0">
                    <img src="/images/image4.jpg" alt="Image 4" className="w-full h-auto object-cover" />
                </div>
                 */}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {[1, 2].map((num) => (
                    <button
                        key={num}
                        onClick={() => setCurrentSlide(num)}
                        className={`cursor-pointer p-2 rounded-full ${currentSlide === num ? 'bg-[rgb(56,34,15)]' : 'bg-[rgba(56,34,15,0.74)]'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

// 저작권 없는 이미지 다운로드 https://pixabay.com/images/search/%EC%9D%8C%EC%8B%9D/ 
import React from 'react';
import CarouselLeft from './carouselLeft';
import CarouselRight from './carouselRight';

const MainCarousel = () => {
    return (
        <>
            <div className="carousel_contain">
                <CarouselLeft />
                <CarouselRight/>
            </div>
            <style jsx>{`
            li{
                list-style: none;
            }
            .carousel_contain{
                position: relative;
                display: flex;
                gap: 50px;
                height: calc(400px * 4);
                animation: main_carousel 15s linear infinite;
                @media (max-width: 900px){
                    height: 400px;
                    flex-direction: column;
                    animation: mobile_main_carousel 15s linear infinite;
                    align-items: center;
                }
            }
            @keyframes main_carousel{
                0% {
                    transform: translateY(0);
                }
                100%{
                    transform: translateY(calc(-400px * 4.3))
                }
            }
            @keyframes mobile_main_carousel {
                0% {
                    transform: translateX(0);
                }
                100%{
                    transform: translateX(calc(-400px * 4.48))
                }   
            }
            `}</style>
        </>
    );
};

export default MainCarousel;
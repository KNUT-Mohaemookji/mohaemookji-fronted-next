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
                height: calc(400px * 4);
                animation: main_carousel 10s linear infinite;
                animation-duration: 10s;
            }
            @keyframes main_carousel{
                0% {
                    transform: translateY(0);
                }
                100%{
                    transform: translateY(calc(-400px * 4.3))
                }
            }
            `}</style>
        </>
    );
};

export default MainCarousel;
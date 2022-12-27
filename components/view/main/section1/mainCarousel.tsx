// 저작권 없는 이미지 다운로드 https://pixabay.com/images/search/%EC%9D%8C%EC%8B%9D/ 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MainCarousel = () => {
    // const [leftImg, setLeftImg] = useState<string[]>(['왼쪽이미지1', '왼쪽이미지2', '왼쪽이미지3','왼쪽이미지4','왼쪽이미지1', '왼쪽이미지2', '왼쪽이미지3','왼쪽이미지4']);
    // const [rightImg, setRightImg] = useState<string[]>(['오른쪽이미지1', '오른쪽이미지2', '오른쪽이미지3','오른쪽이미지4', '오른쪽이미지1', '오른쪽이미지2', '오른쪽이미지3','오른쪽이미지4']);
    const [leftImg, setLeftImg] = useState<string[]>(['/img/main/carousel1.jpg', '/img/main/carousel2.jpg', '/img/main/carousel3.jpg','/img/main/carousel4.jpg','/img/main/carousel1.jpg', '/img/main/carousel2.jpg', '/img/main/carousel3.jpg','/img/main/carousel4.jpg']);
    const [rightImg, setRightImg] = useState<string[]>(['/img/main/carousel4.jpg', '/img/main/carousel3.jpg', '/img/main/carousel2.jpg','/img/main/carousel1.jpg', '/img/main/carousel4.jpg', '/img/main/carousel3.jpg', '/img/main/carousel2.jpg','/img/main/carousel1.jpg']);
    useEffect(() => {
        console.log(leftImg);
        console.log(rightImg);
        
        
    }, [leftImg, rightImg]);
    return (
        <>
            <div className="carousel_contain">
                <div className="leftCarousel">
                    <ul className="left_carousels">
                    {
                        leftImg.map((item, index) => {
                            return (
                                <li className="left_carousel carousel" key={ index }
                                style={{backgroundImage: `url(${item})`}}></li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="rightCarousel">
                    <ul className="right_carousels">
                    {
                        rightImg.map((item, index) => {
                            return (
                                <li className="right_carousel carousel" key={index}
                                style={{backgroundImage: `url(${item})`}}></li>
                            )
                        })
                    }
                    </ul>
                </div>
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
                .carousel{
                    width: 200px;
                    height: 400px;
                    border-radius: 20px;
                    margin-top: 30px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .leftCarousel{
                    margin-top: -25%;
                    .left_carousels {
                        .left_carousel{
                            background-color: lightgrey;
                        }
                    }
                }
                .rightCarousel{
                    margin-top: -40%;
                    .right_carousels {
                        .right_carousel{
                            background-color: skyblue;
                        }
                    }
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
            `}</style>
        </>
    );
};

export default MainCarousel;
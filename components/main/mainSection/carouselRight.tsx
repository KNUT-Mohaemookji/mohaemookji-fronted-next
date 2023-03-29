import React from 'react';

const CarouselRight = () => {
    const rightImg = ['/img/main/carousel4.jpg', '/img/main/carousel3.jpg', '/img/main/carousel2.jpg','/img/main/carousel1.jpg', '/img/main/carousel4.jpg', '/img/main/carousel3.jpg', '/img/main/carousel2.jpg','/img/main/carousel1.jpg'];
    return (
        <>
            <div className="right_carousel">
                <ul className="right_carousels">
                {
                    rightImg.map((item, index) => {
                        return (
                            <li className="left_carousel carousel" key={ index }
                            style={{backgroundImage: `url(${item})`}}></li>
                        )
                    })
                }
                </ul>
            </div>
            <style jsx>{`
                .carousel{
                    position: relative;
                    top: 50px;
                    width: 200px;
                    height: 400px;
                    border-radius: 20px;
                    margin-top: 30px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    @media (max-width: 900px){
                        width: 400px;
                        height: 200px;
                    }
                }
                .right_carousel{
                    .right_carousels {
                        .right_carousel{
                            background-color: lightgrey;
                        }
                        @media (max-width: 900px){
                            // height: 100vh;
                            display: flex;
                            align-items: end;
                            gap: 50px;
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default CarouselRight;
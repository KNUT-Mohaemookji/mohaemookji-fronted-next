import React from 'react';
import { carouselImageRight } from '../../../utils/main/constants';

const CarouselRight = () => {
    return (
        <>
            <div className="right_carousel">
                <ul className="right_carousels">
                {
                    carouselImageRight.map((item, index) => {
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
                        left: 50px;
                    }
                }
                .right_carousel{
                    .right_carousels {
                        .right_carousel{
                            background-color: lightgrey;
                        }
                        @media (max-width: 900px){
                            display: flex;
                            align-items: end;
                            gap: 50px;
                            margin-top: -3%;
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default CarouselRight;
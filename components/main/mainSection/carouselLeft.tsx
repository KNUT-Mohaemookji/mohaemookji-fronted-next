import React from 'react';
import { carouselImageLeft } from '../../../utils/main/constants';

const CarouselLeft = () => {
    return (
        <>
            <div className="left_carousel">
                <ul className="left_carousels">
                {
                    carouselImageLeft.map((item, index) => {
                        return (
                            <li className="right_carousel carousel" key={ index }
                            style={{backgroundImage: `url(${item})`}}></li>
                        )
                    })
                }
                </ul>
            </div>
            <style jsx>{`
                .carousel{
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
                .left_carousel{
                    @media (max-width: 1200px){
                        margin-top: 10%;
                    }
                    @media (max-width: 500px){
                        margin-top: 6%;
                    }
                    
                    .left_carousels {
                        height: 30vh;
                        .left_carousel{
                            background-color: lightgrey;
                        }
                        @media (max-width: 900px){
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

export default CarouselLeft;
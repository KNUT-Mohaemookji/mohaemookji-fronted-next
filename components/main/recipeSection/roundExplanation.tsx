import React from 'react';
import RoundExplanationContent from './roundExplanationContent';
import RoundExplnationImage from './explanationImage';

const RoundExplanation = () => {
    return (
        <>
            <div className="round_explanation_contain">
                <div className="content">
                    <div className="content_item">
                        <div className="back_black_color" />
                        <RoundExplanationContent/>
                        <RoundExplnationImage/>
                    </div>
                </div>
            </div>
            <style global jsx>{`
                .round_explanation_contain{
                    .content{
                        margin: auto;
                        display: flex;
                        justify-content: center;
                        width: 80vw;
                        .content_item{
                            position: relative;
                            z-index: 10;
                            width: 400px;
                            height: 400px;
                            border-radius: 50%;
                            background-repeat: no-repeat;
                            background-size: cover;
                            transition: .5s;
                            .back_black_color{
                                position: absolute;
                                opacity: 1;
                                width: 400px;
                                height: 400px;
                                border-radius: 50%;
                                z-index: 10;
                                background: rgba(0, 0, 0, .5);
                            }
                            .text{
                                position: absolute;
                                width: 400px;
                                transition: .3s;
                                .title{
                                    position: absolute;
                                    width: 400px;
                                    font-size: 25px;
                                    text-align: center;
                                    margin-top: 150px;
                                    color: #fff;
                                    z-index: 10;
                                }
                                .explanation{
                                    opacity: 0;
                                    font-size: 20px;
                                    font-weight: 600;
                                    color: grey
                                }
                                .explanation_button{
                                    position: absolute;
                                    right: 0;
                                    bottom: 40px;
                                    z-index: 10;
                                    opacity: 0;
                                    width: 60px;
                                    height: 60px;
                                    font-size: 30px;
                                    font-weight: 700;
                                    color: #fff;
                                    background-color: #7eaf5a;
                                    border: 0;
                                    border-radius: 50%;
                                    cursor: pointer;
                                }
                            }
                            .content_image{
                                position: absolute;
                                overflow: hidden;
                                top: 0;
                                width: 400px;
                                height: 400px;
                                transition: .5s;
                                border-radius: 50%;
                            }
                        }
                        .content_item:hover{
                            display: flex;
                            justify-content: center;
                            margin: auto;
                            width: 80%;
                            margin: auto;
                            height: 600px;
                            border-radius: 20px;
                            background-color: #E6E2C3;
                            @media (max-width: 900px){
                                width: 100%;
                                height: 800px;
                                flex-direction: column;
                            }
                            .back_black_color {
                                opacity: 0;
                                width: 80vw;
                                height: 400px;
                            }
                            .text{
                                position: relative;
                                margin-top: 5%;
                                margin-left: 50%;
                                .title{
                                    position: relative;
                                    text-align: left;
                                    font-size: 40px;
                                    margin-top: 0;
                                    color: #333;
                                }
                                .explanation, .explanation_button{
                                    opacity: 1;
                                }
                            }
                            .content_image{
                                margin: 50px 30px;
                                width: 400px;
                                height: 500px;
                                transition: .5s;
                                border-radius: 10px;
                                display: block;
                                left: 0;
                            }
                            @media (max-width: 1200px){
                                .content_image {
                                    width: 100%;
                                    height: 300px;
                                    text-align: center;
                                }
                                .text {
                                    width: 50%;
                                    margin: auto;
                                    margin-top: 60%;
                                }
                            }
                        }
                        .explanation_button:hover{
                            animation: 1s infinite alternate bounce;
                        }
                    }
                    @keyframes bounce{
                        0%{
                            transform: translateY(0px);
                        }
                        50%{
                            transform: translateY(-10px);
                        }
                        100%{
                            transform: translateY(0px);
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default RoundExplanation;
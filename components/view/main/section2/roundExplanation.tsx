import React, { useState, useEffect, ReactElement } from 'react';
import Image from 'next/image';

const RoundExplanation = () => {
    const [contentTitle, setContentTitle] = useState(['다양한 카테고리', '다양한 음식 영상', '음식 레시피']);
    const [explanation, setExplanation] = useState([
        '4가지의 카테고리를 기준으로 다양한 음식 영상들이 있어요.',
        '카테고리별 음식 영상을 통해 조리 영상을 보고 따라 해봐요.',
        '따로 기억하고 싶은 음식 레시피를 검색하고, 기록해봐요.'
    ]);
    // 임시 이미지, 저작권 안 걸리는 이미지로 변경하기
    const [explanationImg, setExplanationImg] = useState([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjscklTu7W8h34fbz3jwTqjlwQu1EFHQhN2A&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjscklTu7W8h34fbz3jwTqjlwQu1EFHQhN2A&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjscklTu7W8h34fbz3jwTqjlwQu1EFHQhN2A&usqp=CAU'
    ]);
    return (
        <>
            <div className="round_explanation_contain">
                <div className="content">
                    {
                        contentTitle.map((item, index) => {
                            return (
                                <div key={index} className="content_item">
                                    <div className="back_black_color"/>
                                    <div className="text">
                                        <h1 className="title">{item}</h1>
                                        <p className="explanation'">{explanation[index]}</p>
                                        <button className="explanation_button">보러가기</button>
                                    </div>
                                    <img
                                        className="content_image"
                                        src={explanationImg[index]}
                                        width="400"
                                        height="400"
                                        alt="explanation"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <style jsx>{`
                .content{
                    margin: auto;
                    width: 80vw;
                    height: 100vh;
                    // display: flex;
                    justify-content: space-around;
                    .content_item{
                        position: relative;
                        width: 400px;
                        height: 400px;
                        border-radius: 50%;
                        background-color: #333;
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
                            display: none;
                            position: absolute;
                            .title{
                                width: 350px;
                                font-size: 35px;
                                margin: 40% 20%;
                                z-index: 10;
                                // color: #fff;
                            }
                            .explanation{
                                opacity: 0;
                            }
                            .explanation_button{
                                width: 200px;
                                height: 80px;
                                font-size: 25px;
                                font-weight: 700;
                                text-align: center;
                                color: #fff;
                                background-color: #7eaf5a;
                                border: 0;
                                border-radius: 10px;
                            }
                        }
                        .content_image{
                            position: absolute;
                            top: 0;
                            width: 400px;
                            height: 400px;
                            border-radius: 50%;
                            transition: .3s;
                            // opacity: 0;
                        }
                    }
                    .content_item:hover{
                        // position: absolute;
                        display: flex;
                        left: 0;
                        right: 0;
                        margin: auto;
                        // background-image: url("") !important;
                        background-color: #fff;
                        width: 80vw;
                        margin: auto;
                        height: 400px;
                        border-radius: 20px;
                        .back_black_color {
                            opacity: 0;
                            // display: none;
                            width: 80vw;
                            height: 400px;
                        }
                        .text{
                            display: block;
                            .title{
                                color: #333;
                            }
                        }
                        .content_image{
                            width: 400px;
                            display: block;
                            z-index: 100;
                            right: 0;
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default RoundExplanation;
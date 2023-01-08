import { IMainTextProps } from '../../../../utils/types/interface';

import React, { ReactNode } from 'react';
import Head from 'next/head';

const MainTextView = ({ bracketStart, bracketEnd, li_text, item }: IMainTextProps) => {
    return (
        <>
            <Head>
            {/* <link href="https://fonts.googleapis.com/css?family=Lato+display=optional" rel="stylesheet"/> */}
            </Head>
            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">오늘</p>
                        <ul className="content__container__list" ref={ item }>
                            {
                                li_text && li_text.map((text, index) => {
                                    return (
                                        <li className="content__container__list_item" key={index}>{ text }</li>
                                    )
                                })
                            }
                        </ul>
                </div>
                <p className="text">만들어 먹자!</p>
                <div className="sub_text_contain">
                    <p className="text sub_text">자취생 요리추천 웹 서비스</p>
                </div>
                {/* #ecf0f1 */}
                <style jsx>{`
                    .text{
                        position: absolute;
                        top: 30px;
                        left: 40px;
                        font-size: 50px;
                        font-weight: 700;
                    }
                    .content{
                        position: relative;
                        left: -40px;
                        text-align: left;
                        margin: auto;
                        width: 500px;
                        height: 200px;
                        overflow: hidden;
                        font-family: 'Lato', sans-serif;
                        font-size: 35px;
                        line-height: 40px;
                        color: #333;
                    }
                    .content__container {
                        display: flex;
                        font-weight: 600;
                        overflow: hidden;
                        height: 50px;
                        padding: 0 40px;
                        
                    }
                    .content__container__text {
                        display: inline;
                        font-size: 50px;
                        float: left;
                        margin: 6px 0;
                    }
                    .content__container__list {
                        margin-top: 0;
                        text-align: left;
                        list-style: none;
                    }
                    .content__container__list_item{
                        margin-left: -30px;
                        font-size: 50px;
                        line-height: 1;
                        width: 130px;
                        text-align: center;
                    }
                    .sub_text_contain{
                        .sub_text{
                            // width: px;
                            font-size: 20px;
                            color: #868e96;
                            font-weight: 600;
                            margin-top: 120px;
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default MainTextView;
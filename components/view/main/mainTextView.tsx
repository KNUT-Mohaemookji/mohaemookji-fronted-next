import { ChildrenProps } from '../../types/interface';

import React, { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
    item: any,
    children: ReactNode,
    bracketStart: string,
    bracketEnd: string,
    li_text: string[]
}

const MainTextView = ({ bracketStart, bracketEnd, li_text, item }: Props) => {
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
                <div className="text">만들어 먹자!</div>
                {/* #ecf0f1 */}
                <style jsx>{`
                    .text{
                        position: absolute;
                        top: 70px;
                        left: 40px;
                        font-size: 50px;
                        font-weight: 700;
                    }
                    .content{
                        position: relative;
                        left: -40px;
                        text-align: left;
                        display: flex;
                        margin: auto;
                        height: 160px;
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
                `}</style>
            </div>
        </>
    );
};

export default MainTextView;
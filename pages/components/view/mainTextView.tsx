import { ChildrenProps } from '../../../types/interface';

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
                    <div className="content__container__text">오늘 { bracketStart }</div>
                        <ul className="content__container__list" ref={ item }>
                            {
                                li_text.map((text, index) => {
                                    return (
                                        <li className="content__container__list_item" key={index}>{ text }</li>
                                    )
                                })
                            }
                        </ul>
                    <div className="content__container__text2">{ bracketEnd }만들어 먹자!</div>
                </div>
                {/* #ecf0f1 */}
                <style jsx>{`
                    .content{
                        display: flex;
                        justify-content: center;
                        position: absolute;
                        top: 50%;
                        left: 0;
                        right: 0;
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
                        height: 40px;
                        padding: 0 40px;
                    }
                    .content__container__text {
                        display: inline;
                        float: left;
                        margin: 0;
                    }
                    .content__container__list {
                        margin-top: 0;
                        text-align: left;
                        list-style: none;
                    }
                    .content__container__list_item{
                        margin-left: -30px;
                        width: 100px;
                        text-align: center;
                        
                    }
                `}</style>
            </div>
        </>
    );
};

export default MainTextView;
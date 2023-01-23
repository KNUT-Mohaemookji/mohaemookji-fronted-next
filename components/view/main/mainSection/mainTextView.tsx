import { IMainTextProps } from '../../../../utils/types/interface';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const MainTextView = () => {
    const [li_text] = useState<string[]>(['간식', '운동식', '건강식', '일반식']);
    let [loop, setLoop] = useState<number>(0);
    const listElement = useRef<HTMLUListElement | null>(null);
    const router = useRouter();
    const { pathname } = router;
    let yAxis: number = 0;

    useEffect(() => {
        const loopSetInterval = setInterval(() => {
            setLoop(loop++);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            listElement.current!.style.transform = `translateY(${yAxis -= 49}px)`
            listElement.current!.style.transition = '1s';
            if (loop === 4) {
                // setLoop(0);
                // eslint-disable-next-line react-hooks/exhaustive-deps
                loop = 0;
                yAxis = 0;
                listElement.current!.style.transform = `translateY(${0}px)`
            }
        }, 3000);
        console.log('pathname은?', pathname);
        // unmounted되면 setInterval 제거시켜주기.
        return () => {
            clearInterval(loopSetInterval);
        }
    }, []);

    return (
        <>
            <Head>
            {/* <link href="https://fonts.googleapis.com/css?family=Lato+display=optional" rel="stylesheet"/> */}
            </Head>
            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">오늘</p>
                        <ul className="content__container__list" ref={ listElement }>
                            {
                                li_text && li_text.map((text, index) => {
                                    return (
                                        <li className="content__container__list_listElement" key={index}>{ text }</li>
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
                        height: 49px;
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
                    .content__container__list_listElement{
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
import { IMainTextProps } from '../types/interface';

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import * as S from '../style/mainSection/mainText';
import { li_text } from '../../../utils/main/constants';

const MainTextView = () => {
    let [loop, setLoop] = useState<number>(0);
    const listElement = useRef<HTMLUListElement | null>(null);
    let yAxis: number = 0;

    useEffect(() => {
        const loopSetInterval = setInterval(() => {
            setLoop(loop++);
            listElement.current!.style.transform = `translateY(${yAxis -= 100}%)`
            listElement.current!.style.transition = '1s';
            if (loop === 4) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                loop = 0;
                yAxis = 0;
                listElement.current!.style.transform = `translateY(${0}px)`
            }
        }, 3000);
        // unmounted되면 setInterval 제거시켜주기.
        return () => {
            clearInterval(loopSetInterval);
        }
    }, []);

    return (
        <>
            <S.MainTextContain>
                <S.MainTextContent>
                    <S.ContentText>오늘</S.ContentText>
                        <S.ContainerLists ref={ listElement }>
                            {
                                li_text && li_text.map((text, index) => {
                                    return (
                                        <S.ContainerList key={index}>{ text }</S.ContainerList>
                                    )
                                })
                            }
                        </S.ContainerLists>
                </S.MainTextContent>
                <S.Text>만들어 먹자!</S.Text>
                    <S.SubText>자취생 요리추천 웹 서비스</S.SubText>
            </S.MainTextContain>
        </>
    );
};

export default MainTextView;
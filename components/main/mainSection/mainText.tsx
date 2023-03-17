import { IMainTextProps } from '../types/interface';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as S from '../style/mainSection/mainText';

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
            listElement.current!.style.transform = `translateY(${yAxis -= 350}%)`
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
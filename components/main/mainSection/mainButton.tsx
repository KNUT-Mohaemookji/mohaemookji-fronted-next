import React, { useState, useEffect, useRef } from 'react';
import * as S from '../style/mainSection/mainButton';

const MainButton = () => {
    let categoryButton = useRef<HTMLUListElement>(null);
    useEffect(() => {
        console.log(categoryButton.current);
    }, []);
    return (
        <>
            <S.MainButtonContain>
                {/* <S.Button marginLeft="0px">레시피보기</S.Button> */}
                <S.Button className="watch_button" marginLeft="20px">찾으러가기!</S.Button>
            </S.MainButtonContain>
        </>
    );
};

export default MainButton;
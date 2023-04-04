import React from 'react';
import * as S from '../style/mainSection/mainButton';
import Link from 'next/link';

const MainButton = () => {
    return (
        <>
            <S.MainButtonContain>
                <Link href='/recipeSearch'>
                    <S.Button className="watch_button" marginLeft="20px">찾으러 가기!</S.Button>
                </Link>
            </S.MainButtonContain>
        </>
    );
};

export default MainButton;
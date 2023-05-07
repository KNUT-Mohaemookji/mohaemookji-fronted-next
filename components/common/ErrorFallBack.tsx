import React from 'react';
import * as S from './style/ErrorFallBack';

const ErrorFallBack = () => {
    return (
        <S.ErrorFallBackContain>
            <S.Title>데이터를 가져오는데 실패했습니다. <br /> 잠시 후에 이용해주세요.</S.Title>
        </S.ErrorFallBackContain>
    )
};

export default ErrorFallBack;
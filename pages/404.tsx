import React from 'react';
import styled from 'styled-components';

const Page404 = () => {
    return (
        <Contain404>
            <Inner>
                <MainText404>404</MainText404>
                <SubText404>Page Not Found!</SubText404>
            </Inner>
        </Contain404>
    );
};

const Contain404 = styled.div`
    position: relative;
    width: 100vw;
    height: 80vh;
`

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    align-items: center;
`

const MainText404 = styled.h1`
    color: #94AF9F;
    font-size: 100px;
`

const SubText404 = styled.p`
    color: #BBD6B8  ;
    font-size: 40px;
    font-weight: 700;
`


export default Page404;
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
                <S.Button marginLeft="0px">레시피보기</S.Button>
                <S.Button className="watch_button" marginLeft="20px">보러가기</S.Button>
            </S.MainButtonContain>
            <style jsx>{`
            ul, li, ol {
                list-style: none;
            }
            button{
                position: relative;
                z-index: 10;
                width: 120px;
                height: 60px;
                font-size: 20px;
                font-weight: 700;
                color: #333;
                border-radius: 10px;
                background-color: #E6E2C3;
                border: 0;
                cursor: pointer;
            }
            .contain{
                position: relative;
                display: flex;
                .watch_button{
                    margin-left: 20px;
                }
                .category_list_contain{
                    .category{
                        position: relative;
                        cursor: pointer;
                        font-size: 20px;
                        font-weight: 600;
                        margin-top: 20px;
                    }
                }
                .category_list_contain.event{
                    opacity: 1;
                    transform: translateY(0px);
                }
            }
            `}</style>
        </>
    );
};

export default MainButton;
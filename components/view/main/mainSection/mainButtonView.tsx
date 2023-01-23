import React, { useState, useEffect, useRef } from 'react';

const MainButton = () => {
    let categoryButton = useRef<HTMLUListElement>(null);
    useEffect(() => {
        console.log(categoryButton.current);
    }, []);
    return (
        <>
            <div className="contain">
                <div className="category_list_button">
                <button className="watch_recipe_button">레시피보기</button>
                    <button className="watch_button">보러가기</button>
                </div>
            </div>
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
                .category_list{
                    position: absolute;
                    z-index: 1;
                    transition: .4s;
                    transform: translateY(-120px);
                    opacity: 0;
                    top: 50px;
                    .category{
                        position: relative;
                        cursor: pointer;
                        font-size: 20px;
                        font-weight: 600;
                        margin-top: 20px;
                    }
                }
                .category_list.event{
                    opacity: 1;
                    transform: translateY(0px);
                }
            }
            `}</style>
        </>
    );
};

export default MainButton;
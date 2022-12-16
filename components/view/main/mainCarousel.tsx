import React, { useState, useEffect } from 'react';

const MainCarousel = () => {
    const [leftImg, setLeftImg] = useState<string[]>(['왼쪽이미지1', '왼쪽이미지2', '왼쪽이미지3']);
    const [rightImg, setRightImg] = useState<string[]>(['오른쪽이미지1', '오른쪽이미지2', '오른쪽이미지3']);
    useEffect(() => {
        console.log(leftImg);
        console.log(rightImg);
        
        
    }, [leftImg, rightImg]);
    return (
        <>
            <div className="leftCarousel">
                <ul>
                {
                    leftImg.map((item, index) => {
                        return (
                            <li>item</li>
                        )
                    })
                }
                </ul>
            </div>
            <div className="rightCarousel">
                <ul>
                {
                    rightImg.map((item, index) => {
                        return (
                            <li>item</li>
                        )
                    })
                }
                </ul>
            </div>
        </>
    );
};

export default MainCarousel;
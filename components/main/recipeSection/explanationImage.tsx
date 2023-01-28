import React from 'react';
import Image from 'next/image';

const ExplanationImage = () => {
    // 임시 이미지, 저작권 안 걸리는 이미지로 변경하기
    const explanationImg = 'https://static.wtable.co.kr/image/production/service/recipe/1765/084c7e78-bc78-4da6-a1fb-3ce9f1521199.jpg?size=500x500';
    
    return (
        <>
            <div className="content_image">
                <Image
                    src={ explanationImg }
                    width="400"
                    height="400"
                    alt="explanation"
                />
            </div>
        </>
    );
};

export default ExplanationImage;
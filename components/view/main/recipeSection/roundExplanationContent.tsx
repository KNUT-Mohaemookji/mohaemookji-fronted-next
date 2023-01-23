import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const RoundExplanationContent = () => {
    const contentTitle = '다양한 레시피를 보면서 완벽한 요리를 만들어 봐요!';
    const explanation = '4가지의 카테고리를 기준으로 다양한 음식 영상들이 있어요.';
    return (
        <>
          <div className="back_black_color"/>
            <div className="text">
                <h1 className="title">{contentTitle}</h1>
                <p className="explanation">{explanation}</p>
                <button className="explanation_button"><FiArrowUpRight/></button>
            </div>  
            <style jsx>{`

            `}</style>
        </>
    );
};

export default RoundExplanationContent;
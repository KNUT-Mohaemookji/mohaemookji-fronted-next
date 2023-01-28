import React from 'react';

const NoticeList = () => {
    let noticeList = ['이벤트1', '이벤트2', '이벤트3'];
    let noticeExplanation = ['이벤트 설명1', '이벤트 설명2', '이벤트 설명3'];
    return (
        <>
            <ul className="notices">
                {
                    noticeList.map((item, index) => {
                        return (
                            <>
                                <li className="notice" key={index}>{item}</li>
                                <p className="notice_explanation">{noticeExplanation[index]}</p>
                                <hr className="sub_line"/>
                            </>
                        )
                    })   
                }
            </ul>
            <style jsx>{`
                .notices{
                    animation: main_notice_animation 1s;
                    position: absolute;
                    margin-top: -10px;
                    left: -40px;
                    .sub_line{
                        width: 500px;
                        height: 1px;
                        background-color: #f8f9fa;
                    }
                    .notice {
                        margin-top: 20px;
                        font-size: 20px;
                        font-weight: 600;
                        color: #333;
                    }
                    .notice_explanation{
                        color: #868e96;
                        font-weight: 600;
                    }
                }
                @keyframes main_notice_animation{
                    from {
                        margin-left: -20%;
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
};

export default NoticeList;
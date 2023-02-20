import React from 'react';
import * as S from '../style/mainSection/mainNoticeList';

const NoticeList = () => {
    let noticeList = ['이벤트1', '이벤트2', '이벤트3'];
    let noticeExplanation = ['이벤트 설명1', '이벤트 설명2', '이벤트 설명3'];
    return (
        <>
            <S.Notices>
                {
                    noticeList.map((item, index) => {
                        return (
                            <>
                                <S.Notice key={index}>{item}</S.Notice>
                                <S.NoticeExplanation>{noticeExplanation[index]}</S.NoticeExplanation>
                                <S.SubLine/>
                            </>
                        )
                    })   
                }
            </S.Notices>
        </>
    );
};

export default NoticeList;
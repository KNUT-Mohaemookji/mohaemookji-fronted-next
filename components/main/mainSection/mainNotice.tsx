import React from 'react';
import NoticeList from './noticeList';
import * as S from '../style/mainSection/mainNotice';

const Notice = () => {
    return (
        <>
            <S.NoticeContain>
                <S.NoticeTitle>공지사항</S.NoticeTitle>
                <NoticeList/>
            </S.NoticeContain>
        </>
    )
};

export default Notice;

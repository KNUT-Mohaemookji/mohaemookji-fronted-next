import React from 'react';
import { noticeExplanation, noticeList } from '../../../utils/main/constants';
import * as S from '../style/mainSection/mainNoticeList';

const NoticeList = () => {
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
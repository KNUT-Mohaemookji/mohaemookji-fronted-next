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
                            <div key={index}>
                                <S.Notice>{item}</S.Notice>
                                <S.NoticeExplanation>{noticeExplanation[index]}</S.NoticeExplanation>
                                <S.SubLine/>
                            </div>
                        )
                    })   
                }
            </S.Notices>
        </>
    );
};

export default NoticeList;
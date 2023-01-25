import React from 'react';
import NoticeList from './noticeList';

const Notice = () => {
    return (
        <>
            <div className="notice_contain">
                <p className="notice_title">공지사항</p>
                <NoticeList/>
            </div>  
            <style jsx>{`
            .notice_contain {
                position: relative;
                top: 20px;
                .notice_title {
                    font-size: 25px;
                    font-weight: 700;
                    color: #333;
                }
            }
            `}</style>
        </>
    );
};

export default Notice;

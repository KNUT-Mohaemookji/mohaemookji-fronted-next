import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropsWithChildren } from 'react';
import VideoListView from '../../components/view/video/videoListView';
import { RootState } from '../../store/reducers';
import { actions } from '../../store/reducers/getVideo';

import { GetServerSideProps } from 'next';

/* 
    SSR
    - pages 폴더 내부에서만 사용가능
    - fetch나 axios로 직접 데이터 요청 시 api route 경로 말고 url 경로로만 입력할 수 있다.
    - 찾아보니 SSG나 SSR 사용할 때 API 경로를 가져오지 말라고 되어있다.
    - API 경로를 가져오는 대신 대신 직접 서버 측 코드를 작성하거나 감싸진 함수를 출력하라고 되어있다.
*/

// const cookingData = fetch('../api/cookingVideo')
//     .then(res => res.json())
//     .then(res => {
//         return res;
//     })

export async function getServerSideProps(){
    const cookingData: any = await (
        await fetch('http://127.0.0.1:16261/cooking-video')
    ).json()
    return {
        props: {
            cookingData
        }
    }
}
const Video = ({cookingData}) => {
    const props = {
        cookingData
    }
    return (
        <>
            <div>
                <VideoListView {...props}/>
            </div>
        </>
    );
};

export default Video;
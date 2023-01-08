import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropsWithChildren } from 'react';
import VideoListView from '../../../components/view/video/videoListView';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
// getAPI
import { apiUrl } from '../../../utils/constants';
import { ICookingVideo, IVideoModalProps } from '../../../utils/types/interface';

/* 
    SSR
    - pages 폴더 내부에서만 사용가능
    - fetch나 axios로 직접 데이터 요청 시 api route 경로 말고 url 경로로만 입력할 수 있다.
    - 찾아보니 SSG나 SSR 사용할 때 API 경로를 가져오지 말라고 되어있다.
    - API 경로를 가져오는 대신 대신 직접 서버 측 코드를 작성하거나 감싸진 함수를 출력하라고 되어있다.
*/

export async function getServerSideProps(){
    console.log('apiUrl', apiUrl);
    const cookingData: ICookingVideo = await (
        await fetch(apiUrl.getCookingVideo)
    ).json();

    // 카테고리 별로 영상 뽑아오기
    const categoryCookingData: ICookingVideo = await (
        await fetch(apiUrl.getCookingCategory)
    ).json();

    return {
        props: {
            cookingData,
            categoryCookingData,
        }
    }
}
const Video = ({cookingData}: IVideoModalProps) => {
    const router = useRouter();
    const {slug} = router.query;

    const props = {
        cookingData,
        // categoryCookingData,
        category: slug
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
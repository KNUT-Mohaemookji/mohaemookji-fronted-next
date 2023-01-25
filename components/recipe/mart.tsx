/* global kakao */
// https://velog.io/@rlaclgns321/%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A7%B5-Kakao-Map
// https://velog.io/@treejy/Next.jsTS-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A7%B5-API-%EC%93%B0%EA%B8%B0
// https://velog.io/@planethoon/%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A7%B5-api-%EC%82%AC%EC%9A%A9-%EB%8F%84%EC%A4%91-TypeError-Cannot-read-properties-of-undefined-reading-maps
import React, { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script'

const Mart: FC = () => {
    const [mapLoaded, setMapLoaded] = useState<boolean>(false);
    const kakaomapURl = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY}&libraries=services,clusterer&autoload=false`;

    useEffect(() => {
        const $script = document.createElement("script");
        $script.src = kakaomapURl;
        $script.addEventListener("load", () => setMapLoaded(true));
        document.head.appendChild($script);
    }, []);

    useEffect(() => {
        if (!mapLoaded) return;
        
        window.kakao.maps.load(() => {
            var container = document.getElementById('map');
            var options = {
                      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                      level: 3
                  };
          
            var map = new window.kakao.maps.Map(container, options);

        })
        
      }, [mapLoaded]);
    return (
        <>
            <div>
                <h2>마트위치 가져오기</h2>
                <div id="map" style={{ width:"600px", height:"350px"}}></div>
            </div>
        </>
    );
};

export default Mart;
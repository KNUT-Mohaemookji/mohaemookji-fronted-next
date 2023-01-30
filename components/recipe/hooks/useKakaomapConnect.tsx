// https://velog.io/@rlaclgns321/%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A7%B5-Kakao-Map
// https://velog.io/@treejy/Next.jsTS-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A7%B5-API-%EC%93%B0%EA%B8%B0
// https://velog.io/@planethoon/%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A7%B5-api-%EC%82%AC%EC%9A%A9-%EB%8F%84%EC%A4%91-TypeError-Cannot-read-properties-of-undefined-reading-maps

import { useEffect, useState } from 'react';
import useFindMyLocation from './useFindMyLocation';

const useKakaomapConnect = () => {
    const [mapLoaded, setMapLoaded] = useState<boolean>(false);
    const kakaomapURl = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY}&libraries=services,clusterer&autoload=false`;
    const getMyLocation = useFindMyLocation();

    useEffect(() => {
        const $script = document.createElement("script");
        $script.src = kakaomapURl;
        $script.addEventListener("load", () => setMapLoaded(true));
        document.head.appendChild($script);
    }, [getMyLocation, kakaomapURl]);

    useEffect(() => {
        if (!mapLoaded) return;
        window.kakao.maps.load(() => {
            let container = document.getElementById('map');
            let options = {
                center: new window.kakao.maps.LatLng(getMyLocation.coordinates?.lat, getMyLocation.coordinates?.lng),
                level: 2
            };
            let map = new window.kakao.maps.Map(container, options);
            let markerPosition = new window.kakao.maps.LatLng(getMyLocation.coordinates?.lat, getMyLocation.coordinates?.lng);
            let marker = new window.kakao.maps.Marker({
                position: markerPosition
            }); 
            marker.setMap(map);

            // info 윈도우
            var iwContent = '<div style="padding:5px;">내 위치</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new window.kakao.maps.LatLng(Number(getMyLocation.coordinates?.lat) + 0.00012, Number(getMyLocation.coordinates?.lng)), //인포윈도우 표시 위치입니다
            iwRemoveable = true; 
        
            var infowindow = new window.kakao.maps.InfoWindow({
                map: map, // 인포윈도우가 표시될 지도
                position : iwPosition, 
                content : iwContent,
                removable : iwRemoveable
            });

        });
    }, [getMyLocation.coordinates?.lat, getMyLocation.coordinates?.lng, mapLoaded]);
};

export default useKakaomapConnect;
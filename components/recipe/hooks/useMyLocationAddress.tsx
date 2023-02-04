import { useEffect, useState } from 'react';
import useFindMyLocation from './useFindMyLocation';

export const useMyLocationAddress = () => {
    const myLocation = useFindMyLocation();
    const [myAddress, setMyAddress] = useState('');
    function getAddr(lat, lng) {
        let geocoder = new window.kakao.maps.services.Geocoder();
        // 주소-좌표 변환 객체를 생성합니다
   
        let coord = new kakao.maps.LatLng(lat, lng);
        let callback = function(result, status) {
            
            if (status === kakao.maps.services.Status.OK) {
                const arr = { ...result };
                const _arr = arr[0].address
                setMyAddress(
                    _arr.region_1depth_name + _arr.region_2depth_name + _arr.region_3depth_name
                )
                console.log(myAddress);
            }
        }
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    }
   
    useEffect(() => {
        kakao.maps.load(() => {
            getAddr( myLocation.coordinates!.lat, myLocation.coordinates!.lng)
            console.log(myLocation);
        })
    })
    
    return {myAddress}
};

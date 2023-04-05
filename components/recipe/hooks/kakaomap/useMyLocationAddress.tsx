import { useCallback, useEffect, useState } from 'react';
import useFindMyLocation from './useFindMyLocation';
import { ICallbackResult } from '../../types/kakaomap/interface';

export const useMyLocationAddress = () => {
    const myLocation = useFindMyLocation();
    const [myAddress, setMyAddress] = useState('');
    
    function getAddr(lat: number, lng: number) {
        let geocoder = new window.kakao.maps.services.Geocoder();
        let coord = new kakao.maps.LatLng(lat, lng);
        let callback = function (result: ICallbackResult, status: string) {
            if (status === kakao.maps.services.Status.OK) {
                const arr = { ...result };
                const _arr = arr[0].address
                setMyAddress(
                    _arr.region_1depth_name + _arr.region_2depth_name + _arr.region_3depth_name
                )
            }
        }
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    }
   
    useEffect(() => {
        kakao.maps.load(() => {
            getAddr( myLocation.coordinates!.lat, myLocation.coordinates!.lng)
        })
    });

    return {myAddress}
};

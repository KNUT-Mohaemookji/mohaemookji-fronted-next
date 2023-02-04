import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useMyLocationAddress } from './useMyLocationAddress';

export const useKakaomapMartLocation = () => {
  const {myAddress} = useMyLocationAddress();
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  
  useEffect(() => {
      if (!map) return
      
      const ps = new kakao.maps.services.Places()
    console.log(myAddress);
      ps.keywordSearch(myAddress + '마트', (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          console.log(data);
          const bounds = new kakao.maps.LatLngBounds()
          let markers = []
  
          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            })
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
          }
          setMarkers(markers)
  
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds)
        }
    })
  }, [map, myAddress]);
  return {setInfo, markers, setMap, info}
}
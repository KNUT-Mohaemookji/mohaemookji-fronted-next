import { useState, useEffect } from 'react';
import { useMyLocationAddress } from './useMyLocationAddress';
import { IMarker, IMarkers } from '../../types/kakaomap/interface';

export const useKakaomapMartLocation = () => {
  const {myAddress} = useMyLocationAddress();
  const [info, setInfo] = useState<IMarker>();
  const [markers, setMarkers] = useState<IMarkers<string>[]>([]);
  const [map, setMap] = useState<kakao.maps.Map>();
  
  let timer: string | number | NodeJS.Timeout | undefined ;
  const kakaomapAPICount = () => {
    timer = setTimeout(() => {
      console.log('지도 호출.');
    }, 1000);
  }
  
  useEffect(() => {
      if (!map) return
      
      const ps = new kakao.maps.services.Places()
      ps.keywordSearch(myAddress + '마트', (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds()
          let markers = []
  
          for (var i = 0; i < data.length; i++) {
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
          setMarkers(markers as any)
        }
        // 최적화 1 : 호출 횟수 줄어 듦 bounds_changed -> idle로 변경
        kakao.maps.event.addListener(map, 'idle', () => {
          // 최적화 2 : Debounce를 사용해서 지도를 여러 번 이동시킬 때 마다 카운트 안되도록 하기.
          if(timer){
            clearTimeout(timer);
          }
          kakaomapAPICount();
        })
    })
  }, [map, myAddress]);
  
  return {setInfo, markers, setMap, info}
}
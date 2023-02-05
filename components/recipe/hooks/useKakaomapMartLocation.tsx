import { useState, useEffect } from 'react';
import { useMyLocationAddress } from './useMyLocationAddress';
import { IMarker, IMarkers } from '../types/interface';

export const useKakaomapMartLocation = () => {
  const {myAddress} = useMyLocationAddress();
  const [info, setInfo] = useState<IMarker>();
  const [markers, setMarkers] = useState<IMarkers<string>[]>([]);
  const [map, setMap] = useState();
  
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
          setMarkers(markers)
        }
    })
  }, [map, myAddress]);
  return {setInfo, markers, setMap, info}
}
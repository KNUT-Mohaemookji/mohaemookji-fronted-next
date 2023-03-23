/*global kakao*/ 
import Loading from '../../common/innerLoading';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useFindMyLocation from '../hooks/kakaomap/useFindMyLocation';
import { useKakaomapMartLocation } from '../hooks/kakaomap/useKakaomapMartLocation';
import martLocationImg from '../../../public/img/markerImg/martLocation.png';
import myLocationImg from '../../../public/img/markerImg/myLocation.png';
import { IMarkers } from '../types/kakaomap/interface';
import * as S from '../style/martModal';

const Mart = () => {
  const myLocation = useFindMyLocation();
  const { info, setInfo, markers, setMap } = useKakaomapMartLocation();

  return (
    <>
      <S.MartContain>
        <S.MartTitle>마트 정보</S.MartTitle>
        <S.MartInner>
        {
          
          myLocation.loaded === true 
          ?
            <Map
              center={{ lat: myLocation.coordinates!.lat, lng: myLocation.coordinates!.lng }}
              style={{ width: "100%", height: "360px" }}
              level={5}
              onCreate={setMap}
            >
              {markers.map((marker: IMarkers<any>) => (
                <MapMarker
                  image={{
                    src: martLocationImg.src,
                    size: {
                      width: 40,
                      height: 25
                    }
                  }}
                    key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                    position={marker.position}
                    onClick={() => setInfo(marker)}
                >
                  {info && info.content === marker.content && (
                    <S.Marker>{marker.content}</S.Marker>
                  )}

                </MapMarker>
              ))}
              <MapMarker
                image={{
                    src: myLocationImg.src,
                    size: {
                    width: 30,
                    height: 30
                    }
                }}
                position={{ lat: myLocation.coordinates!.lat, lng: myLocation.coordinates!.lng }}
                >
                <div className="marker my">내 위치</div>               
              </MapMarker>
            </Map>
            :
            <S.MartSpinner>
              <Loading />
            </S.MartSpinner>
        }
        </S.MartInner>
      </S.MartContain>
    </>
  )
};

export default Mart;
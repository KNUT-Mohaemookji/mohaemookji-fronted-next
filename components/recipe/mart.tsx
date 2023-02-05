import Loading from '../common/loading';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useFindMyLocation from './hooks/useFindMyLocation';
import { useKakaomapMartLocation } from './hooks/useKakaomapMartLocation';
import martLocationImg from '../../public/img/markerImg/martLocation.png';
import myLocationImg from '../../public/img/markerImg/myLocation.png';
import { useEffect } from 'react';
import { IMarkers } from './types/interface';

const Mart = () => {
  const myLocation = useFindMyLocation();
  const { info, setInfo, markers, setMap } = useKakaomapMartLocation();

  useEffect(() => {
    console.log('info', info);
    console.log('markers', markers);
  }, [info, markers]);
    return (
      <>
        {
          myLocation.loaded === true 
            ? <Map
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
                      <div style={{
                        // padding: '5px',
                        color: "#333",
                        // background: '#fff',
                        borderRadius: '10px'
                      }}>{marker.content}</div>
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
                <div style={{
                    color: "#333",
                    borderRadius: '10px',
                    paddingLeft: '10px'
                }}>내 위치</div>               
            </MapMarker>
        </Map>
        : <Loading/>
      }
    </>
  )
};

export default Mart;
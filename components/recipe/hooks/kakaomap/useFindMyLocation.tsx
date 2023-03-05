import { useEffect, useState } from 'react';
import { ILocationType } from '../../types/interface';

const useFindMyLocation = () => {
    const [myLocation, setMyLocation] = useState<ILocationType>({
        loaded: false,
        coordinates: { 
            lat: 0,
            lng: 0
        }
    });

    const onSuccess = ( location: { coords: { latitude: number, longitude: number }; } ) => {
        setMyLocation({
            ...myLocation,
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    const onError = (error: { code: number; message: string }) => {
        setMyLocation({
            loaded: false,
            error
        })
    }

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocatiohn not supportied",
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return myLocation;
};

export default useFindMyLocation;
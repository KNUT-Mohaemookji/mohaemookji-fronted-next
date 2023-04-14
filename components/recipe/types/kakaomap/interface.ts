// -----kakaomap-----
interface IKakaomap {
    [key: string]: string,
}

declare global {
    interface Window {
      kakao: IKakaomap;
    }
}

export interface ILocationType {
    loaded: boolean;
    coordinates?: { lat: number, lng: number };
    error?: { code: number, message: string };
}

export interface ICallbackResult {
    [key: number]: {
        address: IKakaomap | null,
        road_address: IKakaomap | null
    },
}

export interface IMarkers<T> {
    content: string,
    position: {
        lat: T;
        lng: T;
        x: number;
        y: number;
    }
}

export interface IMarker {
    position: {
        lat: string;
        lng: string;
    };
    content?: string;
}


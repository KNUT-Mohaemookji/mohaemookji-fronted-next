// -----kakaomap-----
declare global {
    interface Window {
      kakao: any;
    }
}

export interface ILocationType {
    loaded: boolean;
    coordinates?: { lat: number, lng: number };
    error?: { code: number, message: string };
}

export interface ICallbackResult {
    0: {
        address: {
            [key: string]: string
        },
        road_address: {
            [key: string]: string,
        }
    }
}

export interface IMarkers<T> {
    content: string,
    position: {
        lat: T;
        lng: T;
        x?: number;
        y?: number;
    }
}

export interface IMarker {
    position: {
        lat: string;
        lng: string;
    };
    content?: string;
}
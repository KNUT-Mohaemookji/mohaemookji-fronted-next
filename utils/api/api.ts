import axios from 'axios';
// import { apiUrl } from './constants';

export const apiUrl = {
    getCookingVideo: `/video/cooking-video`,
    getCookingCategory: `${process.env.NEXT_PUBLIC_BACKEND_API_PATH}/cooking-channel`,
}

export const recipeInstance = axios.create({
    baseURL: '/recipe',
    headers: {
        "Content-Type": "application/json"
    }
});

export const videoInstance = axios.create({
    baseURL: `/${apiUrl.getCookingVideo}`,
    headers: {
        "Content-Type": "application/json"
    }
})
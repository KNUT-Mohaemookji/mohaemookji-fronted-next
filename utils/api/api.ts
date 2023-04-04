import axios from 'axios';

export const recipeInstance = axios.create({
    baseURL: '/recipe',
    headers: {
        "Content-Type": "application/json"
    }
});

recipeInstance.interceptors.response.use(
    response => {
        return response;
    },
    () => {
        alert('레시피 정보를 불러오지 못했습니다. 새로고침 후에도 안 된다면 잠시 후에 접속해 주십시오.');
    }
)

export const videoInstance = axios.create({
    baseURL: `/video/cooking-video`,
    headers: {
        "Content-Type": "application/json"
    }
})

videoInstance.interceptors.response.use(
    response => {
        return response;
    },
    () => {
        alert('영상을 불러오지 못했습니다. 새로고침 후에도 안 된다면 잠시 후에 접속해 주십시오.');
    }
)
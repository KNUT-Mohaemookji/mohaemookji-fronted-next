import axios from 'axios';


// api 함수로 만들고 들어온 인자에 따라서 재요청해주기.


// export const recipeInstanceFunc = async (recipeKeyword: string, method: string) => {
    export const recipeInstance = axios.create({
        baseURL: `/recipeAPI`,
        headers: {
            "Content-Type": "application/json"
        }
    });
    recipeInstance.interceptors.response.use(
        response => {
            // url 값 넘겨주기.
            const [beforeData, afterData] = ['', ''];
            if(beforeData !== afterData) {
            // location.reload();
            }
            console.log(response);
            
            return response;
        },
        () => {
            alert('레시피 정보를 불러오지 못했습니다. 새로고침 후에도 안 된다면 잠시 후에 접속해 주십시오.');
        }
    )
// }

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
import { videoInstance } from "../../../utils/api/api";
import { apiUrl } from "../../../utils/api/api";

export const useRecipeVideoData = async () => {
    // 8번씩 출력하는 문제 해결해보기.
    const videoData = await (await fetch(apiUrl.getCookingVideo)).json();
    // const videoData = await videoInstance.get('/').then(res => {
    //     console.log(res + '!!!');
        
    //     return res;
    // }).catch(err => console.log(err))
    
    return videoData;
}
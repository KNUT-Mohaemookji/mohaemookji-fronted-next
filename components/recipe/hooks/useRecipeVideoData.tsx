import { useCallback, useEffect } from "react";
import { apiUrl } from "../../../utils/constants";

export const useRecipeVideoData = async () => {
    // 8번씩 출력하는 문제 해결해보기.
    const videoData = await (await fetch(apiUrl.getCookingVideo)).json();

    console.log(videoData);
    
    return videoData;
}
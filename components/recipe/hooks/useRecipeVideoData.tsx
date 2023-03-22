import { useEffect } from "react";
import { apiUrl } from "../../../utils/constants";

export const useRecipeVideoData = async () => {
    const videoData = await (await fetch(apiUrl.getCookingVideo)).json();
    console.log(videoData);
    return {videoData};
}
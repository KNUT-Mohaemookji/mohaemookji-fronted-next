import { videoInstance } from "../../../utils/api/api";

export const useRecipeVideoData = async () => {
    const videoData = await videoInstance.get('/');

    return videoData.data;
}
import { videoInstance } from "../../../utils/api/api";

export const useRecipeVideoData = async () => {
    const videoError = new Error("youtube video 관련 api에서 에러 발생.");
    try {
        const videoData = await videoInstance.get('/');
        return videoData.data;
    } catch (err) {
        throw videoError;
    }
}
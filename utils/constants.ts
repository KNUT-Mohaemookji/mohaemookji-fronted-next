const apiUrl = {
    getCookingVideo: `/video/cooking-video`,
    getCookingCategory: `${process.env.NEXT_PUBLIC_BACKEND_API_PATH}/cooking-channel`,
}

const RecipeApiUrl = () => {
    return '/recipe'
}

export { apiUrl, RecipeApiUrl };
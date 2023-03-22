const apiUrl = {
    getCookingVideo: `/api/cooking-video`,
    getCookingCategory: `${process.env.NEXT_PUBLIC_BACKEND_API_PATH}/cooking-channel`,
}

const RecipeApiUrl = (count: number) => {
    return `https://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_RECIPE_API_KEY}/COOKRCP01/json/0/${count}`
}

export { apiUrl, RecipeApiUrl };
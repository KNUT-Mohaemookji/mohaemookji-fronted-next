export const getRecipeData = async () => {
    const recipeRes = await fetch('/recipe', {
        headers: {
            'Accept': 'application/json'
        }
    })
    const resData = recipeRes.json();

    return resData;
}
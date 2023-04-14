export async function fetchData() {
  let test = await fetch('http://localhost:3000/api/recipe/recipeData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
      },
    });
    const data = await test.json();
    return data;
}
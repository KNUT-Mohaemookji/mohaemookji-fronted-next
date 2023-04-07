export default async function testFetchData(){
    let response = await fetch('http://localhost:3000/recipe', {
        headers: {
            Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
          },
    })
    let data = await response.json().then(res => {
        return res;
    });
    
    return data;
}
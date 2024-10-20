const API_KEY = "868b7975"

async function FetchData() {
    const response = await fetch('https://www.omdbapi.com/?apikey=868b7975&t=titanic')
    const datta = await response.json()
    return datta
}
const titanic = await FetchData()
console.log(titanic);

console.log(titanic.Director);
console.log(titanic["Director"]);
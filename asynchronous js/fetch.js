// fetch = function used for HTTP request to fetch resources
//         (json style data,images,files)
//         simplifies asynchronous data fetching in javascript and 
//         used for interacting with API to retrive and send data asynchronously over the web. 
//         fetch() returns a promise.
//         fetch(url,{options})

// try {
//     fetch(" https://pokeapi.co/api/v2/pokemon/pik")
//     .then(res => res.json())
//     .then(data => console.log(data.id, data.name, data.height, data.weight))
// } catch (error) {
//     console.log(error)

async function fetchPokeman(){
    try {
        const pokemanName = document.getElementById("pokeman").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemanName}`);
        if(!response.ok){
            throw new Error(`Error! status: ${response.status}`)
        }
        const data = await response.json();
        const pokeMam = data.sprites.front_default;
        const pokemanImage = document.getElementById("pokemanImg");
        pokemanImage.src = pokeMam;
        pokemanImage.style.display = "block";
    }
    catch(error){
        console.log(error)
    }
}
fetchPokeman();
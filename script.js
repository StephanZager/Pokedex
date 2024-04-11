
async function renderPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon';
    let reponse = await fetch(url);
    let reponseAsJson = await reponse.json();

    console.log(reponseAsJson);
} 
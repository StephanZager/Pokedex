let pokemon;
let pokemonDetails;




async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
    let reponse = await fetch(url);
    let responseAsJson = await reponse.json();

    pokemon = responseAsJson['results'];
   
    console.log(pokemon);
    loadPokemoninformation();
}

async function loadPokemoninformation(){
    for (let i = 0; i < pokemon.length; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/'+ (i + 1);
        let response = await fetch(url);
        pokemonDetails = await response.json();
        console.log(pokemonDetails);
    }
}








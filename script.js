let pokemon;
let pokemonDetails;
let pokemonId;
let pokemonName;
let pokemonImg;



async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
    let reponse = await fetch(url);
    let responseAsJson = await reponse.json();

    pokemon = responseAsJson['results'];
   
    console.log(pokemon);
    loadPokemonInformation();
}

async function loadPokemonInformation(){
    for (let i = 0; i < pokemon.length; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/'+ (i + 1);
        let response = await fetch(url);
        pokemonDetails = await response.json();
        pokemonId = pokemonDetails['id'];
        pokemonName = pokemonDetails['name'];
        pokemonImg = pokemonDetails['sprites']['other']['dream_world']['front_default'];
        console.log(pokemonName);        
        console.log(pokemonImg);
        console.log(pokemonDetails);
        test(i, pokemonImg);    
    }   
    
}

function test(index, img){
    let testElement = document.getElementById('test');
    testElement.innerHTML += `<div>${index + 1}</div><img src="${img}" alt="Pokemon Image"><br>`;
}










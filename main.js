let pokemon = [];
let pokemons = [];
let offset = 0;

async function init() {
    await loadPokemon();
    loadingOverlay();
}



async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    pokemon = responseAsJson['results'];
    await loadPokemonInformation();
}

async function loadMorePokemon() {
    loadingOverlayShow();
    offset += 20;
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + offset;
    let reponse = await fetch(url);
    let responseAsJson = await reponse.json();
    let newPokemon = responseAsJson['results'];

    if (offset < 160) {
        for (let i = 0; i < newPokemon.length; i++) {
            let newLoadPokemon = newPokemon[i];
            pokemon.push(newLoadPokemon);
        }
        await loadPokemonInformation();
    }

    loadingOverlay();
}




async function loadPokemonInformation() {
    for (let i = offset; i < pokemon.length; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + (i + 1);
        let response = await fetch(url);
        pokemonDetails = await response.json();

        let pokemonInfo = {
            'id': pokemonDetails['id'],
            'name': pokemonDetails['name'],
            'image': pokemonDetails['sprites']['other']['dream_world']['front_default'],
            'type': pokemonDetails['types'][0]['type']['name'],
            'weight': pokemonDetails['weight'],
            'stats': test1(pokemonDetails),
        };
        pokemons.push(pokemonInfo);
    }
    await renderPokemon();

}


function test1(pokemonDetails) {
    let baseStats = [];
    for (let j = 0; j < pokemonDetails['stats'].length; j++) {
        baseStats.push(pokemonDetails['stats'][j]['base_stat']);
    }
    return baseStats;
}

function loadingOverlay() {
    document.getElementById('loading-overlay').style.display = 'none';
}

async function loadingOverlayShow() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function showNextPokemonLoadButton() {
    document.getElementById('next-pokemon-btn').style.display = 'flex';
}

function returnNextPokemonLoadButton() {
    document.getElementById('next-pokemon-btn').style.display = 'none';
}
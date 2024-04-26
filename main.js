let pokemon = [];
let pokemonDetails;
let pokemonId = [];
let pokemonName = [];
let pokemonImg = [];
let pokemonType = [];
let pokemonStats = [];
let pokemonBaseStat = [];
let pokemonStatsName = [];
let pokemonWeight = [];
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
        pokemonId.push(pokemonDetails['id']);
        pokemonName.push(pokemonDetails['name']);
        pokemonImg.push(pokemonDetails['sprites']['other']['dream_world']['front_default']);
        pokemonType.push(pokemonDetails['types']['0']['type']['name']);
        pokemonStats.push(pokemonDetails['stats']);
        pokemonWeight.push(pokemonDetails['weight']);
    }
    await renderPokemon();
}

async function renderPokemonStats(i) {
    pokemonBaseStat = [];
    pokemonStatsName = [];

    for (let j = 0; j < 6; j++) {
        if (j < pokemonStats[i].length) {
            const stats = pokemonStats[i][j];
            pokemonBaseStat.push(stats['base_stat']);
            pokemonStatsName.push(stats['stat']['name']);
        }
    }
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
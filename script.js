let pokemon;
let pokemonDetails;
let pokemonId = [];
let pokemonName = [];
let pokemonImg = [];
let pokemonType = [];
let pokemonStats = [];
let pokemonBaseStat = [];
let pokemonStatsName = [];


async function loadPokemon() { // hier ne if abfrage gucken ob sie schon drinne sin also if(pokenon === ....)
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';
    let reponse = await fetch(url);
    let responseAsJson = await reponse.json();
    pokemon = responseAsJson['results'];
    loadPokemonInformation();
}

async function loadMorePokemon() {
    let test = 20;
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + test;
    let reponse = await fetch(url);
    let responseAsJson = await reponse.json();
    let newPokemon = responseAsJson['results'];
    pokemon.push(newPokemon);
    //for (let i = 0; i < newPokemon.length; i++) {
    //    let newLoadPokemon = newPokemon[i];
    //    pokemon.push(newLoadPokemon);

    //}
    console.log(newPokemon);
    loadPokemonInformation();
}

async function loadPokemonInformation() {

    for (let i = 0; i < pokemon.length; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + (i + 1);
        let response = await fetch(url);
        pokemonDetails = await response.json();
        pokemonId.push(pokemonDetails['id']);
        pokemonName.push(pokemonDetails['name']);
        pokemonImg.push(pokemonDetails['sprites']['other']['dream_world']['front_default']);
        pokemonType.push(pokemonDetails['types']['0']['type']['name']);
        pokemonStats.push(pokemonDetails['stats']);
    }
    await renderPokemon();
    console.log(pokemonDetails);
}

function pokemonCardWindowClose() {
    document.getElementById('pokemon-card-window-close').classList.add('d-none')
}

async function renderPokemonStats(i) {
    pokemonBaseStat = [];
    pokemonStatsName = [];

    for (let j = 0; j < 6; j++) {
        if (j < pokemonStats[i].length) {
            const element = pokemonStats[i][j];
            pokemonBaseStat.push(element['base_stat']);
            pokemonStatsName.push(element['stat']['name']);
        }
    }
}

function doNotClose(event) {
    event.stopPropagation();
}

function nextPokemon(nextpokemon) {
    if (nextpokemon == pokemon.length - 1) {
        nextpokemon = 0;
    } else {
        nextpokemon++;
    }
    openPokemonCard(nextpokemon);
}

function previousPokemon(previouspokemon) {
    if (previouspokemon == 0) {
        previouspokemon = pokemon.length - 1;
    } else {
        previouspokemon--;
    }
    openPokemonCard(previouspokemon);
}













async function pokemonTypeColor(i) {
    let pokecards = document.getElementById('pokecard' + i);
 
    if (pokemonType[i].includes('grass')) {
        pokecards.classList.add('poke-type-grass');
      
    }
    if (pokemonType[i].includes('fire')) {
        pokecards.classList.add('poke-type-fire');
    }
    if (pokemonType[i].includes('water')) {
        pokecards.classList.add('poke-type-water');
    }
    if (pokemonType[i].includes('bug')) {
        pokecards.classList.add('poke-type-bug');
    }
    if (pokemonType[i].includes('normal')) {
        pokecards.classList.add('poke-type-normal');
    }
    if (pokemonType[i].includes('poison')) {
        pokecards.classList.add('poke-type-poison');
    }
}
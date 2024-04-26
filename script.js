let pokemon = [];
let pokemonDetails;
let pokemonId = [];
let pokemonName = [];
let pokemonImg = [];
let pokemonType = [];
let pokemonStats = [];
let pokemonBaseStat = [];
let pokemonStatsName = [];
let offset = 0;

async function loadPokemon() { // hier ne if abfrage gucken ob sie schon drinne sin also if(pokenon === ....)
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    pokemon = responseAsJson['results'];
    console.log(pokemon)

    await loadPokemonInformation();

}

async function loadMorePokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + offset;
    let reponse = await fetch(url);
    let responseAsJson = await reponse.json();
    let newPokemon = responseAsJson['results'];
    if (offset < 140) {
        for (let i = 0; i < newPokemon.length; i++) {
            let newLoadPokemon = newPokemon[i];
            pokemon.push(newLoadPokemon);
        }        
        await loadPokemonInformation();
    }
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

function statsMyChart() {
    document.getElementById('stats-chart').innerHTML += `<div>                      
                                                        <canvas class="my-chart" id="myChart"></canvas>
                                                        </div>                                                     
                                                            `;

    renderChart();
}

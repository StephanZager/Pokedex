async function renderPokemon() {
    let pokemonsohw = document.getElementById('pokemonsohw');

    for (let i = offset; i < pokemon.length; i++) {
        pokemonsohw.innerHTML += createPokemonCardHTML(i);
    }
}

function filterPokemon() {
    let search = document.getElementById('search').value;
    let pokemonSearchResult = document.getElementById('pokemonsohw');

    search = search.toLowerCase();
    returnNextPokemonLoadButton();
    searchPokemonName(search, pokemonSearchResult);
}

function searchPokemonName(search, pokemonSearchResult) {
    if (search.length > 2) {
        pokemonSearchResult.innerHTML = '';

        for (let i = 0; i < pokemons.length; i++) {
            const pokemonname = pokemons[i]['name'];
            if (pokemonname.toLowerCase().includes(search)) {
                pokemonSearchResult.innerHTML += createPokemonCardHTML(i);
            }
        }
    } else {
        pokemonSearchResult.innerHTML = '';
        offset = 0;
        renderPokemon();
        showNextPokemonLoadButton();
    }
}

function createPokemonCardHTML(i) {
    let pokemon = pokemons[i];
    return `
        <div onclick="openPokemonCard(${i})" class="pokecard ${pokemon.type}" id="pokecards${i}">
            <div class="pokemon-info">
                <span class="poke-id">#${pokemon.id}</span>
                <span class="poke-name"><b>${pokemon.name}</b></span>
                <span class="poke-type">${pokemon.type}</span>
            </div>
            <div class="poke-img">
                <img class="poke-img" src="${pokemon.image}" alt="${pokemon.name} Image"><br>
            </div>
        </div>
    `;
}









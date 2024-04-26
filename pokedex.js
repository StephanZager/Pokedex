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

        for (let i = 0; i < pokemonName.length; i++) {
            const pokemonname = pokemonName[i];
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
    return `
        <div onclick="openPokemonCard(${i})" class="pokecard ${pokemonType[i]}" id="pokecards${i}">
            <div class="pokemon-info">
                <span class="poke-id">#${pokemonId[i]}</span>
                <span class="poke-name"><b>${pokemonName[i]}</b></span>
                <span class="poke-type">${pokemonType[i]}</span>
            </div>
            <div class="poke-img">
                <img class="poke-img" src="${pokemonImg[i]}" alt="Pokemon Image"><br>
            </div>
        </div>
    `;
}









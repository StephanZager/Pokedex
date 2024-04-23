async function renderPokemon() {
    let pokemonsohw = document.getElementById('pokemonsohw');

    for (let i = offset; i < pokemon.length; i++) {
        pokemonsohw.innerHTML += createPokemonCardHTML(i);
        pokemonTypeColor(i);
    }
    offset += 20;
}

function filterPokemon() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let pokemonSearchResult = document.getElementById('pokemonsohw');
    pokemonSearchResult.innerHTML = '';

    if (search.length > 2) {
        for (let i = 0; i < pokemonName.length; i++) {
            const element = pokemonName[i];
            if (element.toLowerCase().includes(search)) {
                pokemonSearchResult.innerHTML += createPokemonCardHTML(i);
                pokemonTypeColor(i);
            }

        }
    } else {
        console.log('zu wenig')
        renderPokemon();
    }

}

function createPokemonCardHTML(i) {
    return `
        <div onclick="openPokemonCard(${i})" class="pokecard" id="pokecard${i}">
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





async function renderPokemon() {

    let pokemonsohw = document.getElementById('pokemonsohw');
    pokemonsohw.innerHTML = '';

    for (let i = 0; i < pokemon.length; i++) {
        pokemonsohw.innerHTML += `
            <div onclick="openPokemonCard(${i})" class="pokecard" id="pokecard${i}">
                <div>
                    <span class="poke-id">${pokemonId[i]}</span>
                    <span class="poke-name">${pokemonName[i]}</span>
                    <span class="poke-type">${pokemonType[i]}</span>
                </div>
                <div>
                    <img class="poke-img" src="${pokemonImg[i]}" alt="Pokemon Image"><br>
                </div>
            </div>
        `;
        
        pokemonTypeColor(i); 
       
    }
     
}

function filterPokemon() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let pokemonSearchResult = document.getElementById('pokemonsohw');
    pokemonSearchResult.innerHTML = '';

    for (let i = 0; i < pokemonName.length; i++) {
        const element = pokemonName[i];
        if (element.toLowerCase().includes(search)) {

            pokemonSearchResult.innerHTML +=`
            <div onclick="openPokemonCard(${i})" class="pokecard" id="pokecard${i}">
            <div>
                <span class="poke-id">${pokemonId[i]}</span>
                <span class="poke-name">${pokemonName[i]}</span>
                <span class="poke-type">${pokemonType[i]}</span>
            </div>
            <div>
                <img class="poke-img" src="${pokemonImg[i]}" alt="Pokemon Image"><br>
            </div>
        </div>
    `;
    pokemonTypeColor(i);

        }

    }

}



async function renderPokemon(){
    let pokemonsohw = document.getElementById('pokemonsohw');
    pokemonsohw.innerHTML = '';

    for (let i = 0; i < pokemon.length; i++) {
        
        pokemonsohw.innerHTML += `<div class="pokecard">
                                <div>
                                <span class="poke-id">${pokemonId[i]}</span>
                                <span class="poke-name">${pokemonName[i]}</span>
                                <span class="poke-type">${pokemonType[i]}</span>
                                </div>
                                <div>
                                <img src="${pokemonImg[i]}" alt="Pokemon Image"><br>
                                </div>
                                </div>
        
        `
        
    }


  
}
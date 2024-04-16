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
                                <img class="poke-img" src="${pokemonImg[i]}" alt="Pokemon Image"><br>
                                </div>
                                </div>        
        `
        
    }

    
  
}

function filterPokemon(){
    let search = document.getElementById('search').value;
    search = search.toLowerCase();    
    let pokemonSearchResult = document.getElementById('pokemonsohw');    
    pokemonSearchResult.innerHTML = '';   

    for (let y = 0; y < pokemonName.length; y++) {
        const element = pokemonName[y];
        if(element.toLowerCase().includes(search)){
            
            pokemonSearchResult.innerHTML += 
            `<div class="pokecard">
            <div>
            <span class="poke-id">${pokemonId[y]}</span>
            <span class="poke-name">${pokemonName[y]}</span>
            <span class="poke-type">${pokemonType[y]}</span>
            </div>
            <div>
            <img class="poke-img" src="${pokemonImg[y]}" alt="Pokemon Image"><br>
            </div>
            </div>
            `
            
        }
        
    }
}
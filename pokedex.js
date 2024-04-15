async function renderPokemon(){
    let pokemonsohw = document.getElementById('pokemonsohw');
    pokemonsohw.innerHTML = '';

    for (let i = 0; i < pokemon.length; i++) {
        
        pokemonsohw.innerHTML += `
                                <p>${pokemonId[i]}</p>
                                <div>${pokemonName[i]}</div>
                                <img src="${pokemonImg[i]}" alt="Pokemon Image"><br>
                                <p>${pokemonType[i]}</p>
        
        
        `
        
    }


  
}
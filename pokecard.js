async function openPokemonCard(i) {
    let pokemonCard = document.getElementById('pokemon-card')
    renderPokemonStats(i);
    pokemonCard.innerHTML = openPokemonCardHTML(i);
    await pokemonTypeColor(i);
    renderChart(); 
      
}

function openPokemonCardHTML(i) {
    
    return `
    <div id="pokemon-card-window-close" onclick="pokemonCardWindowClose()">
        <div class="bg">
            <div class="poke-card" onclick="doNotClose(event)">
                <div id="pokecard${i}" class="test-background">
                    <div>
                        <span class="pokemon-id">${pokemonId[i]}</span>
                        <span class="pokemon-name">${pokemonName[i]}</span>
                        <span class="pokemon-type">${pokemonType[i]}</span>
                    </div>
                    <div class="pokeimg">
                        <img class="poke-img-card"  src="${pokemonImg[i]}" alt="Pokemon Image"><br>
                    </div> 
                    <div class="menu-strip">
                        <p>INFO</p>
                        <p>STATS</p>
                    </div>

                    <img class="right-arrow" src="/img/rechter-pfeil (2).png" onclick="nextPokemon(${i})">
                    <img class="left-arrow" src="/img/linker pfeil.png" onclick="previousPokemon(${i})">
                </div>
                <div> 
                    <div class="my-chart">                      
                         <canvas id="myChart"></canvas>                                                       
                    </div>
                </div>    
            </div>
    </div>
    `;
}



//<div> 
//   <button onclick="previousPokemon(${i})">vorherige</button>
//                    <button onclick="nextPokemon(${i})">näschte</button>                                                                         
//                </div>
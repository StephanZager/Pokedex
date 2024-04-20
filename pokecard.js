function openPokemonCard(i) {
    let pokemonCard = document.getElementById('pokemon-card')
    renderPokemonStats(i);
    pokemonTypeColor(i);
    pokemonCard.innerHTML = openPokemonCardHTML(i);
    renderChart();
}

function openPokemonCardHTML(i) {
    return `
    <div id="pokemon-card-window-close" onclick="pokemonCardWindowClose()">
        <div class="bg">
            <div class="poke-card" id="pokecard" onclick="doNotClose(event)">
                <div>
                    <div>
                        <span class="pokemon-id">${pokemonId[i]}</span>
                        <span class="pokemon-name">${pokemonName[i]}</span>
                        <span class="pokemon-type">${pokemonType[i]}</span>
                    </div>
                    <div>
                        <img  src="${pokemonImg[i]}" alt="Pokemon Image"><br>
                    </div>                    
                    <div>
                        <canvas id="myChart"></canvas>
                    </div>                
                    </div> 
                    <button onclick="previousPokemon(${i})">vorherige</button>
                    <button onclick="nextPokemon(${i})">näschte</button>                                                                         
                </div>
            </div>
    </div>
    `;
}

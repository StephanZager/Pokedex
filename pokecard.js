function openPokemonCard(i)  {
    let pokemonCard = document.getElementById('pokemon-card')
    renderPokemonStats(i);
    pokemonTypeColor(i);

    pokemonCard.innerHTML = openPokemonCardHTML(i);
    renderChart();
   }

   function openPokemonCardHTML(i){
    return `
    <div id="pokemon-card-window-close" onclick="pokemonCardWindowClose()">
        <div class="bg">
            <div class="poke-card" id="pokecard" onclick="doNotClose(event)">
                <div>
                    <div>
                        <span>${pokemonId[i]}</span>
                        <span>${pokemonName[i]}</span>
                        <span>${pokemonType[i]}</span>
                    </div>
                    <div>
                        <img  src="${pokemonImg[i]}" alt="Pokemon Image"><br>
                    </div>                    
                    <div>
                        <canvas id="myChart"></canvas>
                    </div>                
                    </div>                                                                          
                </div>
            </div>
    </div>
    `;
   }

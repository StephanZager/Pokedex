async function openPokemonCard(i) {
    let pokemonCard = document.getElementById('pokemon-card');
    pokemonCard.innerHTML = openPokemonCardHTML(i);
    statsMyChart(i);
}

function doNotClose(event) {
    event.stopPropagation();
}

function nextPokemon(nextpokemon) {
    if (nextpokemon == pokemons.length - 1) {
        nextpokemon = 0;
    } else {
        nextpokemon++;
    }
    openPokemonCard(nextpokemon);
}

function previousPokemon(previouspokemon) {
    if (previouspokemon == 0) {
        previouspokemon = pokemons.length - 1;
    } else {
        previouspokemon--;
    }
    openPokemonCard(previouspokemon);
}

function statsMyChart(i) {
    document.getElementById('pokemon-info-section').classList.add('d-none');
    let statsChart = document.getElementById('stats-chart');
    statsChart.classList.remove('d-none')
    statsChart.innerHTML += statsChartHTML();
    renderChart(i);
}

function pokemonInfoCard() {
    document.getElementById('pokemon-info-section').classList.remove('d-none');
    document.getElementById('stats-chart').classList.add('d-none');
}

function pokemonCardWindowClose() {
    document.getElementById('pokemon-card-window-close').classList.add('d-none')
}

function openPokemonCardHTML(i) {
    let pokemonCard = pokemons[i];
    return `
    <div id="pokemon-card-window-close" onclick="pokemonCardWindowClose()">
        <div class="bg">
            <div class="poke-card" onclick="doNotClose(event)">
                <div id="pokecard" class="border ${pokemonCard['type']} shadow-background">
                    <div class="pokeimg">
                        <img class="poke-img-card" src="${pokemonCard['image']}" alt="${pokemonCard['name']} Image"><br>
                    </div> 
                    <div class="menu-strip">
                        <p onclick="pokemonInfoCard()">INFO</p>
                        <p onclick="statsMyChart(${i})">STATS</p>
                    </div>                    
                    <img class="right-arrow" src="img/rechter-pfeil (2).png" onclick="nextPokemon(${i})">
                    <img class="left-arrow" src="img/linker pfeil.png" onclick="previousPokemon(${i})">
                    <img class="pokecard-x-button" src="img/icons8-x-100.png" onclick="pokemonCardWindowClose()">
                </div>
                <div class="info-section">                     
                    <div id="pokemon-info-section">
                        <div class="info-section-container">
                            <div class="info-section-stats">
                                ID:
                                <p>#${pokemonCard['id']}</p>
                            </div>
                            <div class="info-section-stats">
                                Name:
                                <p>${pokemonCard['name']}</p>
                            </div>
                            <div class="info-section-stats">
                                Type:
                                <p>${pokemonCard['type']}</p>
                            </div>
                            <div class="info-section-stats">
                                Weight:
                                <p>${pokemonCard['weight']} kg</p>
                            </div>
                        </div>                            
                    </div>
                <div id="stats-chart" >                             
                </div>
            </div>    
        </div>
    </div>
    `;
}
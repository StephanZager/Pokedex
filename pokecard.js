async function openPokemonCard(i) {
    let pokemonCard = document.getElementById('pokemon-card');
    renderPokemonStats(i);
    pokemonCard.innerHTML = openPokemonCardHTML(i);
}

function doNotClose(event) {
    event.stopPropagation();
}

function nextPokemon(nextpokemon) {
    if (nextpokemon == pokemon.length - 1) {
        nextpokemon = 0;
    } else {
        nextpokemon++;
    }
    openPokemonCard(nextpokemon);
}

function previousPokemon(previouspokemon) {
    if (previouspokemon == 0) {
        previouspokemon = pokemon.length - 1;
    } else {
        previouspokemon--;
    }
    openPokemonCard(previouspokemon);
}

function statsMyChart() {
    document.getElementById('pokemon-info-section').classList.add('d-none');
    let statsChart = document.getElementById('stats-chart');
    statsChart.classList.remove('d-none')
    statsChart.innerHTML += statsChartHTML();
    renderChart();
}

function pokemonInfoCard() {
    document.getElementById('pokemon-info-section').classList.remove('d-none');
    document.getElementById('stats-chart').classList.add('d-none');
}

function pokemonCardWindowClose() {
    document.getElementById('pokemon-card-window-close').classList.add('d-none')
}

function openPokemonCardHTML(i) {
    return `
    <div id="pokemon-card-window-close" onclick="pokemonCardWindowClose()">
        <div class="bg">
            <div class="poke-card" onclick="doNotClose(event)">
                <div id="pokecard" class="border ${pokemonType[i]} shadow-background">
                    <div class="pokeimg">
                        <img class="poke-img-card"  src="${pokemonImg[i]}" alt="Pokemon Image"><br>
                    </div> 
                    <div class="menu-strip">
                        <p  onclick="pokemonInfoCard()">INFO</p>
                        <p onclick="statsMyChart()">STATS</p>
                    </div>                    
                    <img class="right-arrow" src="img/rechter-pfeil (2).png" onclick="nextPokemon(${i})">
                    <img class="left-arrow" src="img/linker pfeil.png" onclick="previousPokemon(${i})">
                    <img class="pokecard-x-button" src="img/icons8-x-100.png" onclick="pokemonCardWindowClose()">
                </div>
                <div class="info-section">                     
                    <div id="pokemon-info-section">
                        <p><b>ID:</b>&nbsp&nbsp#${pokemonId[i]}</p>
                        <p><b>Name:</b>&nbsp&nbsp${pokemonName[i]}</p>
                        <p><b>Type:</b>&nbsp&nbsp${pokemonType[i]}</p>
                        <p><b>Weight:</b>&nbsp&nbsp${pokemonWeight[i]}</p>
                                                    
                    </div>
                <div id="stats-chart" >                             
                </div>
            </div>    
        </div>
    </div>
    `;

}


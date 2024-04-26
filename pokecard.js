async function openPokemonCard(i) {
    let pokemonCard = document.getElementById('pokemon-card');
    renderPokemonStats(i);
    pokemonCard.innerHTML = openPokemonCardHTML(i);
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
                    <span class="poke-id">#${pokemonId[i]}</span>
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



//<div>
//   <button onclick="previousPokemon(${i})">vorherige</button>
//                    <button onclick="nextPokemon(${i})">näschte</button>
//                </div>
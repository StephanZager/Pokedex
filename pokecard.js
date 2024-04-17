function openPokemonCard(i)  {
    let pokemonCard = document.getElementById('pokemon-card')
    
    pokemonCard.innerHTML = `
                            <div class="bg">
                                <div class="poke-card">
                                <div>
                                    <div>
                                        <span>${pokemonId[i]}</span>
                                        <span>${pokemonName[i]}</span>
                                        <span>${pokemonType[i]}</span>
                                    </div>
                                    <div>
                                        <img  src="${pokemonImg[i]}" alt="Pokemon Image"><br>
                                    </div>
                                </div>    
                                </div>
                            </div>
    
    `
    
}

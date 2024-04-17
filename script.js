let pokemon;
let pokemonDetails;
let pokemonId = [];
let pokemonName = [];
let pokemonImg = [];
let pokemonType = [];
let pokemonStats = [];

async function loadPokemon() { // hier ne if abfrage gucken ob sie schon drinne sin also if(pokenon === ....)
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=240';
    let reponse = await fetch(url);
    let responseAsJson = await reponse.json();

    pokemon = responseAsJson['results'];

    // console.log(pokemon);
    loadPokemonInformation();
}

async function loadMorePokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=40';
    let reponse = await fetch(url);
    let responseAsJson = await reponse.json();

    pokemon = responseAsJson['results'];

    //console.log(pokemon);
    await loadPokemonInformation();

}

async function loadPokemonInformation() {
    for (let i = 0; i < pokemon.length; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + (i + 1);
        let response = await fetch(url);
        pokemonDetails = await response.json();
        pokemonId.push(pokemonDetails['id']);
        pokemonName.push(pokemonDetails['name']);
        pokemonImg.push(pokemonDetails['sprites']['other']['dream_world']['front_default']);
        pokemonType.push(pokemonDetails['types']['0']['type']['name']);
        pokemonStats.push(pokemonDetails['stats']);
        //console.log(pokemonDetails);
        //  test(i, pokemonImg); 
        //  loadPokemonEvolutionInformation(i);   
    }
    await renderPokemon();

}

async function pokemonTypeColor(i) {
    let pokecard = document.getElementById('pokecard' + i);

    if (pokemonType[i].includes('grass')) {
        pokecard.classList.add('poke-type-grass');
    }
    if (pokemonType[i].includes('fire')) {
        pokecard.classList.add('poke-type-fire');
    }
    if (pokemonType[i].includes('water')) {
        pokecard.classList.add('poke-type-water');
    }
    if (pokemonType[i].includes('bug')) {
        pokecard.classList.add('poke-type-bug');
    }
    if (pokemonType[i].includes('normal')) {
        pokecard.classList.add('poke-type-normal');
    }
    if (pokemonType[i].includes('poison')) {
        pokecard.classList.add('poke-type-poison');
    }
}

function pokemonCardWindowClose(){
    document.getElementById('pokemon-card-window-close').classList.add('d-none')
}

function doNotClose(event){
    event.stopPropagation();
    
}





//async function loadPokemonEvolutionInformation(index){
//    let url = 'https://pokeapi.co/api/v2/evolution-chain/'+ (index + 1);
//    let response = await fetch(url);
//    let responseAsJson = await response.json();

//    console.log(responseAsJson);
//}

//function test(index, img){
//    let testElement = document.getElementById('test');
//    testElement.innerHTML += `<div>${index + 1}</div><img src="${img}" alt="Pokemon Image"><br>`;
//}










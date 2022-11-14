const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const pokemonContainer = document.querySelector("#listaDePokemons");

function pokemonParaLi(pokemon, codigo) {
    return `
    <li>
        <span class="idPokemon">#00${codigo}</span>
        ${pokemon.name}
        <div class="cardContainerBaixo">
            <div class="atributosPokemon">
                <span>Grama</span>
                <span>Veneno</span>
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Foto do Pokenon ${pokemon.name}">
        </div>
    </li>
    `
}

fetch(url)
    .then(response => response.json())
    .then(response => response.results)
    .then(pokemonList => {
        for(let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemonContainer.innerHTML += pokemonParaLi(pokemon, i+1);
        }
    })
    .catch(err => console.log(err))

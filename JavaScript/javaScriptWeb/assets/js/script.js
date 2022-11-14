const pokemonContainer = document.querySelector("#listaDePokemons");

function pokemonParaLi(pokemon, codigo, imagePokemon) {
    return `
    <li>
        <span class="idPokemon">#00${codigo}</span>
        ${pokemon.name}
        <div class="cardContainerBaixo">
            <div class="atributosPokemon">
                <span>{Atributo Primário    }</span>
                <span>{tipoSegundario}</span>
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${imagePokemon}.svg" alt="Foto do Pokenon ${pokemon.name}">
        </div>
    </li>
    `
}

PokeAPI.getPokemons()
    .then((pokemons) => {
        const pokemonList = pokemons.map((pokemon, array) => {
            return pokemonParaLi(pokemon, array + 1, array + 1)
        })

        const newHtml = pokemonList.join("");
        pokemonContainer.innerHTML = newHtml;
    })
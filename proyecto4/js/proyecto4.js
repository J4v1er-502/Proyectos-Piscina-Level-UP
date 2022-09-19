

window.onload = function() {

    const pokemonContainer = document.querySelector('.container');

    function fetchPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => {
            creatPokemon(data);
        });
    }

    function fetchPokemons(number){
        for(let i = 1; i <= number; i++){
            randomPokemon(i);
        }

    }

    function randomPokemon(){
        const id = Math.floor(Math.random() * 150) + 1;
        fetchPokemon(id);
    }

    function creatPokemon(pokemon){
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const spriteContainer = document.createElement('div');
        spriteContainer.classList.add('imgContainer');

        const sprite = document.createElement('img');
        sprite.src = pokemon.sprites.front_default;

        spriteContainer.appendChild(sprite);

        const name = document.createElement('p');
        name.innerText = pokemon.name;

        card.appendChild(spriteContainer);
        card.appendChild(name);
        pokemonContainer.appendChild(card);

    }
    fetchPokemons(6);    
}

function dispPokemon(pokeName) {
    console.log(pokeName);
    let url = `https://pokeapi.co/api/v2/language/${pokeName}`;
    settings = {
        method: 'GET',
        language: 'en',
        headers: {
            name: `${pokeName}`
        }
    }
    let display = document.getElementById('js-search-results')
    display.innerHTML += `<div>${pokeName}</div>`
    fetch(url, settings)
        .then(result => {
            console.log(result);
            display.innerHTML = `<div>${result}</div>`
            return
        })
        .catch(err => {
            display.innerHTML = "Pokemon not found";
            return
        })
}

function watchPokeForm() {
    let pokeform = document.getElementById('js-search-form');

    pokeform.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("getting poke");
        let pokename = document.getElementById('js-query');

        dispPokemon(pokename.value);
    })
}

function init() {
    watchPokeForm();
}

init();
const poke_container =document.getElementById('poke-container')
const pokemon_count=150
const colors={
    fire:'#FDDFDF',
    grass:'#DEFDE0',
    water:'#FCF7DE',
    ground:'#F4e7da',
    rock:'#d5d5d4',
    fairy:'#fceaff',
    poison:'#98d7a5',
    bug:'#f8d5a3',
    dragon:'#97b3e6',
    psychic:'#eaeda1',
    flying:'#f5f5f5',
    fighting:'#e6e0d4',
    normal:'#f5f5f5'
   
}
const main_types=Object.keys(colors)

const fetchPokemons= async ()=>{
    for(let i=1;i<=pokemon_count;i++){
        await getpokemon(i)
    }
}

const getpokemon= async (id)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
    const res= await fetch(url)
    const data= await res.json()
    createpokemonCard(data)
}

const createpokemonCard=(pokemon)=>{
    const pokemonEl=document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const poke_types=pokemon.types.map(type=> type.type.name)
    const type=main_types.find(type=>poke_types.indexOf(type)>-1)
    const color=colors[type]
    pokemonEl.style.backgroundColor=color

    
    const id=pokemon.id.toString().padStart(3, '0')
    const name=pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const pokemonInnerHTML=`

            <div class="img-container">
               <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">

            </div>
            <div class="info">
                <span class="number">${pokemon.id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
            </div>
       

    
    `
    pokemonEl.innerHTML=pokemonInnerHTML
    poke_container.appendChild(pokemonEl)
}
fetchPokemons()

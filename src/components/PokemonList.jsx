import PokemonCard from './PokemonCard'
import { useState } from 'react'

const POKEMONS = [
   {
     id: 392,
     name: 'Infernape',
     type: 'Fogo/Lutador',
     imageUrl:
       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
   },
   {
     id: 715,
     name: 'Noiver',
     type: 'Dragao/Voador',
     imageUrl:
       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png',
   },
    {
     id: 306,
     name: 'Aggron',
     type: 'Pedra/Metal',
     imageUrl:
       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png',
   },
]


function PokemonList() {

  const [pokemons]= useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
     p.name.toLowerCase().includes(filtro.toLowerCase()))

   return (
<section>
       <label htmlFor="busca">Buscar por nome: </label>
       <input
          id="busca"
          type="search"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Ex.: char"
       />
       {listaFiltrada.map((pokemon) => (
          <PokemonCard 
             key={pokemon.id}
             id={pokemon.id}
             name={pokemon.name}
             type={pokemon.type}
             imageUrl={pokemon.imageUrl} />
       ))}
     </section>

   )
}


export default PokemonList

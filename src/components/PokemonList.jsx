import PokemonCard from './PokemonCard'
import { useState } from 'react'
import { POKEMONS } from '../data/pokemons'


function PokemonList() {
  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
     p.name.toLowerCase().includes(filtro.toLowerCase()))

  const totalEncontrados = listaFiltrada.length

  return (
    <section>
      {/* Área de busca e contador fora do grid para não quebrar o layout */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <label htmlFor="busca"><strong>Buscar por nome: </strong></label>
        <input
          id="busca"
          type="search"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Ex.: char"
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <p style={{ marginTop: '10px' }}>Pokemons encontrados: {totalEncontrados}</p>
      </div>

      <hr style={{ marginBottom: '20px' }} />

      {/* Container do Grid: O CSS 'section > div' aplicará o grid aqui */}
      <div> 
        {totalEncontrados === 0 ? (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            Não há nenhum pokemon na lista/filtro.
          </p>
        ) : (
          listaFiltrada.map((pokemon) => (
            <PokemonCard 
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              imageUrl={pokemon.imageUrl} 
            />
          ))
        )}
      </div>
    </section>
  )
}

export default PokemonList
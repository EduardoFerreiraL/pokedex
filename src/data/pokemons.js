export const POKEMONS = [
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
   {
     id: 376,
     name: 'Metagross',
     type: 'Psiquico/Metal',
     imageUrl:
       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png',
   },
   {
     id: 94,
     name: 'Gengar',
     type: 'Fantasma/Veneno',
     imageUrl:
       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
   },
      {
     id: 466,
     name: 'Electivire',
     type: 'Eletrico',
     imageUrl:
       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png',
   },
]

export function getPokemonById(id) {
  const numericId = Number(id)
  return POKEMONS.find((p) => p.id === numericId) ?? null
}
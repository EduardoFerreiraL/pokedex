function PokemonCard({ id, name, type, imageUrl }) {
   return (
     <div>
      <img src={imageUrl} alt={name} />
      <h2>
        #{String(id).padStart(3, '0')} — {name}
      </h2>
      <p>Tipo: {type}</p>
     </div>
   )
}

export default PokemonCard


// function PokemonCard() {
//   return (
//     <div>
//       <div>
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png"
//           alt="Infernape"
//         />
//         <h2>#392 — Infernape</h2>
//         <p>Tipo: Fire and Fighter</p>
//       </div>
//       <div>
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png"
//           alt="Noivern"
//         />
//         <h2>#715 — Noivern</h2>
//         <p>Tipo: Dragon and Flying</p>
//       </div>
//       <div>
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png"
//           alt="Aggron"
//         />
//         <h2>#306 — Aggron</h2>
//         <p>Tipo: Rock and Steel</p>
//       </div>
//     </div>
//   )
// }

// export default PokemonCard

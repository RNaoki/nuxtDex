export async function getPokemonById(id: number) {
  let reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id} `)
    .then((res) => res.json())
    .then((res) => {
      return {
        name: res.species.name,
        sprite:
          res.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
      };
    });
  return reponse;
}

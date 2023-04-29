export async function getPokemonById(id: number) {
  let reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id} `)
    .then((res) => res.json())
    .then((res) => {
      return {
        number: res.id,
        name: res.species.name,
        hp: res.stats[0].base_stat,
        atk: res.stats[1].base_stat,
        def: res.stats[2].base_stat,
        spatk: res.stats[3].base_stat,
        spdef: res.stats[4].base_stat,
        speed: res.stats[5].base_stat,
        types: res.types,
        sprite:
          res.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
      };
    });
  return reponse;
}

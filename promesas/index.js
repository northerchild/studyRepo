const peticion = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

peticion
    .then( resp => resp.json() )
    .then( (data ) => {
        console.log(data.abilities)
    })
    .catch( console.warn );


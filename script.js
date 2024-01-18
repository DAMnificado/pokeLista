import Pokemon from './pokemon.js';



const url = "https://pokeapi.co/api/v2/pokemon/"

let listaPokemon = [];
document.addEventListener("DOMContentLoaded", () =>{
   

    let lista = document.getElementById("lista");


    fetchDataFromUrl(url)
    .then((listaJson) => {


       
        let pokemonPromises= Object.values(listaJson.results).forEach((values, index) => {

    let pokemon = new Pokemon();

    pokemon.nombre = values.name;

   return fetchDataFromUrl(values.url)
    .then((datosPokemon) => {


    pokemon.imagen = datosPokemon.sprites.front_default;
    return pokemon;
       
    });
    
    

   });

   return Promise.all(pokemonPromises);
   

 

    }).then(pokemones =>{

        listaPokemon = pokemones; 
    console.log(listaPokemon);


    })





});




function fetchDataFromUrl(url){

    return fetch(url)

    // resolve
    .then( (response) => response.json());
    // reject

}
import Pokemon from './pokemon.js';



const url = "https://pokeapi.co/api/v2/pokemon/"


document.addEventListener("DOMContentLoaded", () =>{
    listaPokemon = [];
    
    let lista = document.getElementById("lista");


    fetchDataFromUrl(url)
    .then((listaJson) => {



   Object.values(listaJson.results).forEach((values, index) => {

    pokemon = new Pokemon();

    pokemon.nombre = values.name;

    fetchDataFromUrl(values.url)
    .then((datosPokemon) => {


    pokemon.imagen = datosPokemon.sprites.front_default;
    return pokemon;
       
    }).then((pokemon) => {

        listaPokemon.push(pokemon);





    });

    
    

   });

   console.log(listaPokemon);

    });





});




function fetchDataFromUrl(url){

    return fetch(url)

    // resolve
    .then( (response) => response.json());
    // reject

}
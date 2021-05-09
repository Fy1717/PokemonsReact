import * as actionTypes from "./actionTypes"
import axios from 'axios'

export function changeCategory (category) {
    return {type: actionTypes.CHANGE_CATEGORY, payload: category}
}

export function getCategoriesSuccess(categories) {
    return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories}
}

export function getCategories() {
    let url = "https://pokeapi.co/api/v2/pokemon/"
    let pokemonListFromAx = [];
    let resultListFromAx = [];
    let pokeObj = {};

    async function getPokeList (pokeObject, dispatch) {
        await axios.get(pokeObject.url).then(function (respPoke) {
            respPoke = respPoke.data || {};

            pokeObj = {
                id: (pokeObject.url || '').split('/').filter(Boolean).slice(-1)[0],
                name: pokeObject.name || '',
                weight: respPoke.weight || 0,
                img: (((respPoke.sprites || {}).other || {})['official-artwork'] || {}).front_default || ''
            }

            //console.log(pokeObj);
            resultListFromAx.push(pokeObj) 
        })

        //console.log(resultListFromAx);
        dispatch(getCategoriesSuccess(resultListFromAx));
    } 

    return async function(dispatch) {
        await axios.get(url).then(function (response) {
            pokemonListFromAx = response.data.results;
            //console.log(pokemonListFromAx);
        }).then(function() {
            pokemonListFromAx.map(pokemon => {
                getPokeList(pokemon, dispatch);
            })
        }).then(function() {
            dispatch(getCategoriesSuccess(resultListFromAx));
        })
    }
}
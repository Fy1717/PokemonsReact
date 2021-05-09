import { combineReducers } from "redux"
import changePokemonReducer from "./changePokemonReducer" 
import pokemonListReducer from "./pokemonListReducer" 

const rootReducer = combineReducers({
    changePokemonReducer,
    pokemonListReducer    
})

export default rootReducer;
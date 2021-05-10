import { combineReducers } from "redux"
import changePokemonReducer from "./changePokemonReducer" 
import pokemonListReducer from "./pokemonListReducer" 
import wishlistReducer from "./wishlistReducer"

const rootReducer = combineReducers({
    changePokemonReducer,
    pokemonListReducer,
    wishlistReducer    
})

export default rootReducer;
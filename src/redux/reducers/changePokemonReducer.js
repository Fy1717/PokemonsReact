import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function changePokemonReducer(state=initialState.currentPokemon, action) {
    switch (action.type) {
        case actionTypes.CHANGE_POKEMON:
            return action.payload;
        default: 
            return state;
    }
}
import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function wishlistReducer(state=initialState.wishlist, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_WISHLIST:
            console.log(action.payload)
            var newState = [...state];

            newState.push(action.payload);
            
            console.log(newState)
            return newState;
        default: 
            return state;
    }
}
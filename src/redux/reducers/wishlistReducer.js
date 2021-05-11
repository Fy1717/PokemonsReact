import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function wishlistReducer(state=initialState.wishlist, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_WISHLIST:
            var newState = [...state];
            var includePoke = false;

            newState.map(poke => {
                if(poke.id === action.payload.id) {
                    includePoke = true;
                }
            })
            
            if(!includePoke) {
                newState.push(action.payload);
            }
            
            console.log('WishList = ', newState)
            return newState;
        default: 
            return state;
    }
}
import * as actionTypes from './actionTypes'

export function addToWishlist(pokemon) {
    return { type: actionTypes.ADD_TO_WISHLIST, payload: pokemon }
}

export function removeFromWishlist(pokemon) {
    return { type: actionTypes.REMOVE_FROM_WISHLIST, payload: pokemon }
}
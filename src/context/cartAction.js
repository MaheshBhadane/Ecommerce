import * as cartActionTypes from "./cartActionType";

export const addToCart = (data) => {
    return {
        type: cartActionTypes.ADD_TO_CART, 
        payload: {item: data}
    }
}
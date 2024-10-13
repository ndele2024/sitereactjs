//actions type
export const action = {
    ADD_TO_CART: "ADD_TO_CART",
    UPDATE_CART: "UPDATE_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART"
};

//actions creator
const itemId = () => Math.random().toString(32).substring(2,8);
export function addToCart(item, quantity) {
    return {
        type: action.ADD_TO_CART,
        payload: { id: itemId(), quantity: quantity, product: item }
    };
}

export function updateCart(item, quantity) {
    return {
        type: action.UPDATE_CART,
        payload: {product:item, quantity:quantity}
    };
}

export function removeCart(item) {
    return {
        type: action.REMOVE_FROM_CART,
        payload: {product:item}
    };
}
export const initialState = {
     basket: [],
     wishlist: [],
};


function reducer(state, action) {
    console.log(action);

    switch (action.type) {
        case "ADD_TO_BASKET":
        // Logic for add item to cart
            return  {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
        // Logic for removing
            return { 
                ...state, 
                basket: []
            };
        case "ADD_TO_WISHLIST":
        // Logic for add item to cart
            return  {
                ...state,
                wishlist: [...state.wishlist, action.item]
            };
        case "REMOVE_FROM_WISHLIST":
        // Logic for removing
            return { 
                ...state, 
                wishlist: []
            };
        default:
            return state;
    }
}

export default reducer;
// 
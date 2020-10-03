export const initialState = {
     basket: [],
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
            };
        default:
            return state;
    }
}

export default reducer;
// 
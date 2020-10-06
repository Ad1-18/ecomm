export const initialState = {
     basket: [],
     wishlist: [],
     user: [],
};
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    console.log(state.basket);
    console.log(state.wishlist)

    switch (action.type) {

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "ADD_TO_BASKET":
        // Logic for add item to cart

            return  {
                ...state,
                basket: [...state.basket, action.item]
            };

        case "REMOVE_FROM_BASKET":
        // Logic for removing

            let newBasket = [...state.basket];
            const cartIndex = state.basket.findIndex((item) => item.id === action.id);


            if (cartIndex >= 0) {
                // item is in cart
                newBasket.splice(cartIndex, 1);
            }

            else {
                console.warn(
                    `The product (id: ${action.id}) is not in cart`
                );
            }


            return { 
                ...state, 
                basket: newBasket
            };

        case "ADD_TO_WISHLIST":
        // Logic for add item to cart

            return  {
                ...state,
                wishlist: [...state.wishlist, action.item]
            };

        case "REMOVE_FROM_WISHLIST":
        // Logic for removing

            let newList = [...state.wishlist];
            const listIndex = state.wishlist.findIndex((item) => item.id === action.id);


            if (listIndex >= 0) {
                // item is in cart
                newList.splice(listIndex, 1);
            }

            else {
                console.warn(
                    `The product (id: ${action.id}) is not in Wishlist`
                );
            }


            return { 
                ...state, 
                wishlist: newList
            };
        case "EMPTY_ALL":
            // On signout
            return{
                ...state,
                basket: [],
                wishlist: [],
            };

        default:
            
            return state;
    }
}

export default reducer;
// 
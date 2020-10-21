import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {

    const [{}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Remove from cart
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    const addToWishlist = () => {
        // Remove from cart and add to wishlist

        dispatch({
            type: "ADD_TO_WISHLIST",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                counter: 0
            },
        });

        removeFromBasket();
        
    };

    return (
        <div className = "checkoutProduct">
            <img className = "checkoutProduct__image" src = {image} alt ="" />

            <div className = "checkoutProduct__info">
                <p className = "checkoutProduct__title">
                    {title}
                </p>
                <p className = "checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className = "checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map(()=> (
                            <p>⭐</p>
                        ))
                    }
                </div>

                <button onClick= {removeFromBasket}>Remove from Cart</button>
                <button onClick = {addToWishlist}>Add to Wishlist</button>
            </div> 
        </div>
    )
}

export default CheckoutProduct;

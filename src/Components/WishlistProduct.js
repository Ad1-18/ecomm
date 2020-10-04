import React from 'react';
import './WishlistProduct.css';
import { useStateValue } from './StateProvider';

function WishlistProduct({id, title, image, price, rating}) {

    const [{}, dispatch] = useStateValue();

    const removeFromWishlist = () => {
        // Remove from wishlist
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            id: id,
        });
    };

    const addToBasket = () => {
        // Remove from wishlist and add to cart
        
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            id: id,
        });
        dispatch({
            type: "ADD_TO_BASKET",
            id: id,
        })
    };

    return (
        <div className = "wishlistProduct">
            <img className = "wishlist__image" src = {image} alt ="" />

            <div className = "wishlist__info">
                <p className = "wishlist__title">
                    {title}
                </p>
                <p className = "wishlist__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className = "wishlist__rating">
                    {
                        Array(rating)
                        .fill()
                        .map(()=> (
                            <p>⭐</p>
                        ))
                    }
                </div>

                <button onClick= {addToBasket}>Add to Cart</button>
                <button onClick = {removeFromWishlist}>Remove from Wishlist</button>
            </div> 
        </div>
    )
}

export default WishlistProduct;

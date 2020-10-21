import React from 'react';
import './WishlistProduct.css';
import { useStateValue } from './StateProvider';

function WishlistProduct({id, title, image, price, rating}) {

    const [{counter}, dispatch] = useStateValue();

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
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        removeFromWishlist();
    };

    return (
        <div className = "wishlistProduct">
            <img className = "wishlistProduct__image" src = {image} alt ="" />

            <div className = "wishlistProduct__info">
                <p className = "wishlistProduct__title">
                    {title}
                </p>
                <p className = "wishlistProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className = "wishlistProduct__rating">
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
                <p>There are {counter.length?counter.length:null} people interested in this</p>
            </div> 
        </div>
    )
}

export default WishlistProduct;

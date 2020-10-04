import React from 'react'
import { useStateValue } from './StateProvider'
import './Wishlist.css';
import WishlistProduct from './WishlistProduct.js';

function Wishlist() {
    const [{wishlist}] = useStateValue();

    return (
        <div className= "wishlist"> 
            <img 
           className = "wishlist__banner"
           src = {require('./ProdImg/checkoutbanner.jpg')}
           alt = "" />

           {wishlist?.length === 0 ? (
               <div>
                   <h2> Your wishlist is empty</h2>
                   <p> You have no items in your wishlist. 
                       To add an item to Wishlist, click on "Add to wishlist" next to a CheckoutProduct
                       on the home page or in your cart.
                   </p>
               </div>
           ) : 
           (
               <div>
                   <h2 className="wishlist__Title"> Your Wishlist</h2>

                   {/* list of prods */}
                   {wishlist?.map(item => (

                        <WishlistProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />

                   ))}

                   
               </div>
           )}
        </div>
    )
}

export default Wishlist

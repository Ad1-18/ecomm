import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className= "checkout"> 
            <img 
           className = "checkout__banner"
           src = {require('./ProdImg/checkoutbanner.jpg')}
           alt = "" />

           {basket?.length === 0 ? (
               <div>
                   <h2> Your shopping cart is empty</h2>
                   <p> You have no items in your cart. 
                       To buy an item, click on "Add to cart" next to the item.
                   </p>
               </div>
           ) : 
           (
               <div>
                   <h2 className="checkout__Title"> Your Shopping Cart</h2>

                   {/* list of prods */}
                   {basket?.map(item => (

                        <CheckoutProduct 
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

export default Checkout

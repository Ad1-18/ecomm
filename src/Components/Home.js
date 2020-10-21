import React from 'react';
import './Home.css';
import Product from './Product.js'


function Home() {
    return (
        <div className= "home">
           <img 
           className = "home__image"
           src = {require('./ProdImg/banner.jpg')}
           alt = "" />
           
           
        {/* Product id, title, price, rating, image */}
        <div className = "home__row">
            <Product 
            id="1"
            title=  "Cotton Round Neck T-shirt, Red"
            price = {549}
            rating = {5}
            image = {require('./ProdImg/red.png')}
            review = "I am 5.8 and bought S size, it fits me well. Product is good"
            />
            <Product 
            id="2"
            title=  "Cotton Round Neck T-shirt, Blue"
            price = {549}
            rating = {4}
            image = {require('./ProdImg/blue.png')}
            review = "Great product, will buy again"
            />
        </div>
        <div className = "home__row">

            <Product 
            id="3"
            title=  "Cotton Round Neck T-shirt, Black"
            price = {549}
            rating = {5}
            image = {require('./ProdImg/black.png')}
            review = "Wonderful product, I ordered size medium, exactly fit to my body. Quality is nice."
            />
            <Product 
            id="4"
            title=  "Cotton Round Neck T-shirt, White"
            price = {549}
            rating = {3}
            image = {require('./ProdImg/white.png')}
            review = "Excellent Quality and Excellent colour."
            />
            <Product 
            id="5"
            title=  "Hoodie, Grey"
            price = {749}
            rating = {4}
            image = {require('./ProdImg/ghood.png')}
            review = "Nice product!!! Color is a bit different but fitting is great!"
            />
        </div>
        <div className = "home__row">
            <Product 
            id="6"
            title=  "Hoodie, Red"
            price = {749}
            rating = {5}
            image = {require('./ProdImg/rhood.png')}
            review = "Must buy for everyone!"
            />
            <Product 
            id="7"
            title=  "Hoodie, Blue"
            price = {749}
            rating = {5}
            image = {require('./ProdImg/bhood.png')}
            review = "I bought this during the sale event for 599rs and I absolutely love it."
            />
            <Product 
            id="8"
            title=  "Hoodie, Green"
            price = {749}
            rating = {3}
            image = {require('./ProdImg/grhood.png')}
            review = "Just got out in Amazon sale. Looks like nice, and has a good feel"
            />
        </div>
        <div className = "home__row">
            <Product 
            id="10"
            title=  "Combo Offer- Black Hoodie + Yellow T-shirt with exclusive logo design"
            price = {1000}
            rating = {5}
            image = {require('./ProdImg/offer.png')}
            review = "Great combo offer, product has a great feel and fits well."
            />
        </div>
        {/* Product */}
        </div>

    )
}

export default Home

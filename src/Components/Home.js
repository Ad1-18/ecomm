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
            />
            <Product 
            id="2"
            title=  "Cotton Round Neck T-shirt, Blue"
            price = {549}
            rating = {4}
            image = {require('./ProdImg/blue.png')}
            />
        </div>
        <div className = "home__row">

            <Product 
            id="3"
            title=  "Cotton Round Neck T-shirt, Black"
            price = {549}
            rating = {5}
            image = {require('./ProdImg/black.png')}
            />
            <Product 
            id="4"
            title=  "Cotton Round Neck T-shirt, White"
            price = {549}
            rating = {3}
            image = {require('./ProdImg/white.png')}
            />
            <Product 
            id="5"
            title=  "Hoodie, Grey"
            price = {749}
            rating = {4}
            image = {require('./ProdImg/ghood.png')}
            />
        </div>
        <div className = "home__row">
            <Product 
            id="6"
            title=  "Hoodie, Red"
            price = {749}
            rating = {5}
            image = {require('./ProdImg/rhood.png')}
            />
            <Product 
            id="7"
            title=  "Hoodie, Blue"
            price = {749}
            rating = {5}
            image = {require('./ProdImg/bhood.png')}
            />
            <Product 
            id="8"
            title=  "Hoodie, Green"
            price = {749}
            rating = {3}
            image = {require('./ProdImg/grhood.png')}
            />
        </div>
        <div className = "home__row">
            <Product 
            id="10"
            title=  "Combo Offer- Black Hoodie + Yellow T-shirt with exclusive logo design"
            price = {1000}
            rating = {5}
            image = {require('./ProdImg/offer.jpg')}
            />
        </div>
        {/* Product */}
        </div>

    )
}

export default Home

import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider.js";

function Header() {
    const [{basket}] = useStateValue();

    return (
        <nav className="header">

            {/* logo on the left -> img */}

            <Link to="/">
                <img 
                    className="header__logo" 
                    src = {require('./ProdImg/logo.png')}
                    alt=""
                />
            </Link>

            {/* Search box */}

            <div className = "header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}

            <div className="header__nav">

                {/*1st link*/}

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span  className="header__optionLine1">Hello Adi</span>
                        <span className="header__optionLine2">Sign In</span>
                    </div>
                </Link>

                 {/*2nd link*/}

                 <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& Orders</span>
                    </div>
                </Link>

                 {/*3rd link*/}

                 <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Your</span>
                        <span className="header__optionLine2">Wishlist</span>
                    </div>
                </Link>

                {/*4th Link */}

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/*basket icon */}
                        <ShoppingBasketIcon />
                        {/*No. of items*/}
                        <span className="header__optionLine2 header__basketCount">{basket.length}</span>
                    </div>
                </Link>

            </div>


        {/* Basket icon */}
        

        </nav>
    )
}

export default Header

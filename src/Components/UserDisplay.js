


import React from 'react'
import { useStateValue } from './StateProvider'

function UserDisplay({name, address}) {

    const [{},dispatch] = useStateValue();

    
   return (
        <div className = "wishlistProduct">

            <div className = "wishlistProduct__info">
                <p className = "wishlistProduct__title">
                    Name: {name}
                </p>
                <p className = "wishlistProduct__price">
                   Address: {address}
                </p>
            </div> 
        </div>
    )
}

export default UserDisplay

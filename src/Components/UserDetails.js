import React from 'react'
import './UserDetails.css'
import { useStateValue } from './StateProvider'
import UserDisplay from './UserDisplay.js';
import User from './Users.js'


function UserDetails({name,address}) {
    const[{user_details}] = useStateValue();

    return (
        <div className= "userDetails"> 
            <img 
                className = "userDetails__banner"
                src = {require('./ProdImg/checkoutbanner.jpg')}
                alt = "" />

           {user_details?.length === 0 ? (
               <div>
                   <h2> You haven't entered any details</h2>
                   <p> Enter details
                   </p>
               </div>
           ) : 
           (
               <div>
                   <h2 className="userDetails__title"> Details-</h2>
                   {/* list of prods */}
                   {user_details?.map((user) => (

                        <UserDisplay
                            name = {user.name}
                            address = {user.address}
                        />

                   ))}

                   
               </div>
           )}
        </div>
    )
}


export default UserDetails

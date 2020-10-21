import React from "react";
import "./Users.css";
import { useStateValue } from "./StateProvider";
import {Link} from "react-router-dom";

function Users() {
    const[{},dispatch] = useStateValue();

    const userUpdate = () => (
        dispatch({
            type: "UPDATE_USER_INFO",
            user_details: {
                name: document.getElementById("name").value,
                address: document.getElementById("address").value
            }
        })
    )

    
    return (
        <div>
            <div className= "user"> 
                <img 
                    className = "user__banner"
                    src = {require('./ProdImg/checkoutbanner.jpg')}
                    alt = "" />
                <Link to="/">
                    <img 
                        className="user__logo" 
                        src = {require('./ProdImg/logo.png')}
                        alt=""
                    />
                </Link>
               <h2> Update your details</h2>
               <form>
                    <div className = "user__container">
                        <h5> Name </h5>
                        <input id ="name" placeholder = "type something" type = "name" placeholder="Name"/>
                        <h5> Address</h5>
                        <input id ="address" placeholder = "type something"  type= "address" placeholder="Address" />
                        {/* <Link to ="/user1"> */}
                            <button class = "user__Update" onSubmit = {userUpdate} > 
                                Submit</button>
                        {/* </Link> */}
                    </div>
               </form>
               
            
            </div>
           
        </div>
    )
}
export default Users;

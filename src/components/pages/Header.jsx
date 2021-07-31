import React from 'react'
import { FaFeatherAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
             <h1>
             <FaFeatherAlt />
                Keeper
             </h1>
             {localStorage.getItem('username') && 
                <div className="user-info">
                    <p>Hello, {localStorage.getItem('username')} </p> 
                    <Link to='/'>
                        <p onClick={()=>
                        {
                            localStorage.removeItem('access')
                            localStorage.removeItem('refresh')
                            localStorage.removeItem('username')
                        }}>  Logout </p>
                    </Link>
                 </div>
             }
             
         </header>
    )
}



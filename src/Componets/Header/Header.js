import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './header.css'
const Header = () => {
    const { logout, user, isAdmin } = useFirebase()
    const admin = "nboyctg9@gmail.com"
    // alert(adminEmail)
    return (
        <div className="header-containe">
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>


                <li>
                    <Link to='/myEvents' > myEvents</Link>
                </li>


                {
                    user?.email ?
                        <>
                            <button onClick={logout}>logout</button>
                            <span className="text-white ">{user?.displayName}</span>
                            {
                                user?.email == admin && <>
                                    <Link to="/adminDash">AdminDash</Link>
                                    <>
                                        <Link to="/addEvent">Add Event</Link>
                                    </>
                                </>
                            }
                        </> :
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>

                        </>

                }


            </ul>

        </div>
    );
};

export default Header;
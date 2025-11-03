import React from 'react';
import '../styles/NavBar.css'
import {Link} from 'react-router-dom'

export default function NavBar()  {
    return (
        <nav className='navbar'>
            <ul className='nav-links'>
                <li>
                    <Link to="/"> Acceuil </Link>
                </li>
                <li>
                    <Link to="/Weather"> weather </Link>
                </li>
                <li>
                    <Link to="/About"> A propos </Link>
                </li>
                <li>
                    <Link to="/Auth"> Login </Link>
                </li>
            </ul>
        </nav>
    );
}
import React from 'react';
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar_wrapper}>
            <ul>
                <li>
                    <Link to="/">Profile</Link>
                </li>
                <li>
                    <Link to="/messages">Messages</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/music">Music</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

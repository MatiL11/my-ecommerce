import React from "react";
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__brand-link" href="/">Drip<span>Store</span></a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a href="/">Cat 1</a>
                    </li>
                    <li>
                        <a href="/">Cat 2</a>
                    </li>
                    <li>
                        <a href="/">Cat 3</a>
                    </li>
                </ul>
                <a href="/"><CartWidget/></a>
            </nav>
        </div>
    )
}

export default NavBar;
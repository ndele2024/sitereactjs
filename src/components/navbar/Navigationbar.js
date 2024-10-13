import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import './Navigationbar.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = (props) => {

    const { setIsfiltered, setTextfiltered, active, setActive } = props;
    const values = useSelector(state => state.shoppingApp);
    const countShop = values.length;
    return (
        <div>

            <ul className='navigation'>
                
                <Link to="/">
                    <li
                        className="liste-nav"
                        onClick={() => setActive(1)}
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        My Online Shopping
                    </li>
                </Link>
                <Link to="/">
                    <li
                        className="liste-nav menu"
                        id={(active === 1) ? "active" : ""}
                        onClick={() => setActive(1)}
                    >
                        Home
                    </li>
                </Link>
                <Link to="/shoppingcart">
                    <li
                        className="liste-nav menu"
                        id={(active === 2) ? "active" : ""}
                        onClick={() => setActive(2)}
                    >
                        Cart
                    </li>
                </Link>
                <li className="liste-nav">
                    <input
                        type="text"
                        name="search"
                        placeholder='Search...'
                        id='input-nav'
                        onChange={(e) => {
                            e.target.value.length !== 0 ? setIsfiltered(true) : setIsfiltered(false);
                            setTextfiltered(e.target.value);
                            // filtre(e.target.value); 
                        }} />
                </li>
                <li
                    className="liste-nav shopping-bag"
                    onClick={() => setActive(2)}
                >
                    <Link to="/shoppingcart">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span className="translate-middle badge rounded-pill bg-success">
                            {(countShop !== 0) && countShop}
                        </span>
                    </Link>

                </li>
            </ul>
        </div>
    );
};

export default Navbar;
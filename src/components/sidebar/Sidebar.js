import React from 'react';
import './Sidebar.css';
const listeArt = ["Boisson", "Fruit", "Légume", "Sac", "Vetement"];
const Sidebar = (props) => {
    const { setcategorie, category } = props;
    function declanche(x) {
        setcategorie(x);
    }
    return (
        <ul className="sidemenu">
            {listeArt.map((item, index) => {
                return (<li
                    className={index === category ? 'active' : ''}
                    key={index}
                    onClick={
                        function () { declanche(index) }
                    }
                >
                    {item}
                </li>);
            })}
        </ul>
    );
};

export default Sidebar;

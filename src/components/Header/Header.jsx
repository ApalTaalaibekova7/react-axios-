import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = ({ search, filter, getRandom }) => {
    const [value, setValue] = useState('');

    return (
        <div className="header">
            <Link to={'/'} className="logo">
                <img 
                    width={100} 
                    src="https://img.freepik.com/premium-vector/cocktail-glass-logo-vector-set-template-cocktail-glass-logo-vector-set-elements-cocktail-glass_938396-402.jpg"alt="logo" 
                />
                <h1 className="title">Cocktails | React</h1>
            </Link>
            <div className="search-container"> 
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text" 
                    placeholder='Cocktail name' 
                />
                <button onClick={() => search(value)}>Search</button>
                <select onChange={(e) => filter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Alcoholic">Alcoholic</option>
                    <option value="Non_Alcoholic">None Alcoholic</option>
                </select>
                <button onClick={() => getRandom()}>Random</button> 
            </div>
        </div>
    );
};

export default Header;

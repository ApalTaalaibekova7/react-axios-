import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({search}) => {
    const [value, setValue] = useState('')
    // console.log(value);
    
    return (
        <div>
            <Link to={'/'}>
            <img width={100} src="https://img.freepik.com/premium-vector/cocktail-glass-logo-vector-set-template-cocktail-glass-logo-vector-set-elements-cocktail-glass_938396-402.jpg" alt="logo" />
            </Link>
            <h1>Cocktails | React</h1>
            <input 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text" placeholder='Cocktail name' />
            <button onClick={() => search(value)}>Search</button>
            <select>
                <option value="All">All</option>
                <option value="Alcoholic">Alcoholic</option>
                <option value="Non_Alcoholic">None Alcoholic</option>
            </select>
        </div>
    );
};

export default Header;
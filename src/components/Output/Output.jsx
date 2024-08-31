import React from 'react';
import './Output.css';  

const Output = ({ data }) => {
    return (
        <div className="outputContainer">
            {
                data.length >= 0 ? 
                    data.map(el => (
                        <div key={el.idDrink} className="card">
                            <img 
                                width={100} 
                                src={el.strDrinkThumb} 
                                alt={el.strDrink}
                            />
                            <h3>{el.strDrink}</h3>
                        </div>
                    ))
                :
                <h2 className="error">Oops something went wrong!!!</h2>
            }
        </div>
    );
};

export default Output;

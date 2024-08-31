import React from 'react';
import './Output.css';
import { Link } from 'react-router-dom';

const Output = ({ data }) => {
// console.log(data);

    // Проверка перед использованием length
    if (!data || !Array.isArray(data)) {
        return <h2 className="error">Oops something went wrong!!!</h2>;
    }

    return (
        <div className="outputContainer">
            {
                data.length > 0 ? 
                    data.map(el => (
                        <Link to={`/detail/${el.strDrink}/${el.idDrink}`} key={el.idDrink} className="card">
                            <img 
                                width={100} 
                                src={el.strDrinkThumb} 
                                alt={el.strDrink}
                            />
                            <h3>{el.strDrink}</h3>
                        </Link>
                    ))
                :
                <h2 className="error">No cocktails found!</h2>
            }
        </div>
    );
};

export default Output;

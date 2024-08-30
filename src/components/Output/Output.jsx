import React from 'react';

const Output = ({data}) => {
    // console.log(data);
    
    return (
        <div>
            {
                data.length > 0 ? 
                    data.map(el => (
                        <div key={el.idDrink}>
                            <img width={100} src={el.strDrinkThumb} alt={el.strDrink}/>
                            <h3>{el.strDrink}</h3>

                        </div>
                ))
                :
                <h2>Oops something went wrong!!!</h2>
            }
        </div>
    );
};

export default Output;
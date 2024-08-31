import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cocktailsAPI } from '../../API';

const Detail = () => {
    const { id } = useParams()
    const [cocktail, setCocktail] = useState({})

    const getDetailById = async () => {
            const res = await cocktailsAPI.getDetail(id)
            setCocktail(res.data.drinks[0]);
    }

    useEffect(() => {
       getDetailById()
            
        }, [id])
    console.log(cocktail);
    
    if (!cocktail) {
        return <div>Loading...</div>;
    }

    return (
        <div>
             <h1>{cocktail.strDrink}</h1>
             {cocktail.strDrinkThumb &&
             <img width={200}
              src={cocktail.strDrinkThumb} 
              alt={cocktail.strDrink} />}
            <p><strong>Category:</strong> {cocktail.strCategory}</p>
            <p><strong>Alcoholic:</strong> {cocktail.strAlcoholic}</p>
            <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
            <p><strong>Glass:</strong> {cocktail.strGlass}</p> 
            <p><strong>Ingredient:</strong> {cocktail.strIngredient1}</p>
        </div>
    );
};

export default Detail;
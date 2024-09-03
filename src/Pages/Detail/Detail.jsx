import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { cocktailsAPI } from '../../API';
import './Detail.css';
const Detail = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState({}); 

    const getDetailById = async () => {
        try {
            const res = await cocktailsAPI.getDetail(id);
            setCocktail(res.data.drinks[0]);
        } catch (error) {
            console.error('Error fetching cocktail details:', error);
        }
    };

    useEffect(() => {
        getDetailById();
    }, [id]);

    if (!cocktail) {
        return <div className="loading">Loading...</div>; 
    }

    const getIngredients = () => {
        const arr = []
        for (let key in cocktail) {
            if ( key.includes('strIngredient') && cocktail[key] !== null) {
                arr.push(cocktail[key])
            }
        }
        return arr;
    }

    return (
        <div className="detailContainer">
            <h1 className="detailTitle">{cocktail.strDrink}</h1>
            {cocktail.strDrinkThumb &&
                <img 
                    className="detailImage"
                    width={200}
                    src={cocktail.strDrinkThumb} 
                    alt={cocktail.strDrink} 
                />
            }
            <p className="detailInfo"><strong>Category:</strong> {cocktail.strCategory}</p>
            <p className="detailInfo"><strong>Alcoholic:</strong> {cocktail.strAlcoholic}</p>
            <p className="detailInfo"><strong>Instructions:</strong> {cocktail.strInstructions}</p>
            <p className="detailInfo"><strong>Glass:</strong> {cocktail.strGlass}</p>

            { getIngredients().length > 0 && 
                <ol  className="ingredientsList">
                    {
                        getIngredients().map((el, i) => (
                            <li key={i}><Link to={`/ingredient/${el}`}>{el}</Link></li>
                        ))
                    }
                </ol>
            }
        </div>
    );
};

export default Detail;

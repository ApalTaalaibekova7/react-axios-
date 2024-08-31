import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
            <p className="detailInfo"><strong>Ingredient:</strong> {cocktail.strIngredient1}</p>
        </div>
    );
};

export default Detail;

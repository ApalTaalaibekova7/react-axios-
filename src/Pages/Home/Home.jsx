import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import {cocktailsAPI} from '../../API'
import Output from '../../components/Output/Output';
const Home = () => {
    const [data, setData] = useState([])

    const getCocktails = async () => {
        const res = await cocktailsAPI.getAllcocktails() 
        setData(res.data.drinks);
    }

    // Добавила рандом
    const getRandomCocktail = async () => {
        try {
            const res = await cocktailsAPI.getRandom();
            const randomCocktail = res.data.drinks[0];
            // console.log('Random Cocktail:', randomCocktail);
            setData([randomCocktail]); 
        } catch (error) {
            console.error('Error fetching random cocktail:', error);
        }
    };
    
    const getCocktailsByName = async (value) => {
        const res = await cocktailsAPI.getByName(value)
        res.data.drinks ? setData(res.data.drinks) : setData([])
    }

    const filter = async (value) => {
         if (value === 'ALL') {
            getCocktails() 
         } else {
               const res = await cocktailsAPI.getByFilter(value)
        setData(res.data.drinks);
         }    
    }
    
    useEffect(() => {
        getCocktails()
    }, [])
    return (
        <div>
            <Header filter={filter} getRandom={getRandomCocktail} search={getCocktailsByName} />
            <Output data={data}/>
        </div>
    );
};

export default Home;
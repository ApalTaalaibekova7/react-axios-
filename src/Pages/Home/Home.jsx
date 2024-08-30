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

    const getCocktailsByName = async (value) => {
        const res = await cocktailsAPI.getByName(value)
        setData(res.data.drinks);
        
    }

    useEffect(() => {
        getCocktails()
    }, [])
    return (
        <div>
            <Header search={getCocktailsByName} />
            <Output data={data}/>
        </div>
    );
};

export default Home;
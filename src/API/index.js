import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1', 
    headers: {
        'Content-Type': 'apllication/json',
    }
})

export const cocktailsAPI = {
    getAllcocktails() {
        return instance.get('filter.php?c=Cocktail')
    },
    getByName(name) {
        return instance.get(`search.php?s=${name}`)
    }
    
}
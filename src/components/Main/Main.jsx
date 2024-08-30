import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Detail from '../../Pages/Detail/Detail';
import Ingredient from '../../Pages/Ingredient/Ingredient';
import NotFount from '../../Pages/NotFount/NotFount';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='detail' element={<Detail />} />
                <Route path='ingredient' element={<Ingredient />} />
                <Route path='*' element={<NotFount />} />
            </Routes>
        </div>
    );
};

export default Main;
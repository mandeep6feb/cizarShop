import React from 'react';
import { Routes, Route,  } from "react-router-dom"
import LoginForUser from '../account/LoginForUser';
import Registration from '../account/Registration';
import Homepage from '../component/userComponent/Homepage';
import Products from '../component/userComponent/Products';
function Router() {
    return (
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/register' element={<Registration />}/>
                <Route path='/login' element={<LoginForUser />}/>
            <Route path='/products' element={<Products />}/>
            </Routes>
    );
}

export default Router;
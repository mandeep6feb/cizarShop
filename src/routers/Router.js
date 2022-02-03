import React from 'react';
import { Routes, Route,  } from "react-router-dom"
import LoginForUser from '../account/LoginForUser';
import Registration from '../account/Registration';
import Homepage from '../component/userComponent/Homepage';
function Router() {
    return (
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/register' element={<Registration />}/>
                <Route path='/login' element={<LoginForUser />}/>
            </Routes>
    );
}

export default Router;
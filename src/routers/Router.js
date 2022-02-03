import React from 'react';
import { Routes, Route,  } from "react-router-dom"
import LoginForUser from '../account/LoginForUser';
import Registration from '../account/Registration';
function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginForUser />}/>
                <Route path='register' element={<Registration />}/>
                <Route path='**' element={<LoginForUser />}/>
            </Routes>
        </div>
    );
}

export default Router;
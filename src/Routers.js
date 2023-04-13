import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Home from './components/Home/Home';
import Order from './components/Order';
import Search from './components/Search';
import HomeScreen from './pages/HomeScreen';


const Routers = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/order' element={<Order/>} />
                    <Route path='/search' element={<Search/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Routers;

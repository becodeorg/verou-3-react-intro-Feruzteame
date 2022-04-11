import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/css/app.scss';
import Home from "./components/Home";
import List from "./components/List";
import Navbar from "./components/Navbar";


const App = () => (

    <Router>
        <Navbar/>
        <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/list" element={<List/>} />
            </Routes>

    </Router>
);


export default App;

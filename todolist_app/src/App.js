import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/css/app.scss';
import CreateTask from "./components/CreateTask";
import List from "./components/List";
import Navbar from "./components/Navbar";


const App = () => (

    <Router>
        <Navbar/>
        <Routes>
                <Route exact path="/" element={<CreateTask/>} />
                <Route exact path="/list" element={<List/>} />
            </Routes>

    </Router>
);


export default App;

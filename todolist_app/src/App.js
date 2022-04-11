import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import List from "./components/List";


const App = () => (
    <Router>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List/>} />
            </Routes>

    </Router>
);


export default App;

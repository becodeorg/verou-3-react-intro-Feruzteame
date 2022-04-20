import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'
import './components/css/app.scss';
import CreateTask from "./components/CreateTask";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Calendar from 'react-calendar';

const App = () => (

    <Router>
        <Navbar/>
        <Routes>
                <Route exact path="/" element={<CreateTask/>} />
                <Route exact path="/list" element={<List/>} />
                <Route exact path="/calander" element={<Calendar/>} />
        </Routes>
        <Footer/>
    </Router>
);


export default App;

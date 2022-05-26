import React from 'react';
import { Routes, Route } from "react-router-dom";

// pages
import Home from './pages/Home';

// components
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">

            <Header />

            <Routes>

                <Route path="/" element={<Home />} />

            </Routes>

        </div>
    );
}

export default App;

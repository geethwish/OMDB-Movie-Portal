import React from 'react';
import { Routes, Route } from "react-router-dom";

// pages
import Home from './pages/Home';

// components
import Header from './components/Header/Header';
import PageNotFound from './pages/404/PageNotFound';

function App() {
    return (
        <div className="App">

            <Header />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="*" element={<PageNotFound />} />

            </Routes>

        </div>
    );
}

export default App;

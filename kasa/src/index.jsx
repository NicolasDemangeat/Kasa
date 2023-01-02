import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Survey from './pages/Survey'
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={< Home />} />

                <Route exact path="/survey" element={< Survey />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


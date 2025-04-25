import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Index from "./Index";
import PortfolioPage from "./Pages/Portfolio/Portfolio";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
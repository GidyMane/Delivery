import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Admin from "./components/admin";
import Order from "./components/order";

const App = () => {
    return (
        <Router>
            <div>

                <Routes>
                    <Route path="/" element={<Navbar />}>


                        <Route path="/admin" element={<Admin />} />
                        <Route path="/order" element={<Order />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;






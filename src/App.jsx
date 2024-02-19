import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Admin from "./components/admin";
import Order from "./components/order";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/admin" component={Admin} />
                    <Route path="/order" component={Order} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

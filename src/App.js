import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./SearchPage";

export default function App() {
  return (
    <div className="app">
     <Router>

      <Header/>
      <Switch>

      <Route exact path="/">
      <Home/>
      </Route>

      <Route exact path="/search">
      <SearchPage/>
      </Route>

      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}


          {/* Header  */}

        {/*Home*/}  
          {/* Banner */}
                 {/* Search*/}
      {/* Cards*/}
      {/* Footer*/}
       {/* Search Page*/}
           {/* Header */ }
            {/* ....*/}
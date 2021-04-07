import React, {useState}from "react";
import "./Banner.css";
import {Button} from "@material-ui/core";
import Search from"./Search";
import {useHistory} from "react-router-dom";

export default function Banner() {
  const[showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  const routeChange = () => {
    let path = "/search";
    history.push(path);
  }

  return (
    <div className="banner">
      <div className="banner__search">
      {showSearch && <Search/>}
        <Button onClick={()=> setShowSearch(!showSearch)}className="banner__searchButton" variant="outlined">
        {showSearch ? "Hide":"Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
          <h1>Get out and strectch your imagination</h1>
          <h5>
            Plan a different kind of getaway 
            to uncover the hidden gems near you</h5>
          <Button variant="outlined" onClick={routeChange}>Explore Nearby</Button>
      </div>
    </div>
  );
}
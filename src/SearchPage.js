import React from "react";
import "./SearchPage.css";
import {Button} from "@material-ui/core"
import SearchResult from "./SearchResult";

export default function SearchPage() {
  return (
    <div className="searchPage"> 
        <div className="searchPage__info">
           <p>62 stays - 26 august to 30 august - 2 guest</p>
           <h1>Stays nearby</h1>
            <Button 
            variant='outlined'>Cancellation Flexibility</Button>
            <Button variant='outlined'>
            place</Button>
            <Button variant='outlined'>
            Price</Button>
            <Button variant='outlined'>
            Rooms and beds</Button>
            <Button variant='outlined'>
            More filters</Button>
        </div>
        <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEiz7zlszbJA_WalrvtHLYGGjDDW4TnNPwpMsKlN8hDs6LC5OiuZDZM3Etxu3j8ZVtBQ&usqp=CAU"
        location="Private Room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest - 1 bedroom - wifi - 1.5 shared bathrooms - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="Rs 10000/night"
        total="Rs 10000 total"/>
        <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEiz7zlszbJA_WalrvtHLYGGjDDW4TnNPwpMsKlN8hDs6LC5OiuZDZM3Etxu3j8ZVtBQ&usqp=CAU"
        location="Private Room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest - 1 bedroom - wifi - 1.5 shared bathrooms - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="Rs 10000/night"
        total="Rs 10000 total"/>
        <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEiz7zlszbJA_WalrvtHLYGGjDDW4TnNPwpMsKlN8hDs6LC5OiuZDZM3Etxu3j8ZVtBQ&usqp=CAU"
        location="Private Room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest - 1 bedroom - wifi - 1.5 shared bathrooms - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="Rs 10000/night"
        total="Rs 10000 total"/>
    </div>
  )
}
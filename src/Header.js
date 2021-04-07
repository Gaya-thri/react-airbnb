import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://res.cloudinary.com/simpleview/image/upload/v1513017635/clients/oakland-redesign/Airbnb_new_logo_2014_f14a788c-7634-440c-87a0-e2539782a9b8.png"
        alt=""
      />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
         <p>Become a host</p>
         <LanguageIcon/>
         <ExpandMoreIcon/>
         <AccountCircleIcon/>

      </div>
    </div>
  );
}

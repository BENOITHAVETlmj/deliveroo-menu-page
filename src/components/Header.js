import React from "react";

const Header = props => {
  return (
    <header>
      <div className="second-top-band">
        {" "}
        <h1>{props.restosMenu && props.restosMenu.restaurant.name}</h1>
        {/* Si props.restosMenu est true on affiche rops.restosMenu.restaurant.name */}
        <div className="description">
          {props.restosMenu && props.restosMenu.restaurant.description}
        </div>
      </div>
      <div className="picture-second-band-top">
        <img
          className="picture1"
          src={props.restosMenu && props.restosMenu.restaurant.picture}
          alt="picture1 img"
        />
      </div>
    </header>
  );
};
export default Header;

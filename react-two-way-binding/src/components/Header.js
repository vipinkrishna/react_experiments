import React from "react";

export const Header = (props) => {
  return (
    <div>
      <li><a href="#">{props.homeLink}</a></li>
    </div>
  );
}
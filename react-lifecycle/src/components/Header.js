import React from "react";

export const Header = (props) => {
  return (
    <ul>
      <li><a href="#">{props.homeLink}</a></li>
    </ul>
  );
};
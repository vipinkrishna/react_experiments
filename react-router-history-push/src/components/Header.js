import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <Link to={"/home"}>Home</Link><br />
            <Link to={"/user/10"}>User</Link>
        </div>
    );
};
import React from "react";

const Footer = () => {
    const CurrentlyYear = new Date().getFullYear();
    return <footer>
        <p>
        Copyright by Natalia © {CurrentlyYear}
    </p>
    </footer>
}
export default Footer;
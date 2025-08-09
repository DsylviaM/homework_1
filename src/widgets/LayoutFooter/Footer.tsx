import React from "react";

const Footer = (props) => {

    const CurrentlyYear = new Date().getFullYear();
    return <footer >
        <p>
            Copyright by {props.name} © {CurrentlyYear}
        </p>
    </footer>
}
export default Footer;
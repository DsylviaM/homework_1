import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
    const CurrentlyYear = new Date().getFullYear();
    return <footer className={styles.footer}>
        <p>
            Copyright by {props.name} © {CurrentlyYear}
        </p>
    </footer>
}
export default Footer;
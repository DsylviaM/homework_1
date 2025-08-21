import styles from "./Footer.module.scss";

const Footer = () => {
    const CurrentlyYear = new Date().getFullYear();
    return <footer className={styles.footer}>
        <p>
        Copyright by Natalia © {CurrentlyYear}
    </p>
    </footer>
}
export default Footer;
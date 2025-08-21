import styles from "./Header.module.scss";

const Header = (props) => {
    return <header className={styles.header}>
        <h1>
            {props.title}
            <h4>Interesting facts:</h4>
        </h1>
    </header>
}
export default Header;
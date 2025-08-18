import React, { useContext } from "react";
import { useTheme } from "../../shared/lib/theme/useTheme";
import Modal from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/Button";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);

    return <header
        className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
        <img
            src={isDark ? '/images/logo-dark.png' : '/images/logo-light.png'}
            width={30}
            alt="logo"
            className="header__logo"
            onClick={toggleTheme}
        />
        <h1>
            {props.appTitle}
            <br />
            {props.factsTitle}
        </h1>
        <Button
            variant="secondary"
            size="medium"
            onClick={() => setIsOpen(true)}
        >
            О проекте
        </Button>
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <Modal.Header>
                <h2>About the project</h2>
            </Modal.Header>
            <Modal.Body>
                <p> На странице вы можете увидеть список интересных фактов относящихся к животным и растениям. Эти факты были собраны из открытых источников и могут быть полезны для изучения биологии. </p>
            </Modal.Body>
            <Modal.Footer>
            <h3> Regards from the author </h3>
            </Modal.Footer>
        </Modal>
    </header>
}
export default Header;
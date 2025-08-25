import React, { useContext } from "react";
import { useTheme } from "../../shared/lib/theme/useTheme";
import Modal from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/Button";

const Header = (props) => {
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);

    return <header
        className={`header ${isDark ? 'dark' : 'light'}`}
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
            <h2>О проекте:</h2>
            <p>
                Этот проект создан в рамках учебного курса по React. На странице вы можете увидеть список интересных фактов.
            </p>
        </Modal>
    </header>
}
export default Header;
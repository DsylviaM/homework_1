import React, { useContext } from "react";
import { useTheme } from "../../shared/lib/theme/useTheme";
import Modal from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/Button";
import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../../features/ThemeSwittcher/ui/ThemeSwitcher";

const Header = (props) => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);

    return <header
        className={styles.header}
        data-theme={theme}
    >
        <ThemeSwitcher />
        <h1>
            {props.title}
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
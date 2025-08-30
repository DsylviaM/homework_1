import React, { MouseEventHandler } from 'react';
import ReactDom from 'react-dom';
import stylesModul from "./Modal.module.scss";
import { useTheme } from '../../lib/theme/useTheme';
import { Button } from '../Button/Button.tsx';

// Типы для пропсов
export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

// Типы для частей модалки
export type ModalHeaderProps = {
    children: React.ReactNode;
};

export type ModalBodyProps = {
    children: React.ReactNode;
};

export type ModalFooterProps = {
    children: React.ReactNode;
};

const ModalRoot = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;
    const { isDark } = useTheme();

    // Правильная типизация обработчика
    const handleOverlayClick: MouseEventHandler<HTMLDivElement> = onClose;

    const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation(); // Чтобы клик внутри не закрывал окно
    };

    return ReactDom.createPortal(
        <div className={stylesModul.modalOverlay} onClick={handleOverlayClick}>
            <div
                className={stylesModul.modalContent}
                onClick={handleContentClick}
                data-theme={isDark ? 'dark' : 'light'}
            >
                <Button
                    variant="text"
                    className={stylesModul['modal-close-button']}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </Button>
                {children}
            </div>
        </div>,
        document.body
    );
};

const Header = ({ children }: ModalHeaderProps) => {
    const { isDark } = useTheme();
    return (
        <header
            className={stylesModul.modalHeader}
            data-theme={isDark ? 'dark' : 'light'}
        >
            {children}
        </header>
    );
}

const Body = ({ children }: ModalBodyProps) => {
    return (
        <div className={stylesModul.modalBody}>
            {children}
        </div>
    );
}

const Footer = ({ children }: ModalFooterProps) => {
    return (
        <footer className={stylesModul.modalFooter}>
            {children}
        </footer>
    );
}

// Сохраняем составную структуру
const Modal = Object.assign(ModalRoot, {
    Header,
    Body,
    Footer,
});

export default Modal;
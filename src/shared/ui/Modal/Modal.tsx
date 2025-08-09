import React, { PropsWithChildren } from 'react';
import ReactDom from 'react-dom';
import stylesModul from "./Modal.module.scss";
import { useTheme } from '../../lib/theme/useTheme';
import { Button } from '../Button/Button.tsx';


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) => {
    if (!isOpen) return null;
    const { isDark } = useTheme();

    return ReactDom.createPortal(
        <div className={stylesModul.modalOverlay} onClick={onClose}>
            <div
                className={stylesModul.modalContent}
                onClick={(e) => e.stopPropagation()} // Чтобы клик внутри не закрывал окно
                data-theme={isDark ? 'dark' : 'light'}
            >
                <Button
                    variant="text"
                    className={stylesModul['modal-close-button']}
                    onClick={onClose}
                >
                    &times;
                </Button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
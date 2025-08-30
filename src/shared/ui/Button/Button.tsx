// src/shared/ui/Button/Button.tsx
import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const variantClass = styles[`button--${variant}`];
  const sizeClass = styles[`button--${size}`];
  
  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    />
  );
};
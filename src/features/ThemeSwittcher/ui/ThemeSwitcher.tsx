import { useTheme } from '../../../shared/lib/theme/useTheme';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className={styles.button}
    >
      <img
        src={theme === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'}
        alt="Toggle theme"
        className={styles.image}
      />
    </button>
  );
};
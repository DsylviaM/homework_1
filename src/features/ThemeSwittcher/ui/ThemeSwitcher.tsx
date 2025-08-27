import { useTheme } from '../../../shared/lib/theme/useTheme';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className={styles.button}
      variant="secondary"
      size="medium"
      onClick={toggleTheme}
    >
      <img
        src={theme === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'}
        alt="Toggle theme"
        className={styles.image}
      />
    </Button>
  );
};
import { useTheme } from '../../../shared/lib/theme/useTheme';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <img
        src={theme === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'}
        width={30}
        alt="Toggle theme"
        className="object-cover w-8 h-8"
        style={{
          backgroundColor: "#b692e8ff"
        }}
      />
    </button>
  );
};
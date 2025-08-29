import { useTheme } from '../../../shared/lib/theme/useTheme';
import '../ui/PostLengthFilter.css';
import React from 'react';

interface PostLengthFilterProps {
  minLength: number;
  onLengthChange: (length: number) => void;
}

export const PostLengthFilter: React.FC<PostLengthFilterProps> = ({
  minLength,
  onLengthChange
}) => {
  const { isDark } = useTheme();
  return (
    <div className={`length-filter ${isDark ? 'dark' : 'light'}`}>
      <label>
        Минимальная длина заголовка:
        <input
          type="number"
          min="0"
          value={minLength}
          onChange={(e) => onLengthChange(Number(e.target.value))}
          className="length-filter-input"
        />
      </label>
    </div>
  );
};
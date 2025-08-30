import React from 'react';
import styles from './ItemList.module.scss';
import { useTheme } from '../../lib/theme/useTheme';


export interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  emptyMessage?: React.ReactNode;
  onItemClick?: (item: T, index: number) => void;
}

export const ItemList = <T,>({
  items,
  renderItem,
  className = '',
  emptyMessage = 'No items found',
  onItemClick,
}: ItemListProps<T>) => {
  const { isDark } = useTheme();

  if (items.length === 0) {
    return (
      <div 
        className={`${styles.itemList} ${styles.empty} ${className}`}
        data-theme={isDark ? 'dark' : 'light'}
      >
        {emptyMessage} 
      </div>
    );
  }

  return (
    <div 
      className={`${styles.itemList} ${className}`}
      data-theme={isDark ? 'dark' : 'light'}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.itemListItem}
          onClick={() => onItemClick?.(item, index)}
          style={{ cursor: onItemClick ? 'pointer' : 'default' }}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};
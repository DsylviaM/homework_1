import React from 'react';
import { ItemListProps } from './types';

export function ItemList<T>({
  items,
  renderItem,
  className = '',
  emptyMessage = 'No items found',
  loading = false,
  loadingComponent
}: ItemListProps<T>): JSX.Element {
  if (loading) {
    return loadingComponent ? <>{loadingComponent}</> : <div>Loading...</div>;
  }

  if (items.length === 0) {
    return <div className="text-gray-500 text-center py-4">{emptyMessage}</div>;
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="item-container">
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}
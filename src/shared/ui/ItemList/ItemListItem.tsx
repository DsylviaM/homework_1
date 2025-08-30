import React from 'react';
import { ItemListItemProps } from './types';

export function ItemListItem<T>({
  item,
  index,
  onClick,
  onDoubleClick
}: ItemListItemProps<T>): JSX.Element {
  const handleClick = (event: React.MouseEvent) => {
    onClick?.(item, event);
  };

  const handleDoubleClick = (event: React.MouseEvent) => {
    onDoubleClick?.(item, event);
  };

  return (
    <div
      className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {JSON.stringify(item)}
    </div>
  );
}
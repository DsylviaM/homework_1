import { ReactNode } from 'react';

export interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  emptyMessage?: string;
  loading?: boolean;
  loadingComponent?: ReactNode;
}

export interface ItemListItemProps<T> {
  item: T;
  index: number;
  onClick?: (item: T, event: React.MouseEvent) => void;
  onDoubleClick?: (item: T, event: React.MouseEvent) => void;
}
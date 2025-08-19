import { NavLink, Outlet } from 'react-router-dom';
import styles from './UserTabs.module.scss';

interface UserTabsProps {
  userId: string | number;
}

export const UserTabs = ({ userId }: UserTabsProps) => {
  return (
    <div className={styles.tabs}>
            <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Posts
      </NavLink>
      <NavLink
        to={`/albums/${userId}/photos`}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Albums
      </NavLink>
      <NavLink
        to={`/users/${userId}`}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Users
      </NavLink>
    </div>
  );
};
import { NavLink } from 'react-router-dom';
import styles from './UserTabs.module.scss';

interface UserTabsProps {
  userId: string | number;
}

export const UserTabs = ({ userId }: UserTabsProps) => {
  return (
    <div className={styles.tabs}>
      <NavLink
        to={`/users/${userId}/posts`}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Posts
      </NavLink>
      <NavLink
        to={`/users/${userId}/albums`}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Albums
      </NavLink>
      <NavLink
        to={`/users/${userId}/todos`}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Todos
      </NavLink>
    </div>
  );
};
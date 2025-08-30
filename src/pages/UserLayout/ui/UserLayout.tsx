import { Outlet, useParams } from 'react-router-dom';
import { UserTabs } from '../../../widgets/UserTabs';

const UserLayout = () => {
  const { id } = useParams();

  return (
    <div className="user-layout">
      <UserTabs userId={id || '1'} />
      <Outlet />
    </div>
  );
};

export default UserLayout;
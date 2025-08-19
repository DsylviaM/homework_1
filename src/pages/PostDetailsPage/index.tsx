import { useParams } from 'react-router-dom';
import UserLayout from '../UserLayout/ui/UserLayout';

const PostDetailsPage = () => {
  const { id, postId } = useParams();

  return (
    <div>
    <UserLayout />
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Пост #{postId} пользователя #{id}</h2>
      <div style={{ 
        background: '#e9ecef', 
        padding: '60px 40px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <p style={{ margin: '0', color: '#6c757d' }}>📝 quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto</p>
      </div>
    </div>
    </div>
  );
};

export default PostDetailsPage;
import PostList from '../../widgets/PostList/PostList';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';
import UserLayout from '../UserLayout/ui/UserLayout';
import { Link} from 'react-router-dom';

const PostListPage = () => {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <UserLayout />
      <div style={{ backgroundColor: "#f1eee6",                     fontFamily: "'McLaren', cursive",
                    fontWeight: 400,
                    margin: 0,
                    padding: 16 }} >
        <h1>All posts</h1>
        <Link to="/users/1">Back to my posts</Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export default PostListPage;
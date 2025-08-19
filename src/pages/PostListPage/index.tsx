import PostList from '../../widgets/PostList/PostList';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';

const UserPostsPage = () => {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default UserPostsPage;
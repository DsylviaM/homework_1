import React from 'react';
import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import { useGetUsersQuery } from '../../entities/user/api/usersApi';

const PostsPage = () => {
  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
    refetch: refetchPosts,
  } = useGetPostsQuery();

  const {
    data: users,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUsersQuery();

  if (postsLoading || usersLoading) return <div>Loading...</div>;
  if (postsError || usersError) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetchPosts}>Refetch Posts</button>
      <div>
        {posts?.map((post) => (
          <div key={post.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>
              Author: {users?.find(user => user.id === post.userId)?.name}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
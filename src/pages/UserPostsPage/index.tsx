import { Outlet, useParams } from 'react-router-dom';
import PostList from '../../widgets/PostList/PostList';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';

const UserPostsPage = () => {
    const { userId } = useParams<{ userId: string }>();
    const { posts, isLoading, error } = usePosts(userId);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <PostList userId={userId} posts={posts}/>
        </div>
    );
};

export default UserPostsPage;
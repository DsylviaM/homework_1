import { Link, useParams } from 'react-router-dom';
import PostList from '../../widgets/PostList/PostList';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';

const UserPostsPage = () => {
    const { userId } = useParams<{ userId: string }>();
    const { posts, isLoading, error } = usePosts(userId);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div style={{ backgroundColor: "#f1eee6",                     fontFamily: "'McLaren', cursive",
                    fontWeight: 400,
                    margin: 0,
                    padding: 16 }}>
                <h2 >My posts</h2>
                <div>
                    <Link to="/posts">View all posts</Link><br />
                    <Link to={`/posts/1`}>View post details</Link>
                </div>
            </div>

            <PostList userId={userId} posts={posts} />
        </div>
    );
};

export default UserPostsPage;
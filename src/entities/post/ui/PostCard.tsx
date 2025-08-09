import { useTheme } from '../../../shared/lib/theme/useTheme';
import type { Post } from '../../../widgets/PostList/PostList';

interface PostCardProps {
    post: Post
}

const Card = ({ post }: PostCardProps) => {
    const {isDark} = useTheme();
    return (
        <div className={`layout ${isDark ? 'dark' : 'light'}`}>
            <p>{post.id}. {post.body}</p>
        </div>
    )
}
export default Card;
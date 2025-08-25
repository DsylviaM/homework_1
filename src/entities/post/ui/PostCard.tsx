import { useTheme } from '../../../shared/lib/theme/useTheme';
import type { Post } from '../model/types';
import styles from "./PostCard.module.scss";

interface PostCardProps {
    post: Post
}

const Card = ({ post }: PostCardProps) => {
    const {isDark} = useTheme();
    return (
        <div className={`${styles.layout} ${isDark ? 'dark' : 'light'}`}>
            <p>{post.id}. {post.body}</p>
        </div>
    )
}
export default Card;
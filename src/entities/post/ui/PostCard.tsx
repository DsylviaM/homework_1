import type { Post } from '../model/types';
import styles from "./PostCard.module.scss";


interface PostCardProps {
    post: Post
}

const Card = ({ post }: PostCardProps) => {
    return (
        <div className={styles.layout}>
            <p>{post.id}. {post.body}</p>
        </div>
    )
}
export default Card;
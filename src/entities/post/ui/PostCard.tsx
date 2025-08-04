import type { Post } from '../../../widgets/PostList/PostList';


interface PostCardProps {
    post: Post
}

const Card = ({ post }: PostCardProps) => {
    return (
        <div className="layout">
            <p>{post.id}. {post.body}</p>
        </div>
    )
}
export default Card;
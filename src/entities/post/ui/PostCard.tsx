import { useTheme } from '../../../shared/lib/theme/useTheme';
import { Post } from '../../../shared/constants/posts';
import { CommentList } from '../../../widgets/CommentList/ui/CommentList';
import '../ui/PostCard.css';
import { memo } from 'react';

interface PostCardProps {
  post: Post;
}
export const PostCard = memo(({ post }: PostCardProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`layout ${isDark ? 'dark' : 'light'}`}>
      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-body">{post.id}. {post.body}</p>
      </div>

      {post.comments && post.comments.length > 0 && (
        <CommentList 
          comments={post.comments}
          className="post-comments" 
        />
      )}
    </div>
  );
});

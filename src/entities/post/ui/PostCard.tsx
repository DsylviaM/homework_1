import { useTheme } from '../../../shared/lib/theme/useTheme';
import { Post } from '../../../entities/post/model/mocks/types';
import { CommentList } from '../../../widgets/CommentList/ui/CommentList';
import { memo } from 'react';
import styles from "./PostCard.module.scss";

interface PostCardProps {
  post: Post;
  
}
export const PostCard = memo(({ post }: PostCardProps) => {
  const { theme } = useTheme();

  return (
    <div className={styles.layout} data-theme={theme}>
      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-body">{post.id}. {post.body}</p>
      </div>
       {/* <p>{post.id}. {post.body}</p> */}

      {post.comments && post.comments.length > 0 && (
        <CommentList
          comments={post.comments}
          className="post-comments"
        />
      )}
    </div>
  );
});

import React from 'react';
import { Post } from '../../../entities/post/api/postsApi';
import { useGetPostCommentsQuery } from '../../../entities/comment/api/commentsApi';
import { CommentList } from '../../CommentList/ui/CommentList';

interface PostWithCommentsProps {
  post: Post;
}

const PostWithComments: React.FC<PostWithCommentsProps> = ({ post }) => {
  const { 
    data: comments, 
    isLoading, 
    error 
  } = useGetPostCommentsQuery(post.id); // Используем правильное имя

  if (error) {
    return (
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ff6b6b' }}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div style={{ color: '#ff6b6b' }}>Ошибка загрузки комментариев</div>
      </div>
    );
  }

  return (
    <div style={{ 
      marginBottom: '20px', 
      padding: '15px', 
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{post.title}</h3>
      <p style={{ margin: '0 0 15px 0', color: '#666' }}>{post.body}</p>
      
      {isLoading ? (
        <div style={{ padding: '10px', background: '#f9f9f9', borderRadius: '4px' }}>
          Загрузка комментариев...
        </div>
      ) : (
        <CommentList comments={comments || []} />
      )}
    </div>
  );
};

export default PostWithComments;
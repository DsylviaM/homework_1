import React, { useState, useCallback } from 'react';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentListProps {
  comments: Comment[];
  className?: string;
}

export const CommentList: React.FC<CommentListProps> = ({ comments, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleComments = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <div className={`comment-container ${className}`}>
      <button 
        onClick={toggleComments}
        className="comment-toggle-btn"
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Скрыть комментарии' : `Показать комментарии (${comments.length})`}
      </button>
      
      {isExpanded && (
        <ul className="comment-items">
          {comments.map(comment => (
            <li key={comment.id} className="comment-item">
              <span className="comment-author">{comment.name}</span>
              <p className="comment-text">{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
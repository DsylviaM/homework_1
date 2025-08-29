import { useParams, Link } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../entities/post/api/postsApi';
import { useGetUserByIdQuery } from '../../entities/user/api/usersApi';
import { useGetPostCommentsQuery } from '../../entities/comment/api/commentsApi';
import UserLayout from '../UserLayout/ui/UserLayout';
import { CommentList } from '../../widgets/CommentList/ui/CommentList';
import styles from './PostDetailsPage.module.scss';

const PostDetailsPage = () => {
  const { id, postId } = useParams<{ id: string; postId: string }>();
  const userId = id ? parseInt(id) : 1;
  const parsedPostId = postId ? parseInt(postId) : 1;

  // Загружаем данные поста
  const { 
    data: post, 
    isLoading: postLoading, 
    error: postError 
  } = useGetPostByIdQuery(parsedPostId, {
    skip: !parsedPostId,
  });

  const { 
    data: user, 
    isLoading: userLoading, 
    error: userError 
  } = useGetUserByIdQuery(userId, {
    skip: !userId,
  });

  const { 
    data: comments, 
    isLoading: commentsLoading, 
    error: commentsError 
  } = useGetPostCommentsQuery(parsedPostId, {
    skip: !parsedPostId,
  });

  const isLoading = postLoading || userLoading || commentsLoading;
  const error = postError || userError || commentsError;

  if (isLoading) {
    return (
      <div>
        <UserLayout />
        <div className={styles.loadingContainer}>
          <div>Загрузка поста и комментариев...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <UserLayout />
        <div className={styles.errorContainer}>
          <h2>Ошибка загрузки данных</h2>
          <Link 
            to={userId ? `/users/${userId}/posts` : '/posts'}
            className={styles.errorBackLink}
          >
            ← Назад к постам
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <UserLayout />
        <div className={styles.errorContainer}>
          <h2>Пост не найден</h2>
          <Link 
            to={userId ? `/users/${userId}/posts` : '/posts'}
            className={styles.errorBackLink}
          >
            ← Назад к постам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <UserLayout />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.breadcrumbs}>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>Пост в деталях</span>
          </div>
          <div className={styles.header}>
            <div>
              <h1 className={styles.title}>{post.title}</h1>
              {user && (
                <p className={styles.author}>
                  Автор: <strong>{user.name}</strong> ({user.email})
                </p>
              )}
            </div>
          </div>

          {/* Содержание поста */}
          <div className={styles.postContent}>
            <p className={styles.postText}>{post.body}</p>
          </div>
          {/* Комментарии */}
          <div>
            {comments && comments.length > 0 && (
              <CommentList comments={comments} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
import { useParams, Link } from 'react-router-dom';
import { useGetPostsByUserIdQuery } from '../../entities/post/api/postsApi';
import { useGetUserByIdQuery } from '../../entities/user/api/usersApi';
import UserLayout from '../UserLayout/ui/UserLayout';
import styles from './UserPostsPage.module.scss';

const UserPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = id ? parseInt(id) : 0;

  // Загружаем посты пользователя
  const { 
    data: posts, 
    isLoading: postsLoading, 
    error: postsError,
    refetch 
  } = useGetPostsByUserIdQuery(userId, {
    skip: !userId, // Пропускаем если нет userId
  });

  // Загружаем информацию о пользователе
  const { 
    data: user, 
    isLoading: userLoading, 
    error: userError 
  } = useGetUserByIdQuery(userId, {
    skip: !userId,
  });

  const isLoading = postsLoading || userLoading;
  const error = postsError || userError;

  if (isLoading) {
    return (
      <div>
        <div className={styles.loadingContainer}>
          <div>Загрузка постов пользователя...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className={styles.errorContainer}>
          <h2>Ошибка загрузки постов. Попробуйте позже</h2>
        </div>
      </div>
    );
  }

  if (!userId) {
    return (
      <div>
        <div className={styles.errorContainer}>
          <h2>Пользователь не найден</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Заголовок */}
          <div className={styles.header}>
            <div>
              <h1 className={styles.title}>
                {user ? `Посты пользователя: ${user.name}` : 'Посты пользователя'}
              </h1>
              {user && (
                <p className={styles.userInfo}>
                  {user.email} • {user.company?.name}
                </p>
              )}
            </div>
            <Link 
              to="/posts"
              className={styles.backButton}
            >
              ← Back to all posts
            </Link>
          </div>
          <div>
            <h2 className={styles.sectionTitle}>
              Список постов
            </h2>

            {posts && posts.length > 0 ? (
              <div className={styles.postsGrid}>
                {posts.map(post => (
                  <div 
                    key={post.id} 
                    className={styles.postCard}
                  >
                    <Link 
                      to={`/posts/${post.id}`}
                      className={styles.postLink}
                    >
                      <h3 className={styles.postTitle}>
                        {post.title}
                      </h3>
                      <p className={styles.postBody}>
                        {post.body}
                      </p>
                      <div className={styles.postFooter}>
                        <span className={styles.postId}>
                          Пост #{post.id}
                        </span>
                        <span className={styles.readMore}>
                          Читать полностью →
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noPosts}>
                <div className={styles.noPostsIcon}>📝</div>
                <h3 className={styles.noPostsTitle}>
                  Пока нет постов
                </h3>
                <p className={styles.noPostsText}>
                  У этого пользователя еще нет опубликованных постов
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostPage;
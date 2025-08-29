import { Link } from 'react-router-dom';
import { useGetPostsByUserIdQuery } from '../../entities/post/api/postsApi';
import UserLayout from '../UserLayout/ui/UserLayout';
import PostWithComments from '../../widgets/PostWithComment/ui/PostWithComments';
import styles from './PostListPage.module.scss';

interface PostListPageProps {
  userId?: number;
}

const PostListPage = ({ userId = 1}: PostListPageProps) => {
  const { 
    data: posts, 
    isLoading, 
    error, 
    refetch 
  } = useGetPostsByUserIdQuery(userId || 0, {
    skip: !userId, // Не выполнять запрос если нет userId
  });

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div>Загрузка постов...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div>Ошибка загрузки постов. Попробовать снова</div>
      </div>
    );
  }

  return (
    <div>
      <UserLayout />
      <div className={styles.container}>
        <Link 
          to={`/users/${userId}`}
          className={styles.backLink}
        >
          ← Back to my posts
        </Link>
        <div className={styles.postsCount}>
          Показано {posts?.length || 0} постов
        </div>
      </div>
      
      <div className={styles.content}>
        {posts?.map(post => (
          <PostWithComments key={post.id} post={post} />
        ))}
        
        {(!posts || posts.length === 0) && (
          <div className={styles.noPosts}>
            Нет постов для отображения
          </div>
        )}
      </div>
    </div>
  );
};

export default PostListPage;
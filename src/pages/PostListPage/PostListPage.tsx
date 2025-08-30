import { Link } from 'react-router-dom';
import { useGetPostsByUserIdQuery } from '../../entities/post/api/postsApi';
import UserLayout from '../UserLayout/ui/UserLayout';
import PostWithComments from '../../widgets/PostWithComment/ui/PostWithComments';
import styles from './PostListPage.module.scss';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import { Post } from '../../entities/post/model/types';

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

    // Обработчик клика по посту (опционально) для тестирования
  const handlePostClick = (post: Post, index: number) => {
    // console.log('Post clicked:', post, index);
  };

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

      {/* Используем наш дженерик ItemList */}
      <ItemList<Post>
        items={posts || []}
        renderItem={(post) => (
          <PostWithComments key={post.id} post={post} />
        )}
        onItemClick={handlePostClick
        }
        className={styles.postsList}
        emptyMessage={
          <div className={styles.noPosts}>
            Нет постов для отображения
          </div>
        }
      />
    </div>
  );
};

export default PostListPage;
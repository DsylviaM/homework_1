import { Link } from 'react-router-dom';
import { useGetAlbumsQuery } from '../../entities/album/api/albumsApi';
import styles from './UserAlbumsPage.module.scss';

const UserAlbumsPage = () => {
  const { data: albums, isLoading, error } = useGetAlbumsQuery();

  if (isLoading) return (
    <div>
      <div className={styles.loading}>Загрузка альбомов...</div>
    </div>
  );
  
  if (error) return (
    <div>
      <div className={styles.error}>Ошибка загрузки альбомов</div>
    </div>
  );

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>Мои альбомы</h2>
        <div className={styles.albumsGrid}>
          {albums?.map(album => (
            <Link 
              key={album.id} 
              to={`/albums/${album.id}/photos`}
              className={styles.albumCard}
            >
              <h3 className={styles.albumTitle}>{album.title}</h3>
              <p className={styles.albumId}>Альбом #{album.id}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAlbumsPage;
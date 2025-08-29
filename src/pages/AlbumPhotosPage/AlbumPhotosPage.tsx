import { useParams, Link } from 'react-router-dom';
import UserLayout from '../UserLayout/ui/UserLayout';
import { useGetPhotosByAlbumIdQuery } from '../../entities/photo/api/photosApi';
import styles from './AlbumPhotosPage.module.scss';

const AlbumPhotosPage = () => {
  const { id } = useParams<{ id: string }>();
  const albumId = id ? parseInt(id) : 1;

  const {
    data: photos,
    isLoading,
    error,
    refetch
  } = useGetPhotosByAlbumIdQuery(albumId, {
    skip: !albumId,
  });

  if (isLoading) {
    return (
      <div>
        <UserLayout />
        <div className={styles.loadingContainer}>
          <div>Загрузка фотографий...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <UserLayout />
        <div className={styles.errorContainer}>
          <h2>Ошибка загрузки фотографий. Обновите страницу</h2>
        </div>
      </div>
    );
  }

  if (!albumId) {
    return (
      <div>
        <UserLayout />
        <div className={styles.errorContainer}>
          <h2>Альбом не найден</h2>
          <Link
            to="/posts"
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
          <div className={styles.header}>
            <h2 className={styles.title}> Foto album #{albumId}</h2>
          </div>
          <p className={styles.photosCount}>
            {photos?.length || 0} фотографий
          </p>
          {photos && photos.length > 0 ? (
            <div className={styles.photosGrid}>
              {photos.map(photo => (
                <div
                  key={photo.id}
                  className={styles.photoCard}
                >
                  <img 
                    src={photo.thumbnailUrl} 
                    alt={photo.title}
                    className={styles.photoImage}
                  />
                  <div className={styles.photoContent}>
                    <h4 className={styles.photoTitle}>{photo.title}</h4>
                    <a 
                      href={photo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.photoLink}
                    >
                      Открыть оригинал
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noPhotos}>
              <p className={styles.noPhotosText}>
                В этом альбоме пока нет фотографий
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlbumPhotosPage;
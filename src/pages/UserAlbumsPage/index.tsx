import { Link, useParams } from 'react-router-dom';

const UserAlbumsPage = () => {
  const { id } = useParams();

  const mockAlbums = [
    { id: 1, title: 'Майские 2025', photos: 24 },
    { id: 2, title: 'Семейные фото', photos: 18 },
    { id: 3, title: 'Отпуск 2025', photos: 32 },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Альбомы пользователя #{id}</h2>
      
      <div style={{ 
        background: '#e8f4f8', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p>🗂️ Альбомы пользователя</p>
        <Link to="/albums/1/photos">My photos</Link>
      </div>

      <h3>Мои альбомы:</h3>
      <div style={{ display: 'grid', gap: '10px' }}>
        {mockAlbums.map(album => (
          <div key={album.id} style={{
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            background: '#f9f9f9'
          }}>
            <h4>{album.title}</h4>
            <p>Фотографий: {album.photos}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAlbumsPage;